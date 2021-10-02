import { Message } from "discord.js"
import { emojis } from "../utils/regex"
import { incUserSchema } from "../utils/mongo"

export function statsOnMessage(message: Message) {
    interface _userIdentification {
        userID: string
        guildID: string
    }
    interface _userStats {
        messages: Number
        words?: Number
        attachments?: Number
        emojis?: Number
        replies?: Number
    }
    var {
        author,
        member,
        content,
        attachments,
        reference = null,
        channel,
        guild,
        id,
        type,
    } = message

    var userIdentification: _userIdentification = {
        userID: author?.id as string,
        guildID: guild?.id as string,
    }
    var userStats: _userStats = {
        messages: 1,
    }

    if (type !== "DEFAULT") return
    if (content) userStats.words = content.split(" ").length
    if (attachments.size > 0) userStats.attachments = attachments.size
    if (reference) userStats.replies = 1
    if (emojis.test(content)) userStats.emojis = content?.match(emojis)?.length

    incUserSchema(userIdentification, userStats)
}
