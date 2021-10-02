import { GuildMember, MessageEmbed } from "discord.js"
import { ICommand } from "wokcommands"

export default {
    category: "Moderation",
    description: "Bans a user",
    permissions: ["BAN_MEMBERS"],
    slash: true,
    testOnly: true,
    guildOnly: true,
    options: [
        {
            name: "user",
            description: "User you desire to ban",
            required: true,
            type: "USER",
        },
        {
            name: "reason",
            description: "Reason why you want to ban this user",
            required: false,
            type: "STRING",
        },
    ],
    callback: ({ interaction, args, user }) => {
        const target = interaction.options.getMember("user") as GuildMember

        if (!target) return "Please specify someone to ban"
        if (!target.bannable) return "No se puede banear al usuario"
        args.shift()
        const reason = args.length ? args.join(" ") : "_No especificado_"
        const embed = new MessageEmbed()
            .setTitle(`${target.user.username} ha sido baneado`)
            .setDescription(`**ID Usuario**: ${target.id}\n**Miembro**: ${target}\n**Motivo**: ${reason}`)
            .setFooter(`Baneado por ${user.username}`, user.displayAvatarURL())
            .setColor("RED")
        target.ban({
            reason,
        })
        return embed
    },
} as ICommand
