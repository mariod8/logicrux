import moment from "moment"
import { ICommand } from "wokcommands"
import { cleanSpecialCharacters } from "../../utils/string"

export default {
    category: "Testing",
    description: "Return some value",
    slash: true,
    testOnly: true,
    guildOnly: true,
    ownerOnly: true,
    options: [
        {
            name: "option",
            description: "Choose the value you'd like to get",
            type: "STRING",
            required: true,
            choices: [
                {
                    name: "Current date",
                    value: "cur_date",
                },
                {
                    name: "Username",
                    value: "username",
                },
            ],
        },
    ],
    callback: ({ interaction, guild, user }) => {
        const option = interaction.options.getString("option")

        if (option === "cur_date") {
            return moment().toString()
        } else if (option === "username") {
            return cleanSpecialCharacters(guild?.members?.cache?.get(user?.id)?.displayName as string)
        }
        return "Value returned!"
    },
} as ICommand
