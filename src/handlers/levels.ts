import { Message, User } from "discord.js"
import { getChannelByString } from "../utils/getters"
import { getUserProfile } from "../utils/mongo"

const getXpPerLvl = (level) => Math.floor(Math.pow(level, 1))
const getXpPerMsg = (level) => Math.floor(Math.pow(level, 0.55))

export async function addXP(
    message: Message,
    user: User,
    method: "SINGLE" | "BULK"
) {
    const { guild } = message
    const spamChannel = await getChannelByString("spam", guild)
    const userProfile = await getUserProfile({guildID: guild?.id, userID: user?.id})
    var { xp, level, totalXp } = userProfile

    if (method === "SINGLE") {     
        const xpPerLvl = getXpPerLvl(level)
        const xpPerMsg = getXpPerMsg(level)
        xp += xpPerMsg
        totalXp += xpPerMsg
        if (xp >= xpPerLvl) {
            ++level
            xp -= xpPerLvl
        }
        if(level === 1)
            spamChannel.send(`**${user.username}** ha subido a nivel ${level}`)
        else if(level % 10 === 0)
            spamChannel.send(`**${user.username}** ha subido a nivel ${level}`)
    }
}
