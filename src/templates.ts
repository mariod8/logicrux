import { GuildEmoji } from "discord.js"

export type UserIdentification = {
    userID: string
    guildID: string
}

export type _app2048 = {
    games: number
    highscore: number
}

export type Apps = {
    _2048: _app2048
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

export type _mutes = {
    userID: string
    guildID: string
    muteID: string
    staffID: string
    start: number
    expires: number
    roles: Array<string>
    reason: string
}

export type _muteIdentification = {
    userID: string
    guildID: string
    muteID?: string
}

export type Rgb = {
    r: number
    g: number
    b: number
}

export type _unmute = {
    userID: string
    unmute: NodeJS.Timeout
}

export type _2048BtnIds = "left" | "right" | "down" | "up" | "quit"

export type _2048MoveDir = "LEFT" | "RIGHT" | "DOWN" | "UP"

export type _menuPages = "general" | "emojis" | "chat"

export enum _userType {
    User,
    Member,
}

enum EmojisAll {
    none,
    exit,
    downArrow,
    upArrow,
    emoji,
    online,
    idle,
    offline,
    dnd,
    lens,
    hero,
    logiCoin,
    one,
    two,
    three,
    heart,
    unmuted,
    fix,
    muted,
    kekwPurple,
    downvote,
    upvote,
    GOTOHORNYJAIL,
    kekw,
    rightArrow,
    leftArrow,
    logiCoinOld,
}

enum EmojisDisc {
    musicDiscMall,
    musicDiscCat,
    musicDiscBlocks,
    musicDiscPigstep,
    musicDiscStal,
    musicDiscChirp,
    musicDiscWait,
    musicDiscWard,
    musicDiscMellohi,
    musicDiscStrad,
    musicDisc13,
    musicDisc11,
    musicDiscFar,
    musicDiscOtherside,
}

export type EmojisItemAll = {
    [key in EmojisAll & EmojisDisc]: GuildEmoji
}

export type EmojisItemDisc = {
    [key in EmojisDisc]: GuildEmoji
}
