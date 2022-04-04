import { EmbedFooterData, GuildMember, MessageEmbed } from "discord.js"
import { ICommand } from "wokcommands"

export default {
    category: "Moderation",
    description: "Unbans a user",
    permissions: ["BAN_MEMBERS"],
    slash: true,
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
    callback: async ({ interaction, guild, user, client }) => {
        const target = await client?.users?.fetch(interaction.options.getString("user_id")!).catch(console.error)!
        const reason = interaction.options.getString("reason")
            ? (interaction.options.getString("reason") as string)
            : "_No especificado_"

        if (!target) return "El ID de usuario es inválido"
        try {
            await guild?.members?.unban(target, reason)
        } catch {
            return "El usuario no está baneado"
        }
        const embedFooterData: EmbedFooterData = {
            text: `Desbaneado por ${user.username}`,
            iconURL: user.displayAvatarURL({ dynamic: false, format: "jpg" }),
        }
        const embed = new MessageEmbed()
            .setTitle(`${target?.username} ha sido desbaneado`)
            .setDescription(`**ID Usuario**: ${target.id}\n**Miembro**: ${target}\n**Motivo**: ${reason}`)
            .setFooter(embedFooterData)
            .setColor("GREEN")
        return embed
    },
} as ICommand
