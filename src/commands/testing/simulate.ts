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
            name: "type",
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
    callback: ({ client, member, args }) => {
        if (args[0] === "join") {
            client.emit("guildMemberAdd", member)
        } else if (args[0] === "leave") {
            client.emit("guildMemberRemove", member)
        }
        return "Simulation completed!"
    },
} as ICommand
