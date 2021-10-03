import { ICommand } from "wokcommands"

export default {
    category: "Stats",
    description: "Get the profile from a user or a guild",
    slash: true,
    testOnly: true,
    guildOnly: true,
    options: [
        {
            name: "entity",
            description: "Who you want to get the profile from. You can leave this blank to get your profile",
            required: false,
            type: "STRING",
        },
    ],
    callback: async ({ args, user, channel }) => {},
} as ICommand
