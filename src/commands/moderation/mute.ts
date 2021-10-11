import { GuildMember, MessageEmbed } from "discord.js"
import moment from "moment"
import { ICommand } from "wokcommands"
import { getMsFromString } from "../../utils/getters"
import { getMute, setMute } from "../../utils/mongo"

export default {
    category: "Moderation",
    description: "Mutes a user",
    permissions: ["BAN_MEMBERS"],
    slash: true,
    testOnly: true,
    guildOnly: true,
    options: [
        {
            name: "user",
            description: "User you desire to mute",
            required: true,
            type: "USER",
        },
        {
            name: "duration",
            description: 'Mute duration. Minimum one minute. Maximum 24 days. ex.: "20m" (20 minutes)',
            required: false,
            type: "STRING",
        },
        {
            name: "reason",
            description: "Reason why you want to mute this user",
            required: false,
            type: "STRING",
        },
    ],
    callback: async ({ interaction, user, guild }) => {
        const target = interaction.options.getMember("user") as GuildMember
        const reason = interaction.options.getString("reason")
            ? interaction.options.getString("reason")
            : "_No especificado_"
        const duration = interaction.options.getString("duration") ? interaction.options.getString("duration") : null
        const durationMs = duration ? getMsFromString(duration) : 0
        const startMute = moment().valueOf()
        const endMute = durationMs !== 0 ? startMute + durationMs : null
        const muteRole = await guild.roles.cache.find((role) => role.name.toLowerCase().includes("mute"))
        const targetRoles = []

        if (!target) return "Especifica alguien a mutear"
        if (durationMs > 2147483647 || durationMs < 5000) return "La duración no es válida"
        if (!muteRole) return "No se ha encontrado el rol de mutear"
        //if (!target.manageable) return "No se puede mutear al usuario"
        const previousMute = await getMute({ userID: target.id, guildID: guild!.id, current: true })

        if (previousMute !== false) return "Este usuario ya está muteado"
        await target.roles.cache.forEach(role => targetRoles.push(role.id))

        await setMute({
            userID: target.id,
            guildID: guild.id,
            muteID: startMute.toString(),
            roles: targetRoles,
            staffID: user.id,
            staffTag: user.tag,
            reason,
            current: true,
            expires: endMute ? endMute.toString() : "never"
        })
        const embed = new MessageEmbed()
            .setTitle(`${target.user.username} ha sido muteado`)
            .setDescription(
                `**ID Usuario**: ${target.id}\n**Miembro**: ${target}\n**Inicio**: ${moment(startMute).format(
                    "lll"
                )}\n**Fin**: ${endMute ? moment(endMute).format("lll") : "_Indefinido_"}\n**Motivo**: ${reason}`
            )
            .setFooter(`Muteado por ${user.username}`, user.displayAvatarURL())
            .setColor("RED")
        return embed
    },
} as ICommand
