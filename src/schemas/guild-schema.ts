import { models, model, Schema } from "mongoose"

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
            userTag: "",
            date: "",
        },
    },
    muted: {
        type: Boolean,
        default: false,
    },
})

export default models[name] || model(name, guildSchema, name)
