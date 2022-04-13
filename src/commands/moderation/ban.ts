import { GuildMember, MessageEmbed } from "discord.js"
import { ICommand } from "wokcommands"
import { texts } from "../../locales"
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
    callback: async ({ interaction, user }) => {
        const target = interaction.options.getMember("user") as GuildMember
        const reason = interaction.options.getString("reason")
            ? (interaction.options.getString("reason") as string)
            : texts.reasonNotSpecified(interaction.locale)

        if (!target) return texts.specifySomeoneToBan(interaction.locale)
        if (!target.bannable || target.roles.botRole) return texts.errorBanningUser(interaction.locale)
        try {
            await target.ban({
                reason,
            })
        } catch {
            return texts.userAlreadyBanned(interaction.locale)
        }
        const embed = new MessageEmbed()
            .setTitle(texts.banTitle(target.user.username, interaction.locale))
            .setDescription(texts.banDescription(target.id, target.user, reason, interaction.locale))
            .setFooter({
                text: texts.banFooter(user.username, interaction.locale),
                iconURL: user.displayAvatarURL({ dynamic: false, format: "jpg" }),
            })
            .setColor("RED")
        return embed
    },
} as ICommand
