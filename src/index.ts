import { Player } from "discord-music-player"
import { Client, Intents } from "discord.js"
import * as dotenv from "dotenv"
import * as path from "path"
import WOKCommands from "wokcommands"
import responses from "./features/responses"
import welcomeGoodbye from "./features/welcome-goodbye"
import { addXP } from "./handlers/levels"
import { checkOnJoinMute } from "./handlers/mute"
import { statsOnMessage } from "./handlers/stats"
import init from "./init"
import { reactNewVersion } from "./features/react"
import rage from "./features/rage"
dotenv.config()

const client = new Client({
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

client.on("ready", async () => {
    new WOKCommands(client, {
        commandsDir: path.join(__dirname, "commands"),
        typeScript: true,
        ignoreBots: true,
        mongoUri: process.env.MONGO_URI,
        showWarns: true,
        testServers: Array.from(client.guilds.cache.map((g) => g.id)),
        disabledDefaultCommands: ["help", "command", "language", "prefix", "requiredrole", "channelonly", "slash"],
        botOwners: ["323378898794446850"],
        debug: true,
    })
    init(client, player)
    console.log(`${client?.user?.username} is ready!`)
})

client.on("messageCreate", (message) => {
    const { author } = message

    reactNewVersion(message)
    if (author?.bot) return
    statsOnMessage(message)
    addXP(message, author, "MESSAGE")
    responses(message)
    rage(message)
})

client.on("guildMemberAdd", (member) => {
    welcomeGoodbye(member, "ADD")
    checkOnJoinMute(member)
})

client.on("guildMemberRemove", (member) => {
    welcomeGoodbye(member, "REMOVE")
})

client.login(process.env.TOKEN_OG)
