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

export type _2048BtnIds = "left" | "right" | "down" | "up" | "quit"
