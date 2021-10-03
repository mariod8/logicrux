import moment from "moment"
import { ICommand } from "wokcommands"

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
            ],
        },
    ],
    callback: ({ args }) => {
        if (args[0] === "cur_date") {
            return moment().toString()
        }
        return "Value returned!"
    },
} as ICommand
