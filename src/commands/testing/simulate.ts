import { ICommand } from "wokcommands"

export default {
    category: "Testing",
    description: "Simulates something",
    slash: true,
    testOnly: true,
    guildOnly: true,
    ownerOnly: true,
    options: [
        {
            name: "option",
            description: "Choose the simulation you'd like to run",
            type: "STRING",
            required: true,
            choices: [
                {
                    name: "User joins",
                    value: "join",
                },
                {
                    name: "User leaves",
                    value: "leave",
                },
            ],
        },
    ],
    callback: ({ client, member, interaction }) => {
        const option = interaction.options.getString("application")

        if (option === "join") {
            client.emit("guildMemberAdd", member)
        } else if (option === "leave") {
            client.emit("guildMemberRemove", member)
        }
        return "Simulation completed!"
    },
} as ICommand
