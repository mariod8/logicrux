import { Message } from "discord.js"
import { emojis } from "../utils/regex"
import { incUserSchema } from "../utils/mongo"

export function statsOnMessage(message: Message) {
    interface _globalStats {
        messages: Number
        words?: Number
        attachments?: Number
        emojis?: Number
        replies?: Number
    }
    interface _userIdentification {
        userID: string
        guildID: string
    }
    interface _userStats {
        globalStats: _globalStats
    }
    var {
        author,
        content,
        attachments,
        reference = null,
        guild,
        type,
    } = message

    var userIdentification: _userIdentification = {
        userID: author?.id as string,
        guildID: guild?.id as string,
    }
    var userStats: _userStats = {
        globalStats: {
            messages: 1
        }
    }

    if (type !== "DEFAULT") return
    if (content) userStats.globalStats.words = content.split(" ").length
    if (attachments.size > 0) userStats.globalStats.attachments = attachments.size
    if (reference) userStats.globalStats.replies = 1
    if (emojis.test(content)) userStats.globalStats.emojis = content?.match(emojis)?.length

    incUserSchema(userIdentification, userStats)
}
