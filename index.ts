import DiscordJS, { Intents } from "discord.js"
import dotenv from "dotenv"
import WOKCommands from "wokcommands"
import responses from "./src/features/responses"
import welcomeGoodbye from "./src/features/welcome-goodbye"
import path from "path"
import { statsOnMessage } from "./src/handlers/stats"
import { addXP } from "./src/handlers/levels"
import init from "./src/init"
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_BANS,
    ],
    allowedMentions: {
        repliedUser: false
    }
})

client.on("ready", () => {
    new WOKCommands(client, {
        commandsDir: path.join(__dirname, "src/commands"),
        typeScript: true,
        ignoreBots: true,
        mongoUri: process.env.MONGO_URI,
        showWarns: true,
        testServers: ["829448956417015828", "666295714724446209"],
        disabledDefaultCommands: ["help", "command", "language", "prefix", "requiredrole", "channelonly", "slash"],
    })
        .setDefaultPrefix("//")
        .setBotOwner("323378898794446850")
    //init(client)
    console.log(`${client?.user?.username} is ready!`)
})

client.on("messageCreate", (message) => {
    const { author } = message

    if (author?.bot) return
    statsOnMessage(message)
    addXP(message, author, "MESSAGE")
    responses(message)
})

client.on("guildMemberAdd", (member) => {
    welcomeGoodbye(member, "ADD")
})

client.on("guildMemberRemove", (member) => {
    welcomeGoodbye(member, "REMOVE")
})

client.login(process.env.TOKEN)
