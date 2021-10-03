import userSchema from "../schemas/user-schema"
import { _userIdentification, _userProfile } from "../templates"

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

export async function getUserProfile(userIdentification: _userIdentification) {
    var userProfile: _userProfile = await userSchema.findOne(userIdentification)
    var globalStats = {
        xp: userProfile?.globalStats?.xp | 0,
        totalXp: userProfile?.globalStats?.totalXp | 0,
        level: userProfile?.globalStats?.level | 0,
        mutes: userProfile?.globalStats?.mutes | 0,
        weeklyUser: userProfile?.globalStats?.weeklyUser | 0,
        messages: userProfile?.globalStats?.messages | 0,
        words: userProfile?.globalStats?.words | 0,
        attachments: userProfile?.globalStats?.attachments | 0,
        emojis: userProfile?.globalStats?.emojis | 0,
        commands: userProfile?.globalStats?.commands | 0,
        musicPlayed: userProfile?.globalStats?.musicPlayed | 0,
        reactions: userProfile?.globalStats?.reactions | 0,
        replies: userProfile?.globalStats?.replies | 0,
        presence: userProfile?.globalStats?.presence | -1,
    }
    return { globalStats }
}
