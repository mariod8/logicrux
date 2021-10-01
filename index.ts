import DiscordJS, { Intents } from "discord.js"
import dotenv from "dotenv"
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on("ready", () => {
    console.log(`${client?.user?.username} is ready!`)
})

client.on("messageCreate", message => {
    const { channel } = message

    channel.send("Hello, world!")
})

client.login(process.env.TOKEN)