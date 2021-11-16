import { GuildMember, MessageEmbed } from "discord.js"
import { ICommand } from "wokcommands"
import { MyMember } from "../../member"

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
    callback: ({ interaction, user }) => {
        const target = new MyMember(interaction.options.getMember("user") as GuildMember)
        const reason = interaction.options.getString("reason")
            ? (interaction.options.getString("reason") as string)
            : "_No especificado_"

        if (!target) return "Especifica alguien a banear"
        if (!target.getMember().bannable || target.getMember().roles.botRole) return "No se puede banear al usuario"
        try {
            target.getMember().ban({
                reason,
            })
        } catch {
            return "El usuario ya está baneado"
        }
        const embed = new MessageEmbed()
            .setTitle(`${target.getUsername()} ha sido baneado`)
            .setDescription(
                `**ID Usuario**: ${target.getId()}\n**Miembro**: ${target.getUser()}\n**Motivo**: ${reason}`
            )
            .setFooter(`Baneado por ${user.username}`, user.displayAvatarURL())
            .setColor("RED")
        return embed
    },
} as ICommand
