export type _userIdentification = {
    userID: string
    guildID: string
}

export type _2048 = {
    games: number
    highscore: number
}

export type _apps = {
    _2048: _2048
}

export type _used = {
    name: string
    amount: number
}

export type _emojis = {
    unicode: number
    custom: number
    used: Array<_used>
}

export type _userStats = {
    xp: number
    totalXp: number
    level: number
    mutes: number
    weeklyUser: number
    messages: number
    words: number
    attachments: number
    emojis: _emojis
    commands: number
    musicPlayed: number
    reactions: number
    replies: number
    presence: number
    apps: _apps
}

export type _userProfile = {
    userID: string
    guildID: string
    username: string
    globalStats: _userStats
}

export type _guildIdentification = {
    guildID: string
}

export type __2048 = {
    score: number
    userTag: string
    date: string
}

export type _guildProfile = {
    guildID: string
    _2048: __2048
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

export type rgb = {
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
