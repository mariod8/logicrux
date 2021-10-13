import { GuildMember, MessageEmbed } from "discord.js"
import { ICommand } from "wokcommands"
import { Emojis } from "../emojis"
import { MyMember } from "../member"
import { getUserProfile } from "../utils/mongo"

export default {
    category: "Stats",
    description: "Get the profile from a user",
    slash: true,
    testOnly: true,
    guildOnly: true,
    options: [
        {
            name: "user",
            description: "Who you want to get the profile from. You can leave this blank to get yours",
            required: false,
            type: "USER",
        },
    ],
    callback: async ({ interaction, member, guild }) => {
        const targetMember = new MyMember(
            interaction.options?.getMember("user") ? (interaction.options.getMember("user") as GuildMember) : member
        )
        const profile = await getUserProfile({ userID: targetMember.getId(), guildID: guild!.id })

        const embed = new MessageEmbed()
            .setTitle(`Perfil de ${targetMember.getUsername()}`)
            .setDescription(targetMember.getStatus())
            .setColor(targetMember.getUserPrimaryColor())
            .setThumbnail(targetMember.getUser().displayAvatarURL())
            .addFields(
                {
                    name: "`General`",
                    value: `**Nivel**: ${profile.userProfile.globalStats.level}`
                }
            )
        return embed
    },
} as ICommand
