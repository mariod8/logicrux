import userSchema from "../schemas/user-schema"
import { _globalStats, _userIdentification, _userProfile } from "../templates"

export async function incGlobalStats(userIdentification: _userIdentification, globalStats: any) {
    var promises = []

    for (const globalStat in globalStats) {
        promises.push(
            userSchema.updateOne(
                userIdentification,
                {
                    $inc: {
                        [`globalStats.${globalStat}`]: globalStats[globalStat],
                    },
                } as any,
                {
                    upsert: true,
                    setDefaultsOnInsert: false,
                }
            )
        )
    }
    await Promise.all(promises)
}

export async function setGlobalStats(userIdentification: _userIdentification, globalStats: any) {
    var promises = []

    for (const globalStat in globalStats) {
        promises.push(
            userSchema.updateOne(
                userIdentification,
                {
                    $set: {
                        [`globalStats.${globalStat}`]: globalStats[globalStat],
                    },
                },
                {
                    upsert: true,
                    setDefaultsOnInsert: false,
                }
            )
        )
    }
    await Promise.all(promises)
}

export async function getUserProfile(userIdentification: Object) {
    const {
        xp = 0,
        totalXp = 0,
        level = 0,
        mutes = 0,
        weeklyUser = 0,
        messages = 0,
        words = 0,
        attachments = 0,
        emojis = 0,
        commands = 0,
        musicPlayed = 0,
        reactions = 0,
        replies = 0,
        presence = -1,
    } = (await userSchema.findOne(userIdentification)) as _globalStats
    return {
        xp,
        totalXp,
        level,
        mutes,
        weeklyUser,
        messages,
        words,
        attachments,
        emojis,
        commands,
        musicPlayed,
        reactions,
        replies,
        presence,
    }
}
