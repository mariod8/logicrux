export type _userIdentification = {
    userID: string
    guildID: string
}

export type _userProfile = {
    globalStats: {
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
}
