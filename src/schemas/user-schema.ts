import { Schema, models, model } from "mongoose"

const name = "user-profiles"
const userStats = {
    xp: 0,
    totalXp: 0,
    level: 0,
    mutes: 0,
    weeklyUser: 0,
    messages: 0,
    words: 0,
    attachments: 0,
    emojis: {
        unicode: 0,
        custom: 0,
        used: [],
    },
    commands: 0,
    musicPlayed: 0,
    reactions: 0,
    replies: 0,
    apps: {
        _2048: {
            games: 0,
            highscore: 0,
        },
    },
    presence: -1,
}
const userSchema = new Schema({
    guildID: {
        type: String,
        require: true,
    },
    userID: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: false,
    },
    globalStats: {
        type: Object,
        default: userStats,
    },
})

export default models[name] || model(name, userSchema, name)
