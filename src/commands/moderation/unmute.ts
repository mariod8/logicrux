import { GuildMember, MessageEmbed } from "discord.js"
import { ICommand } from "wokcommands"
import { unmute } from "../../handlers/mute"
import { _mutes } from "../../templates"

export default {
    category: "Moderation",
    description: "Unmutes a user",
    permissions: ["MUTE_MEMBERS"],
    slash: true,
    testOnly: true,
    guildOnly: true,
    options: [
        {
            name: "user",
            description: "User you desire to unmute",
            required: true,
            type: "USER",
        },
    ],
    callback: async ({ interaction, user, client }) => {
        const target = interaction.options.getMember("user") as GuildMember

        if (!target) return "Especifica alguien a desmutear"
        if (!target.manageable) return "No se puede desmutear al usuario"
        if(!await unmute(target, null)) return "Este usuario no está muteado"

        const embed = new MessageEmbed()
            .setTitle(`${target.user.username} ha sido desmuteado`)
            .setDescription(`**ID Usuario**: ${target.id}\n**Miembro**: ${target}`)
            .setFooter(`Desmuteado por ${user.username}`, user.displayAvatarURL())
            .setColor("GREEN")
        return embed
    },
} as ICommand
