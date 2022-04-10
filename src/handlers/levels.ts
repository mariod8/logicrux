import { Message, MessageEmbed, User } from "discord.js"
import { UserIdentification } from "../templates"
import { getChannelByString } from "../utils/getters"
import { MyMath } from "../utils/math"
import { getUserProfile, setGlobalStats } from "../utils/mongo"

const getXpPerLvl = (level: number, xp: number) => 5 * Math.pow(level, 1.5) + 50 * level + 100 - xp
const getXpPerMsg = (level: number, content: string) => 20 + (level >= 10 ? MyMath.clamp(content.length, 0, 50) : 0)

export async function addXP(message: Message, user: User, method: "MESSAGE") {
    const { guild, content } = message
    const spamChannel = await getChannelByString("spam", guild!)
    const userIdentification: UserIdentification = { guildID: guild!.id, userID: user!.id }
    var {
        userProfile: {
            globalStats: { xp, level, totalXp },
        },
    } = await getUserProfile(userIdentification)
    const previousLevel = level
    
    if (method === "MESSAGE") {
        const xpPerLvl = getXpPerLvl(level, totalXp)
        const xpPerMsg = getXpPerMsg(level, content)

        xp += xpPerMsg
        totalXp += xpPerMsg
        if (xp >= xpPerLvl) {
            level++
            xp -= xpPerLvl
        }
        if (level != previousLevel)
            if (level === 1) spamChannel.send(`**${user?.username}** ha subido a nivel **${level}**`)
            else if (level % 1000 === 0)
                spamChannel.send({
                    embeds: [new MessageEmbed().setTitle(`**${user?.username}** ha subido a nivel **${level}**`).setColor("DARK_GREEN")],
                })
            else if (level % 10 === 0) spamChannel.send(`**${user?.username}** ha subido a nivel **${level}**`)
            else if (level === 666) spamChannel.send(`**${user?.username}** ha subido a nivel **${level}** 👺`)
            else if (level === 69) spamChannel.send(`**${user?.username}** ha subido a nivel **${level}** 😎`)
    }
    setGlobalStats(userIdentification, { xp, level, totalXp })
}
