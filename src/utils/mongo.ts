import userSchema from "../schemas/user-schema"
import { _userIdentification, _userProfile } from "../templates"

function getCleanUserProfile(_userProfile: _userProfile) {
    const userStats = {
        xp: _userProfile?.globalStats?.xp | 0,
        totalXp: _userProfile?.globalStats?.totalXp | 0,
        level: _userProfile?.globalStats?.level | 0,
        mutes: _userProfile?.globalStats?.mutes | 0,
        weeklyUser: _userProfile?.globalStats?.weeklyUser | 0,
        messages: _userProfile?.globalStats?.messages | 0,
        words: _userProfile?.globalStats?.words | 0,
        attachments: _userProfile?.globalStats?.attachments | 0,
        emojis: _userProfile?.globalStats?.emojis | 0,
        commands: _userProfile?.globalStats?.commands | 0,
        musicPlayed: _userProfile?.globalStats?.musicPlayed | 0,
        reactions: _userProfile?.globalStats?.reactions | 0,
        replies: _userProfile?.globalStats?.replies | 0,
        presence: _userProfile?.globalStats?.presence | -1,
    }
    const getMonthlyStats = (week: number, day: number) => {
        return {
            date: _userProfile?.monthlyStats[week][day]?.date,
            userStats: {
                xp: _userProfile?.monthlyStats[week][day]?.userStats.xp | 0,
                totalXp: _userProfile?.monthlyStats[week][day]?.userStats.totalXp | 0,
                level: _userProfile?.monthlyStats[week][day]?.userStats.level | 0,
                mutes: _userProfile?.monthlyStats[week][day]?.userStats.mutes | 0,
                weeklyUser: _userProfile?.monthlyStats[week][day]?.userStats.weeklyUser | 0,
                messages: _userProfile?.monthlyStats[week][day]?.userStats.messages | 0,
                words: _userProfile?.monthlyStats[week][day]?.userStats.words | 0,
                attachments: _userProfile?.monthlyStats[week][day]?.userStats.attachments | 0,
                emojis: _userProfile?.monthlyStats[week][day]?.userStats.emojis | 0,
                commands: _userProfile?.monthlyStats[week][day]?.userStats.commands | 0,
                musicPlayed: _userProfile?.monthlyStats[week][day]?.userStats.musicPlayed | 0,
                reactions: _userProfile?.monthlyStats[week][day]?.userStats.reactions | 0,
                replies: _userProfile?.monthlyStats[week][day]?.userStats.replies | 0,
                presence: _userProfile?.monthlyStats[week][day]?.userStats.presence | 0,
            }
        }
    }
    var userID: string = _userProfile?.userID
    var guildID: string = _userProfile?.guildID
    var globalStats = userStats
    var monthlyStats = [
        [
            getMonthlyStats(0, 0),
            getMonthlyStats(0, 1),
            getMonthlyStats(0, 2),
            getMonthlyStats(0, 3),
            getMonthlyStats(0, 4),
            getMonthlyStats(0, 5),
            getMonthlyStats(0, 6),
        ],
        [
            getMonthlyStats(1, 0),
            getMonthlyStats(1, 1),
            getMonthlyStats(1, 2),
            getMonthlyStats(1, 3),
            getMonthlyStats(1, 4),
            getMonthlyStats(1, 5),
            getMonthlyStats(1, 6),
        ],
        [
            getMonthlyStats(2, 0),
            getMonthlyStats(2, 1),
            getMonthlyStats(2, 2),
            getMonthlyStats(2, 3),
            getMonthlyStats(2, 4),
            getMonthlyStats(2, 5),
            getMonthlyStats(2, 6),
        ],
        [
            getMonthlyStats(3, 0),
            getMonthlyStats(3, 1),
            getMonthlyStats(3, 2),
            getMonthlyStats(3, 3),
            getMonthlyStats(3, 4),
            getMonthlyStats(3, 5),
            getMonthlyStats(3, 6),
        ],
    ]
    return { userID, guildID, globalStats, monthlyStats }
}

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
    var _userProfile: _userProfile = await userSchema.findOne(userIdentification)
    return getCleanUserProfile(_userProfile)
}

export async function getAllGuildUserProfiles(guildID: string) {
    var userProfiles: Array<_userProfile> = await userSchema.find({ guildID })
    return userProfiles.map((userProfile) => getCleanUserProfile(userProfile))
}
