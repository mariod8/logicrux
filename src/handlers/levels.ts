import { Message, User } from "discord.js"
import { getChannelByString } from "../utils/getters"
import { getUserProfile, setGlobalStats } from "../utils/mongo"

const getXpPerLvl = (level: number) => Math.floor(Math.pow(level, 1))
const getXpPerMsg = (level: number) => Math.floor(Math.pow(level, 0.55))

export async function addXP(message: Message, user: User, method: "SINGLE" | "BULK") {
    const { guild } = message
    const spamChannel = await getChannelByString("spam", guild!)
    const userIdentification = { guildID: guild?.id, userID: user?.id }
    const userProfile = await getUserProfile(userIdentification)
    if (!userProfile || !spamChannel) return
    var { xp = 0, level = 0, totalXp = 0 } = userProfile
    if (method === "SINGLE") {
        const xpPerLvl = getXpPerLvl(level)
        const xpPerMsg = getXpPerMsg(level)
        xp += xpPerMsg
        totalXp += xpPerMsg
        if (xp >= xpPerLvl) {
            ++level
            xp -= xpPerLvl
        }
        if (level === 1) spamChannel.send(`**${user?.username}** ha subido a nivel ${level}`)
        else if (level % 10 === 0) spamChannel.send(`**${user?.username}** ha subido a nivel ${level}`)
    }
    setGlobalStats(userIdentification, { xp, level, totalXp })
}
