import { TextChannel } from "discord.js"
import { ICommand } from "wokcommands"
import { _2048Init } from "../../handlers/apps/2048"

export default {
    category: "Miscellaneous",
    description: "Init some type of application",
    slash: "both",
    testOnly: true,
    guildOnly: true,
    options: [
        {
            name: "app",
            description: "Application would you like to run",
            type: "STRING",
            required: true,
            choices: [
                {
                    name: "2048",
                    value: "2048",
                },
            ],
        },
    ],
    callback: async ({ args, user, channel }) => {
        if (args[0] === "2048") {
            _2048Init(channel as TextChannel, user)
            return "Starting 2048 game..."
        }
    },
} as ICommand
