import { Message } from "discord.js"
import { emojis } from "../utils/regex"
import { getUserProfile, incGlobalStats, setGlobalStats, setUsername } from "../utils/mongo"
import { UserIdentification } from "../templates"
import { getTime } from "../utils/getters"

var weeklyStatTracking

export async function statsOnMessage(message: Message) {
    var { author, content, attachments, reference, guild, type } = message
    var match: any

    var userIdentification: UserIdentification = {
        userID: author!.id,
        guildID: guild!.id,
    }
    var userStats: any = {
        messages: 1,
    }
    var {
        userProfile: {
            globalStats: {
                emojis: { used, unicode, custom },
            },
            username,
        },
    } = await getUserProfile({ userID: author.id, guildID: guild!.id })

    if (type !== "DEFAULT") return
    if (content) userStats.words = content.split(" ").length
    if (attachments.size > 0) userStats.attachments = attachments.size
    if (reference) userStats.replies = 1
    if (content.match(emojis))
        while ((match = emojis.exec(content))) {
            var found = false
            const name = match[1] ? match[1] : match[3]

            match[3] ? unicode++ : custom++
            used.forEach((emoji) => {
                if (emoji.name == name) {
                    emoji.amount++
                    found = true
                }
            })
            if (!found)
                used.push({
                    name,
                    amount: 1,
                })
        }
    if (username === "" || username !== author.username) setUsername(userIdentification, author.username)
    incGlobalStats(userIdentification, userStats)
    setGlobalStats(userIdentification, { "emojis.used": used, "emojis.unicode": unicode, "emojis.custom": custom })
}

export function weeklyStats() {
    weeklyStatTracking = setTimeout(() => {
        setInterval(() => {}, getTime("WEEKLY_LOOP"))
    }, getTime("MS_TO_END_OF_WEEK"))
}
