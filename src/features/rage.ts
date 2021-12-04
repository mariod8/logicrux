import { Message } from "discord.js"
import { rage } from "../utils/regex"

export default async (message: Message) => {
    const { content, channelId } = message

    if (rage.test(content) && channelId === "783968518672220201") await message.delete().catch(console.error)
}
