import { Player } from "discord-music-player"
import DiscordJS, { Client, Intents } from "discord.js"
import dotenv from "dotenv"
import path from "path"
import WOKCommands from "wokcommands"
import responses from "./src/features/responses"
import welcomeGoodbye from "./src/features/welcome-goodbye"
import { addXP } from "./src/handlers/levels"
import { checkOnJoinMute } from "./src/handlers/mute"
import { statsOnMessage } from "./src/handlers/stats"
import init from "./src/init"
import { reactNewVersion } from "./src/features/react"
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    ],
    allowedMentions: {
        repliedUser: false,
    },
})
const player = new Player(client, {
    leaveOnEmpty: false,
    quality: "high",
    volume: 80,
})
async function cleanGuildSlashCommands(client: Client) {
    await client!.guilds!.cache!.each(async (guild) => {
        await guild!.commands!.fetch()!.then(
            async (commands) =>
                await commands!.each((c) => {
                    console.log(`Eliminando "${c.name}"`)
                    c!.delete()
                })
        )
    })
}

client.on("ready", async () => {
    //await cleanGuildSlashCommands(client)
    new WOKCommands(client, {
        commandsDir: path.join(__dirname, "src/commands"),
        typeScript: true,
        ignoreBots: true,
        mongoUri: process.env.MONGO_URI,
        showWarns: true,
        testServers: ["829448956417015828", "666295714724446209"],
        disabledDefaultCommands: ["help", "command", "language", "prefix", "requiredrole", "channelonly", "slash"],
        botOwners: ["323378898794446850"],
        debug: true,
    }).setDefaultPrefix("//")
    init(client, player)
    console.log(`${client?.user?.username} is ready!`)
})

client.on("messageCreate", (message) => {
    const { author, channelId } = message

    if (author.id === "730742657046806529" && channelId === "730742558556291173") reactNewVersion(message)
    if (author?.bot) return
    statsOnMessage(message)
    addXP(message, author, "MESSAGE")
    responses(message)
})

client.on("guildMemberAdd", (member) => {
    welcomeGoodbye(member, "ADD")
    checkOnJoinMute(member)
})

client.on("guildMemberRemove", (member) => {
    welcomeGoodbye(member, "REMOVE")
})

client.login(process.env.TOKEN_OG)
