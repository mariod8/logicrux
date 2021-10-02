import mongoose, { Schema } from "mongoose"

const name = "user-profile"

const userSchema = new Schema({
    guildId: {
        type: String,
        require: true,
    },
    userId: {
        type: String,
        require: true,
    },
    globalStats: {
        type: Object,
        default: {
            xpCurrentLevel: {
                type: Number,
                default: 0,
            },
            totalXp: {
                type: Number,
                default: 0,
            },
            level: {
                type: Number,
                default: 0,
            },
            mutes: {
                type: Number,
                default: 0,
            },
            weeklyUser: {
                type: Number,
                default: 0,
            },
            messages: {
                type: Number,
                default: 0,
            },
            words: {
                type: Number,
                default: 0,
            },
            attachments: {
                type: Number,
                default: 0,
            },
            emojis: {
                type: Number,
                default: 0,
            },
            commands: {
                type: Number,
                default: 0,
            },
            musicPlayed: {
                type: Number,
                default: 0,
            },
            reactions: {
                type: Number,
                default: 0,
            },
            replies: {
                type: Number,
                default: 0,
            },
            presence: {
                type: Number,
                default: -1,
            },
        },
    },
    weeklyStats: {
        type: Object,
    },
})

export default mongoose.models[name] || mongoose.model(name, userSchema, name)
