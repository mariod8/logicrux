import { GuildMember, MessageEmbed } from "discord.js"
import { ICommand } from "wokcommands"
import { Emojis } from "../emojis"
import { MyMember } from "../member"

export default {
    category: "Stats",
    description: "Get the profile from a user or a guild",
    slash: "both",
    testOnly: true,
    guildOnly: true,
    options: [
        {
            name: "user",
            description: "Who you want to get the profile from. You can leave this blank to get yours",
            required: false,
            type: "STRING",
        },
    ],
    callback: async ({ interaction, message, user }) => {
        const clientEmojis = Emojis.getClientEmojis()
        var targetMember = new MyMember(message.member as GuildMember, clientEmojis)
        //const profile = await getUserProfile({ userID: target!.id, guildID: guild!.id })
        const embed = new MessageEmbed()
            .setTitle(`Perfil de ${targetMember.getUser().username}`)
            .setDescription(targetMember.getStatus())
            .setColor(targetMember.getUserPrimaryColor())
            .setThumbnail(targetMember.getUser().displayAvatarURL())
        return embed
    },
} as ICommand
