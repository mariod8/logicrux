import { Client } from "discord.js"
import * as moment from "moment"
import { ICommand } from "wokcommands"
import { DEV_DISC_ID } from "../../constants"
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

async function cleanGuildSlashCommands(client: Client) {
    await client!.guilds!.cache!.each(async (guild) => {
        await guild!.commands!.fetch()!.then(
            async (commands) =>
                await commands!
                    .filter((c) => c.name !== "dev")
                    .each((c) => {
                        console.log(`Eliminando "${c.name}"`)
                        c!.delete()
                    })
        )
    })
}

export default {
    category: "Testing",
    description: "Some tools for the dev to use",
    slash: true,
    testOnly: true,
    guildOnly: true,
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
                    name: "Clean commands",
                    value: "clean_commands",
                },
            ],
        },
    ],
    callback: async ({ client, member, interaction }) => {
        const action = interaction.options.getString("action")

        if (member.id !== DEV_DISC_ID) return "Solo el desarrollador del bot puede ejercutar este comando"
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
        } else if (action === "clean_commands") {
            cleanGuildSlashCommands(client)
            return "Deleting slash commands"
        }
        await interaction.reply({ content: "OK", ephemeral: true })
    },
} as ICommand
