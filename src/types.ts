import { GuildEmoji } from "discord.js"

export type UserIdentification = {
    userID: string
    guildID: string
}

export type App2048 = {
    games: number
    highscore: number
}

export type Apps = {
    _2048: App2048
}

export type UserUsedEmojis = {
    name: string
    amount: number
}

export type UserEmojis = {
    unicode: number
    custom: number
    used: Array<UserUsedEmojis>
}

export type UserStats = {
    xp: number
    totalXp: number
    level: number
    mutes: number
    weeklyUser: number
    messages: number
    words: number
    attachments: number
    emojis: UserEmojis
    commands: number
    musicPlayed: number
    reactions: number
    replies: number
    presence: number
    apps: Apps
}

export type UserProfile = {
    userID: string
    guildID: string
    username: string
    globalStats: UserStats
}

export type GuildIdentification = {
    guildID: string
}

export type __2048 = {
    score: number
    userTag: string
    date: string
}

export type GuildProfile = {
    guildID: string
    _2048: __2048
    muted: boolean
}

export type Mute = {
    userID: string
    guildID: string
    muteID: string
    staffID: string
    start: number
    expires: number
    roles: Array<string>
    reason: string
}

export type MuteIdentifier = {
    userID: string
    guildID: string
    muteID?: string
}

export type Rgb = {
    r: number
    g: number
    b: number
}

export type Unmute = {
    userID: string
    unmute: NodeJS.Timeout
}

export type _2048BtnIds = "left" | "right" | "down" | "up" | "quit"

export type _2048MoveDir = "LEFT" | "RIGHT" | "DOWN" | "UP"

export type ProfileMenuPages = "GENERAL" | "EMOJIS" | "CHAT"

export type UserType = "USER" | "MEMBER"

export type Locale = "en-US" | "es-ES"

type McVersion = {
    releaseTime: string
    requires: Array<any>
    sha256: string
    type: string
    version: string
}

export type McVersionList = {
    formatVersion: number
    name: string
    uid: string
    versions: Array<McVersion>
}

export type McServerStatus = "ONLINE" | "OFFLINE"
