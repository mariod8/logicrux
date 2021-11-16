import { GuildMember, MessageEmbed } from "discord.js"
import moment from "moment"
import { ICommand } from "wokcommands"
import { unmute } from "../../handlers/mute"
import { _mutes } from "../../templates"
import { getDate, getTimeElapsed } from "../../utils/getters"

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
        const mutedRole = await guild?.roles?.cache?.find((role) => role.name.toLowerCase().includes("mute")!)
        var previousMute

        if (!target) return "Especifica alguien a desmutear"
        if (!target.manageable) return "No se puede desmutear al usuario"
        if (!mutedRole) return "No se ha encontrado el rol de mutear"
        previousMute = await unmute(target, null)
        if(!previousMute) {
            if(await target.roles.cache.has(mutedRole.id))
                await target.roles.remove(mutedRole)
            return "Este usuario no está muteado"
        }

        const {start, expires} = previousMute
        const embed = new MessageEmbed()
            .setTitle(`${target.user.username} ha sido desmuteado`)
            .setDescription(`**ID Usuario**: ${target.id}\n**Miembro**: ${target}\n**Muteado desde**: ${getDate(start)}\n**Muteado durante**: ${getTimeElapsed(start, moment().valueOf())}`)
            .setFooter(`Desmuteado por ${user.username}`, user.displayAvatarURL())
            .setColor("GREEN")
        return embed
    },
} as ICommand
