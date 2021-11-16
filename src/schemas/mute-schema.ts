import mongoose, { Schema } from "mongoose"

const name = "mutes"
const muteSchema = new Schema(
    {
        userID: {
            type: String,
            required: true,
        },
        guildID: {
            type: String,
            required: true,
        },
        muteID: {
            type: String,
            required: true,
        },
        staffID: {
            type: String,
            required: true,
        },
        start: {
            type: Number,
            required: true,
        },
        expires: {
            type: Number,
            required: true,
        },
        roles: {
            type: Array,
            required: true,
            default: [],
        },
        reason: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.models[name] || mongoose.model(name, muteSchema, name)
