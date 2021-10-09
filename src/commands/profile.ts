import { ICommand } from "wokcommands"
import { getUserProfile } from "../utils/mongo"

export default {
    category: "Stats",
    description: "Get the profile from a user or a guild",
    slash: "both",
    testOnly: true,
    guildOnly: true,
    options: [
        {
            name: "user",
            description: "Who you want to get the profile from. You can leave this blank to get your profile",
            required: false,
            type: "STRING",
        },
    ],
    callback: async ({ args, user, guild }) => {
        const profile = await getUserProfile({ userID: user!.id, guildID: guild!.id })

        profile.monthlyStats.forEach((weeklyStats) => {
            weeklyStats.forEach((dailyStats) => {
                console.log(dailyStats.date, dailyStats.userStats)
            })
        })
        return "Done"
    },
} as ICommand
