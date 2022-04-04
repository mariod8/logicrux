import guildSchema from "../schemas/guild-schema"
import muteSchema from "../schemas/mute-schema"
import userSchema from "../schemas/user-schema"
import {
    _2048,
    _apps,
    _emojis,
    _guildIdentification,
    _guildProfile,
    _muteIdentification,
    _mutes,
    _userIdentification,
    _userProfile,
    _userStats,
} from "../templates"

function getCleanUserProfile(_userProfile: _userProfile) {
    const _2048: _2048 = {
        games: _userProfile?.globalStats?.apps?._2048?.games | 0,
        highscore: _userProfile?.globalStats?.apps?._2048?.highscore | 0,
    }
    const apps: _apps = {
        _2048,
    }
    const emojis: _emojis = {
        unicode: _userProfile?.globalStats?.emojis?.unicode | 0,
        custom: _userProfile?.globalStats?.emojis?.custom | 0,
        used: _userProfile?.globalStats?.emojis?.used ? _userProfile?.globalStats?.emojis?.used : [],
    }
    const userStats: _userStats = {
        xp: Math.floor(_userProfile?.globalStats?.xp) | 0,
        totalXp: _userProfile?.globalStats?.totalXp | 0,
        level: _userProfile?.globalStats?.level | 0,
        mutes: _userProfile?.globalStats?.mutes | 0,
        weeklyUser: _userProfile?.globalStats?.weeklyUser | 0,
        messages: _userProfile?.globalStats?.messages | 0,
        words: _userProfile?.globalStats?.words | 0,
        attachments: _userProfile?.globalStats?.attachments | 0,
        commands: _userProfile?.globalStats?.commands | 0,
        musicPlayed: _userProfile?.globalStats?.musicPlayed | 0,
        reactions: _userProfile?.globalStats?.reactions | 0,
        replies: _userProfile?.globalStats?.replies | 0,
        presence: _userProfile?.globalStats?.presence | -1,
        emojis,
        apps,
    }
    const userProfile: _userProfile = {
        userID: _userProfile?.userID,
        guildID: _userProfile?.guildID,
        username: _userProfile?.username ? _userProfile?.username : "",
        globalStats: userStats,
    }

    return { userProfile }
}

function getCleanGuildProfile(_guildProfile: _guildProfile) {
    var guildID = _guildProfile?.guildID
    var _2048 = {
        score: _guildProfile?._2048?.score | 0,
        userTag: _guildProfile?._2048?.userTag,
        date: _guildProfile?._2048?.date,
    }
    var muted = _guildProfile?.muted || false
    return { _2048, guildID, muted }
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

export async function setUsername(userIdentification: _userIdentification, username: string) {
    await userSchema.updateOne(
        userIdentification,
        {
            $set: {
                username,
            },
        },
        {
            upsert: true,
            setDefaultsOnInsert: false,
        }
    )
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

export async function getMute(muteIdentification: _muteIdentification) {
    var mute = await muteSchema.findOne(muteIdentification)
    return mute ? (mute as _mutes) : false
}

export async function getMutes(guildID: string) {
    var mute = await muteSchema.find({ guildID })
    return mute ? (mute.map((mute) => mute as _mutes) as Array<_mutes>) : false
}

export async function setMute(mute: _mutes) {
    await new muteSchema(mute).save()
}

export async function deleteMute(muteIdentification: _muteIdentification) {
    await muteSchema.deleteMany(muteIdentification)
}
