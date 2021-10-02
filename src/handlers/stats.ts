import { Message } from "discord.js"
import { emojis } from "../utils/regex"
import { incGlobalStats } from "../utils/mongo"
import { _userIdentification } from "../templates"

export function statsOnMessage(message: Message) {
    interface _globalStats {
        messages: Number
        words?: Number
        attachments?: Number
        emojis?: Number
        replies?: Number
    }
    var { author, content, attachments, reference, guild, type } = message

    var userIdentification: _userIdentification = {
        userID: author!.id,
        guildID: guild!.id,
    }
    var globalStats: _globalStats = {
        messages: 1,
    }

    if (type !== "DEFAULT") return
    if (content) globalStats.words = content.split(" ").length
    if (attachments.size > 0) globalStats.attachments = attachments.size
    if (reference) globalStats.replies = 1
    if (emojis.test(content)) globalStats.emojis = content?.match(emojis)?.length

    incGlobalStats(userIdentification, globalStats)
}
