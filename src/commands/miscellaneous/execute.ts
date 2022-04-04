import { TextChannel } from "discord.js"
import { ICommand } from "wokcommands"
import { _2048Init } from "../../handlers/apps/2048"

export default {
    category: "Miscellaneous",
    description: "Init some type of application",
    slash: true,
    testOnly: true,
    guildOnly: true,
    options: [
        {
            name: "application",
            description: "Application you'd like to run",
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
    callback: async ({ interaction, user, channel }) => {
        const application = interaction.options.getString("application")

        if (application === "2048") {
            _2048Init(channel as TextChannel, user)
            return "Starting 2048 game..."
        }
    },
} as ICommand
