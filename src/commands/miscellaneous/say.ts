import { ICommand } from "wokcommands"
import { cleanSpam } from "../../util/string"

export default {
    category: "Miscellaneous",
    description: "Echo command",
    minArgs: 1,
    expectedArgs: "<text>",
    slash: true,
    testOnly: true,
    callback: ({ text }) => {
        return cleanSpam(text)
    },
} as ICommand
