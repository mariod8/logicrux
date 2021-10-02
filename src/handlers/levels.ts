import { Message, User } from "discord.js"
import { _userIdentification } from "../templates"
import { getChannelByString } from "../utils/getters"
import { getUserProfile, setGlobalStats } from "../utils/mongo"

const getXpPerLvl = (level: number) => Math.floor(Math.pow(level, 1))
const getXpPerMsg = (level: number) => Math.floor(Math.pow(level, 0.55))

export async function addXP(message: Message, user: User, method: "SINGLE" | "BULK") {
    const { guild } = message
    const spamChannel = await getChannelByString("spam", guild!)
    const userIdentification: _userIdentification = { guildID: guild!.id, userID: user!.id }
    var { xp, level, totalXp } = await getUserProfile(userIdentification)
    if (!spamChannel) return

    if (method === "SINGLE") {
        console.log(xp, level, totalXp)
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
        console.log(xp, level, totalXp)
    }
    await setGlobalStats(userIdentification, { xp, level, totalXp })
}
