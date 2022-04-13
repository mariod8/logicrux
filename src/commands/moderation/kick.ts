import { GuildMember, MessageEmbed } from "discord.js"
import { ICommand } from "wokcommands"
import { texts } from "../../locales"

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
    callback: async ({ interaction, user }) => {
        const target = interaction.options.getMember("user") as GuildMember
        const reason = interaction.options.getString("reason")
            ? (interaction.options.getString("reason") as string)
            : texts.reasonNotSpecified(interaction.locale)

        if (!target) return texts.specifySomeoneToKick(interaction.locale)
        if (!target.kickable || target.roles.botRole) return texts.errorKickingUser(interaction.locale)
        const embed = new MessageEmbed()
            .setTitle(texts.kickTitle(target.user.username, interaction.locale))
            .setDescription(texts.kickDescription(target.id, target.user, reason, interaction.locale))
            .setFooter({
                text: texts.kickFooter(user.username, interaction.locale),
                iconURL: user.displayAvatarURL({ dynamic: false, format: "jpg" }),
            })
            .setColor("ORANGE")
        await target.kick(reason).catch(console.error)
        return embed
    },
} as ICommand
