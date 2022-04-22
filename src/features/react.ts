import { Message } from "discord.js"
import { Emojis } from "../emojis"

export async function reactNewVersion(message: Message) {
    const { author, channelId } = message

    const clientEmojis = Emojis.getClientEmojis()

    await message.react(clientEmojis.upvote).catch(console.error)
    await message.react(clientEmojis.downvote).catch(console.error)
}
