import mongoose, { Schema } from "mongoose"

const name = "guild-profiles"
const guildSchema = new Schema({
    guildID: {
        type: String,
        require: true,
    },
    _2048: {
        type: Number,
        default: 0
    }
})

export default mongoose.models[name] || mongoose.model(name, guildSchema, name)
