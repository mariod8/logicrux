export type _userIdentification = {
    userID: string
    guildID: string
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
    emojis: number
    commands: number
    musicPlayed: number
    reactions: number
    replies: number
    presence: number
}

export type _dailyStats = {
    date: string
    userStats: _userStats
}

export type _weeklyStats = [
    dailyStats: _dailyStats,
    dailyStats: _dailyStats,
    dailyStats: _dailyStats,
    dailyStats: _dailyStats,
    dailyStats: _dailyStats,
    dailyStats: _dailyStats,
    dailyStats: _dailyStats
]

export type _userProfile = {
    userID: string
    guildID: string
    globalStats: _userStats
    monthlyStats: [
        weeklyStats: _weeklyStats,
        weeklyStats: _weeklyStats,
        weeklyStats: _weeklyStats,
        weeklyStats: _weeklyStats
    ]
}

export type _guildIdentification = {
    guildID: string
}

export type __2048 = {
    score: number
    userID: string
    date: string
}

export type _guildProfile = {
    guildID: string
    _2048: __2048
}

export type rgb = {
    r: number
    g: number
    b: number
}

export type _2048BtnIds = "left" | "right" | "down" | "up" | "quit"
export type _2048MoveDir = "LEFT" | "RIGHT" | "DOWN" | "UP"
