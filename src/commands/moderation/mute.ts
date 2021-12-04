import { GuildMember, MessageEmbed } from "discord.js"
import moment from "moment"
import { ICommand } from "wokcommands"
import { addScheduledUnmute, unmute } from "../../handlers/mute"
import { getMsFromString } from "../../utils/getters"
import { getGuildProfile, getMute, getMutes, setGuildProfile, setMute } from "../../utils/mongo"

export default {
    category: "Moderation",
    description: "Mutes a user",
    permissions: ["MUTE_MEMBERS"],
    slash: true,
    testOnly: true,
    guildOnly: true,
    options: [
        {
            name: "user",
            description: "Mute a user",
            type: "SUB_COMMAND",
            options: [
                {
                    name: "user",
                    description: "User you want to mute",
                    type: "USER",
                    required: true,
                },
                {
                    name: "duration",
                    description: "Cantidad de tiempo a mutear",
                    type: "STRING",
                    required: false,
                },
                {
                    name: "reason",
                    description: "Motivo del muteo",
                    type: "STRING",
                    required: false,
                },
            ],
        },
        {
            name: "server",
            description: "Mute the entire server",
            type: "SUB_COMMAND",
            options: [
                {
                    name: "duration",
                    description: "Cantidad de tiempo a mutear",
                    type: "STRING",
                    required: false,
                },
                {
                    name: "reason",
                    description: "Motivo del muteo",
                    type: "STRING",
                    required: false,
                },
            ],
        },
    ],
    callback: async ({ interaction, user, guild, client }) => {
        const target = interaction.options.getMember("user") as GuildMember
        const reason = interaction.options.getString("reason")
            ? (interaction.options.getString("reason") as string)
            : "_No especificado_"
        const duration = interaction.options.getString("duration") ? interaction.options.getString("duration") : null
        const durationMs = duration ? getMsFromString(duration) : 0
        const startMute = moment().valueOf()
        const endMute = durationMs !== 0 ? startMute + durationMs : null
        const mutedRole = await guild?.roles?.cache?.find((role) => role.name.toLowerCase().includes("mute")!)
        const targetRoles: Array<string> = []
        const muteID = startMute.toString()
        const embed = new MessageEmbed()
        const option = interaction.options.getSubcommand()

        await interaction.deferReply()

        if (option === "server") {
            if (user.id !== guild!.ownerId!) {
                await interaction.editReply("Solo el dueño del servidor puede ejecutar este comando")
                return
            }
            if ((durationMs > 2147483647 || durationMs < 5000) && endMute) {
                await interaction.editReply("La duración no es válida")
                return
            }
            if (!mutedRole) {
                await interaction.editReply("No se ha encontrado el rol de mutear")
                return
            }
            if (guild!.memberCount > 100) {
                await interaction.editReply("Hay demasiados miembros")
                return
            }
            const guildMute = await getGuildProfile({ guildID: guild!.id })
            if (guildMute.muted) {
                await interaction.editReply("El servidor ya está muteado")
                return
            }

            const previousMutes = await getMutes(guild!.id)
            if (previousMutes) {
                const unmutes: Array<any> = []

                previousMutes.forEach(async (previousMute) => {
                    const target = await guild!.members!.cache!.get(previousMute.userID)

                    if (target) unmutes.push(unmute(target, null, false, null, false))
                })
                await Promise.all(unmutes)
            }

            const promises: Array<any> = []
            await guild!.members!.cache!.each(async (target) => {
                const targetRoles: Array<string> = []
                if (!target.manageable || target.roles.botRole) return

                await target.roles.cache
                    .filter((role) => role.editable && role !== guild!.roles.everyone && !role.managed)
                    .forEach((role) => targetRoles.push(role.id))
                promises.push(target.roles.set([mutedRole]))
                //if (endMute) addScheduledUnmute(target, muteID, durationMs, client, false, true)
                await setMute({
                    userID: target.id,
                    guildID: guild!.id,
                    muteID,
                    roles: targetRoles,
                    staffID: user.id,
                    start: startMute,
                    expires: endMute ? endMute : -1,
                    reason,
                }).catch(console.error)
            })

            await Promise.all(promises)
            await setGuildProfile({ guildID: guild!.id }, { muted: true })

            embed
                .setTitle(`${guild!.name} ha sido muteado`)
                .setDescription(
                    `**ID Servidor**: ${guild!.id}\n**Dueño**: ${await guild!.fetchOwner()}\n**Inicio**: ${moment(
                        startMute
                    ).format("lll")}\n**Fin**: ${
                        endMute ? moment(endMute).format("lll") : "_Indefinido_"
                    }\n**Motivo**: ${reason}`
                )
                .setFooter(`Muteado por ${user.username}`, user.displayAvatarURL())
                .setColor("RED")
        } else if (option === "user") {
            if (!target) {
                await interaction.editReply("Especifica alguien a mutear")
                return
            }
            if ((durationMs > 2147483647 || durationMs < 5000) && endMute) {
                await interaction.editReply("La duración no es válida")
                return
            }
            if (!mutedRole) {
                await interaction.editReply("No se ha encontrado el rol de mutear")
                return
            }

            if (!target.manageable || target.roles.botRole) {
                await interaction.editReply("No se puede mutear al usuario")
                return
            }

            const previousMute = await getMute({ userID: target.id, guildID: guild!.id })
            if (previousMute) {
                await interaction.editReply("Este usuario ya está muteado")
                return
            }
            await target.roles.cache
                .filter((role) => role.editable && role !== guild!.roles.everyone && !role.managed)
                .forEach((role) => targetRoles.push(role.id))
            await target.roles.set([mutedRole])
            if (endMute) addScheduledUnmute(target, muteID, durationMs, client, true, false)
            await setMute({
                userID: target.id,
                guildID: guild!.id,
                muteID,
                roles: targetRoles,
                staffID: user.id,
                start: startMute,
                expires: endMute ? endMute : -1,
                reason,
            }).catch(console.error)

            embed
                .setTitle(`${target.user.username} ha sido muteado`)
                .setDescription(
                    `**ID Usuario**: ${target.id}\n**Miembro**: ${target}\n**Inicio**: ${moment(startMute).format(
                        "lll"
                    )}\n**Fin**: ${endMute ? moment(endMute).format("lll") : "_Indefinido_"}\n**Motivo**: ${reason}`
                )
                .setFooter(`Muteado por ${user.username}`, user.displayAvatarURL())
                .setColor("RED")
        }
        await interaction.editReply({ embeds: [embed] })
    },
} as ICommand
