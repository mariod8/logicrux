import guildSchema from "../schemas/guild-schema"
import userSchema from "../schemas/user-schema"
import { _guildIdentification, _guildProfile, _userIdentification, _userProfile, _userStats } from "../templates"

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
        apps: {
            _2048_: {
                games: _userProfile?.globalStats?.apps?._2048?.games | 0,
                highscore: _userProfile?.globalStats?.apps?._2048?.highscore | 0,
            },
        },
    }
    var userID: string = _userProfile?.userID
    var guildID: string = _userProfile?.guildID
    var globalStats = userStats
    return { userID, guildID, globalStats }
}

function getCleanGuildProfile(_guildProfile: _guildProfile) {
    var guildID = _guildProfile?.guildID
    var _2048 = {
        score: _guildProfile?._2048?.score | 0,
        userID: _guildProfile?._2048?.userID,
        date: _guildProfile?._2048?.date,
    }
    return { _2048, guildID }
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

export async function incGuildProfile(guildIdentification: _guildIdentification, properties: any) {
    var promises = []

    for (const property in properties) {
        promises.push(
            guildSchema.updateOne(
                guildIdentification,
                {
                    $inc: {
                        [`${property}`]: properties[property],
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

export async function setGuildProfile(guildIdentification: _guildIdentification, properties: any) {
    var promises = []

    for (const property in properties) {
        promises.push(
            guildSchema.updateOne(
                guildIdentification,
                {
                    $set: {
                        [`${property}`]: properties[property],
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

export async function getUserProfile(userIdentification: _userIdentification) {
    var userProfile: _userProfile = await userSchema.findOne(userIdentification)
    return getCleanUserProfile(userProfile)
}

export async function getAllGuildUserProfiles(guildID: string) {
    var userProfiles: Array<_userProfile> = await userSchema.find({ guildID })
    return userProfiles.map((userProfile) => getCleanUserProfile(userProfile))
}

export async function getGuildProfile(guildIdentification: _guildIdentification) {
    var guildProfile: _guildProfile = await guildSchema.findOne(guildIdentification)
    return getCleanGuildProfile(guildProfile) as _guildProfile
}
