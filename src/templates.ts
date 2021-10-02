export interface _globalStats {
    xp: number
    totalXp: number
    level: number
    mutes: number
    weeklyUser: number
    messages: number
    words: number
    attachments: number
    emojis: number
    commands: number
    musicPlayed: number
    reactions: number
    replies: number
    presence: number
}

export interface _userProfile {
    globalStats: _globalStats
}

export interface _userIdentification {
    userID: string
    guildID: string
}

