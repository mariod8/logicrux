import * as moment from "moment"
import { ICommand } from "wokcommands"
import { setGlobalStats, setUsername } from "../../utils/mongo"
import { cleanSpecialCharacters } from "../../utils/string"

const stats: any = {}

async function setStats() {
    for (var stat in stats) {
        var stat_: any = stats[stat]

        console.log(stat_.name)
        await setGlobalStats(
            {
                userID: stat_.userId,
                guildID: "666295714724446209",
            },
            {
                messages: stat_.messages,
                words: stat_.words,
                attachments: stat_.attachments,
                "emojis.unicode": stat_.unicode,
                "emojis.custom": stat_.custom,
                "emojis.used": stat_.used,
                level: stat_.level,
                xp: stat_.xp,
                totalXp: stat_.totalXp,
                reactions: stat_.reactions,
            }
        )
        await setUsername(
            {
                userID: stat_.userId,
                guildID: "666295714724446209",
            },
            stat_.name.substring(0, stat_.name.length - 5) as string
        )
    }
}

export default {
    category: "Testing",
    description: "Some tools for the owner to use",
    slash: true,
    testOnly: true,
    guildOnly: true,
    ownerOnly: true,
    options: [
        {
            name: "action",
            description: "Choose something to do",
            type: "STRING",
            required: true,
            choices: [
                {
                    name: "Member add",
                    value: "member_add",
                },
                {
                    name: "Member remove",
                    value: "member_remove",
                },
                {
                    name: "Current date",
                    value: "curr_date",
                },
                {
                    name: "Username",
                    value: "username",
                },
                {
                    name: "Reset",
                    value: "reset",
                },
                {
                    name: "Add",
                    value: "add",
                },
                {
                    name: "Stats",
                    value: "stats",
                },
                {
                    name: "Permissions",
                    value: "perms",
                },
            ],
        },
    ],
    callback: async ({ client, member, interaction, guild }) => {
        const action = interaction.options.getString("action")

        if (action === "curr_date") {
            return moment.default().format("llll")
        } else if (action === "member_add") {
            client.emit("guildMemberAdd", member)
        } else if (action === "member_remove") {
            client.emit("guildMemberRemove", member)
        } else if (action === "username") {
            return cleanSpecialCharacters(member.user.username)
        } else if (action === "member_add") {
            client.emit("guildMemberAdd", member)
        } else if (action === "stats") {
            setStats()
            return "Upserting stats!"
        } else if (action === "perms") {
            ;("TODO")
        }
        await interaction.reply({ content: "OK", ephemeral: true })
    },
} as ICommand
