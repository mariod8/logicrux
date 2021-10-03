import userSchema from "../schemas/user-schema"
import { _userIdentification, _userProfile } from "../templates"

function getCleanUserProfile(_userProfile: _userProfile) {
    var userID: string = _userProfile.userID
    var guildID: string = _userProfile.guildID
    var globalStats = {
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
    return {userID, guildID, globalStats}
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
    var userProfiles: Array<_userProfile> = await userSchema.find({guildID})
    return userProfiles.map(userProfile => getCleanUserProfile(userProfile))
}