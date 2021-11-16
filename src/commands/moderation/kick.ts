import { GuildMember, MessageEmbed } from "discord.js"
import { ICommand } from "wokcommands"

export default {
    category: "Moderation",
    description: "Kicks a user",
    permissions: ["KICK_MEMBERS"],
    slash: true,
    testOnly: true,
    guildOnly: true,
    options: [
        {
            name: "user",
            description: "User you want to kick",
            required: true,
            type: "USER",
        },
        {
            name: "reason",
            description: "Reason why you want to kick this user",
            required: false,
            type: "STRING",
        },
    ],
    callback: ({ interaction, user }) => {
        const target = interaction.options.getMember("user") as GuildMember
        const reason = interaction.options.getString("reason")
            ? (interaction.options.getString("reason") as string)
            : "_No especificado_"

        if (!target) return "Especifica alguien a expulsar"
        if (!target.kickable || target.roles.botRole) return "No se puede expulsar al usuario"
        const embed = new MessageEmbed()
            .setTitle(`${target.user.username} ha sido expulsado`)
            .setDescription(`**ID Usuario**: ${target.id}\n**Miembro**: ${target}\n**Motivo**: ${reason}`)
            .setFooter(`Expulsado por ${user.username}`, user.displayAvatarURL())
            .setColor("ORANGE")
        target.kick(reason).catch(console.error)
        return embed
    },
} as ICommand
