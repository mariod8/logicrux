import { GuildMember, MessageEmbed } from "discord.js"
import { ICommand } from "wokcommands"

export default {
    category: "Moderation",
    description: "Unbans a user",
    permissions: ["BAN_MEMBERS"],
    slash: true,
    testOnly: true,
    guildOnly: true,
    options: [
        {
            name: "user_id",
            description: "UserID from the user you desire to unban",
            required: true,
            type: "STRING",
        },
        {
            name: "reason",
            description: "Reason why you want to unban this user",
            required: false,
            type: "STRING",
        },
    ],
    callback: async ({ guild, args, user, client }) => {
        const userID = args[0]
        const target = await client?.users?.fetch(userID).catch(console.error)

        if (!target) return "El ID de usuario es inválido"
        args.shift()
        const reason = args.length ? args.join(" ") : "_No especificado_"
        guild?.members?.unban(userID, reason).catch(console.error)
        const embed = new MessageEmbed()
            .setTitle(`${target?.username} ha sido desbaneado`)
            .setDescription(
                `**ID Usuario**: ${userID}\n**Miembro**: ${target}\n**Motivo**: ${reason}`
            )
            .setFooter(
                `Desbaneado por ${user?.username}`,
                user.displayAvatarURL()
            )
            .setColor("GREEN")
        return embed
    },
} as ICommand
