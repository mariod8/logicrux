import { Guild, MessageEmbed } from "discord.js"
import { ICommand } from "wokcommands"
import { Emojis } from "../emojis"
import { getAllGuildUserProfiles } from "../utils/mongo"
import { cleanSpecialCharacters, intToString } from "../utils/string"

const maxItemsPerPage = 10

function getLeaderboardEmbed(guild: Guild, data: any, title: string, orderColumn: string = "1") {
    const embed = new MessageEmbed().setTitle(`Leaderboard ${title}`).setColor("GREEN")
    const clientEmojis = Emojis.getClientEmojis()
    const dataTypes = data[0].split("#")

    data.splice(0, 1)
    for (let i = 0; i < dataTypes.length; i++) {
        var column = ""

        data.sort(function (a: any, b: any) {
            return b[orderColumn] - a[orderColumn]
        })
        for (var j = 0; j < maxItemsPerPage && j < data.length; j++) {
            column +=
                (i > 0
                    ? ""
                    : j === 0
                    ? `${clientEmojis.one} `
                    : j === 1
                    ? `${clientEmojis.two} `
                    : j === 2
                    ? `${clientEmojis.three} `
                    : `${j + 1}. `) + `${data[j][i]}\n`
        }
        embed.addFields({
            name: dataTypes[i],
            value: column,
            inline: true,
        })
    }
    return embed
}

export default {
    category: "Stats",
    description: "Get the leaderboard related to some data",
    slash: true,
    testOnly: true,
    options: [
        {
            name: "option",
            description: "Leaderboard topic",
            required: true,
            type: "STRING",
            choices: [
                {
                    name: "Level",
                    value: "level",
                },
                {
                    name: "2048",
                    value: "2048",
                },
            ],
        },
    ],
    callback: async ({ guild, interaction }) => {
        const profiles = await getAllGuildUserProfiles("666295714724446209")
        const option = interaction.options.getString("option")!
        var data = []

        if (option === "level") {
            data.push("Nombre#Nivel")
            for (var i = 0; i < profiles.length; i++) {
                var userData: any = {}
                userData["0"] = cleanSpecialCharacters(profiles[i].userProfile.username)
                userData["1"] = profiles[i].userProfile.globalStats.level.toString()
                data.push(userData)
            }
            return await getLeaderboardEmbed(guild!, data, "Niveles")
        } else if (option === "2048") {
            data.push("Nombre#Highscore#Partidas")
            for (var i = 0; i < profiles.length; i++) {
                if(profiles[i].userProfile.globalStats.apps._2048.games === 0) continue
                var userData: any = {}
                userData["0"] = cleanSpecialCharacters(profiles[i].userProfile.username)
                userData["1"] = profiles[i].userProfile.globalStats.apps._2048.highscore.toString()
                userData["2"] = profiles[i].userProfile.globalStats.apps._2048.games.toString()
                data.push(userData)
            }
            return await getLeaderboardEmbed(guild!, data, "2048")
        }
    },
} as ICommand
