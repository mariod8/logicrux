import { ICommand } from "wokcommands"
import { cleanSpam } from "../../utils/string"

export default {
    category: "Miscellaneous",
    description: "Echo command",
    slash: true,
    options: [
        {
            name: "text",
            description: "Echo text",
            required: true,
            type: "STRING",
        },
    ],
    callback: ({ text }) => {
        return cleanSpam(text)
    },
} as ICommand
