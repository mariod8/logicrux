import DiscordJS, { Intents } from "discord.js"
import dotenv from "dotenv"
import WOKCommands from "wokcommands"
import path from "path"
dotenv.config()

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.on("ready", () => {
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, "src/commands"),
    typeScript: true,
    ignoreBots: true,
    mongoUri: process.env.MONGO_URI,
    showWarns: true,
    testServers: ["829448956417015828", "666295714724446209"],
    disabledDefaultCommands: [
      "help",
      "command",
      "language",
      "prefix",
      "requiredrole",
      "channelonly",
      "slash",
    ],
  }).setDefaultPrefix("/")
  console.log(`${client?.user?.username} is ready!`)
})

client.on("messageCreate", (message) => {
  const { author } = message

  if (author?.bot) return
})

client.on("guildMemberAdd", (member) => {})

client.login(process.env.TOKEN)
