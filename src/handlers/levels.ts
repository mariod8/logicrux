import { Message, User } from "discord.js"
import { _userIdentification } from "../templates"
import { getChannelByString } from "../utils/getters"
import { MyMath } from "../utils/math"
import { getUserProfile, setGlobalStats } from "../utils/mongo"

const getXpPerLvl = (level: number) => Math.floor(Math.pow(level, 2.5))
const getXpPerMsg = (level: number, content: string) => Math.floor(Math.pow(level, 1.2)) * 100 * (Math.floor(MyMath.clamp(content.length, 0, 30) / 30) + 1)

export async function addXP(message: Message, user: User, method: "MESSAGE" | "BULK") {
    const { guild, content } = message
    const spamChannel = await getChannelByString("spam", guild!)
    const userIdentification: _userIdentification = { guildID: guild!.id, userID: user!.id }
    var {
        globalStats: { xp, level, totalXp },
    } = await getUserProfile(userIdentification)
    const previousLevel = level

    if (method === "MESSAGE") {
        const xpPerLvl = getXpPerLvl(level)
        const xpPerMsg = getXpPerMsg(level, content)

        xp += xpPerMsg
        totalXp += xpPerMsg
        if (xp >= xpPerLvl) {
            ++level
            xp -= xpPerLvl
        }
        if (level != previousLevel)
            if (level === 1) spamChannel.send(`**${user?.username}** ha subido a nivel ${level}`)
            else if (level === 1000) spamChannel.send(`**${user?.username}** ha subido a nivel ${level}!!!`)
            else if (level % 10 === 0) spamChannel.send(`**${user?.username}** ha subido a nivel ${level}`)
            else if (level === 666) spamChannel.send(`**${user?.username}** ha subido a nivel ${level} 👺`)
            else if (level === 69) spamChannel.send(`**${user?.username}** ha subido a nivel ${level} 😎`)
    } else if (method === "BULK") {
    }
    setGlobalStats(userIdentification, { xp, level, totalXp })
}
