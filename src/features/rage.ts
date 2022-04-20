import { Message } from "discord.js"
import { LC_RAGE_CHANNEL_ID } from "../constants"
import { rage } from "../utils/regex"

export default async (message: Message) => {
    const { content, channelId } = message

    if (rage.test(content) && channelId === LC_RAGE_CHANNEL_ID) await message.delete().catch(console.error)
}
