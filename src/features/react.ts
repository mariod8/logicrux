import { Message } from "discord.js"
import { Emojis } from "../emojis"

export async function reactNewVersion(message: Message) {
    const { author, channelId } = message

    if (author.id === "730742657046806529" && channelId === "730742558556291173") {
        const clientEmojis = Emojis.getClientEmojis()

        await message.react(clientEmojis.upvote).catch(console.error)
        await message.react(clientEmojis.downvote).catch(console.error)
    }
}
