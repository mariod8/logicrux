import { GuildMember, MessageEmbed } from "discord.js"
import { ICommand } from "wokcommands"
import { cleanTimeouts, recoverRoles } from "../../handlers/mute"
import { _mutes } from "../../templates"
import { delMute, getMute } from "../../utils/mongo"

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
    callback: async ({ interaction, user, guild }) => {
        const target = interaction.options.getMember("user") as GuildMember

        if (!target) return "Especifica alguien a mutear"
        //if (!target.manageable) return "No se puede mutear al usuario"

        const previousMute = await getMute({ userID: target.id, guildID: guild!.id, current: true })
        if (previousMute === false) return "Este usuario no está muteado"
        const { userID, guildID, muteID, roles, staffID, staffTag, current, expires, reason } = previousMute as _mutes
        await delMute({ userID, guildID, current: true })
        if (expires !== "never") cleanTimeouts(target.id)
        await recoverRoles(target, roles)

        const embed = new MessageEmbed()
            .setTitle(`${target.user.username} ha sido desmuteado`)
            .setDescription(`**ID Usuario**: ${target.id}\n**Miembro**: ${target}`)
            .setFooter(`Desmuteado por ${user.username}`, user.displayAvatarURL())
            .setColor("GREEN")
        return embed
    },
} as ICommand
