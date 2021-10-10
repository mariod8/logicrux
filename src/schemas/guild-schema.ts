import mongoose, { Schema } from "mongoose"

const name = "guild-profiles"
const guildSchema = new Schema({
    guildID: {
        type: String,
        required: true,
    },
    _2048: {
        type: Object,
        default: {
            score: 0,
            userID: "",
            date: "",
        },
    },
})

export default mongoose.models[name] || mongoose.model(name, guildSchema, name)
