import { ICommand } from "wokcommands"
import { cleanSpam } from "../util/string"

export default {
    category: "Miscellanious",
    description: "Echo command",
    minArgs: 1,
    expectedArgs: "<text>",
    slash: true,
    testOnly: true,
    callback: ({ channel, interaction, text }) => {
        return cleanSpam(text)
    },
} as ICommand
