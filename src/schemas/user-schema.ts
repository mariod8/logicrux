import mongoose, { Schema } from "mongoose"

const name = "user-profiles"

const userSchema = new Schema({
    guildID: {
        type: String,
        require: true,
    },
    userID: {
        type: String,
        require: true,
    },
    globalStats: {
        type: Object,
        default: {
            xp: 0,
            totalXp: 0,
            level: 0,
            mutes: 0,
            weeklyUser: 0,
            messages: 0,
            words: 0,
            attachments: 0,
            emojis: 0,
            commands: 0,
            musicPlayed: 0,
            reactions: 0,
            replies: 0,
            presence: -1,
        },
    },
    weeklyStats: {
        type: Object,
        default: {},
    },
})

export default mongoose.models[name] || mongoose.model(name, userSchema, name)
