import { EmbedFooterData, GuildMember, MessageEmbed } from "discord.js"
import moment from "moment"
import { ICommand } from "wokcommands"
import { unmute } from "../../handlers/mute"
import { _mutes } from "../../templates"
import { getDate, getTimeElapsed } from "../../utils/getters"
import { getGuildProfile, setGuildProfile } from "../../utils/mongo"

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
            description: "Unmute a user",
            type: "SUB_COMMAND",
            options: [
                {
                    name: "user",
                    description: "User you want to unmute",
                    type: "USER",
                    required: true,
                },
            ],
        },
        {
            name: "server",
            description: "Unmute the entire server",
            type: "SUB_COMMAND",
        },
    ],
    callback: async ({ interaction, user, member, guild }) => {
        const target = interaction.options.getMember("user") as GuildMember
        const mutedRole = await guild?.roles?.cache?.find((role) => role.name.toLowerCase().includes("mute")!)
        const option = interaction.options.getSubcommand()
        const embed = new MessageEmbed()
        var previousMute

        await interaction.deferReply()

        if (option === "server") {
            if (user.id !== guild!.ownerId!) {
                await interaction.editReply("Solo el dueño del servidor puede ejecutar este comando")
                return
            }
            if (!mutedRole) {
                await interaction.editReply("No se ha encontrado el rol de mutear")
                return
            }
            const guildMute = await getGuildProfile({ guildID: guild!.id })
            if (!guildMute.muted) {
                await interaction.editReply("El servidor no está muteado")
                return
            }

            await unmute(member, null, false, null, true)
            await setGuildProfile({ guildID: guild!.id }, { muted: false })
            const embedFooterData: EmbedFooterData = {
                text: `Desmuteado por ${user.username}`,
                iconURL: user.displayAvatarURL({ dynamic: false, format: "jpg" }),
            }
            embed
                .setTitle(`${guild!.name} ha sido desmuteado`)
                .setDescription(`**ID Servidor**: ${guild!.id}\n**Dueño**: ${await guild!.fetchOwner()}`)
                .setFooter(embedFooterData)
                .setColor("GREEN")
        } else if (option === "user") {
            if (!target) {
                await interaction.editReply("Especifica alguien a desmutear")
                return
            }
            if (!target.manageable || target.roles.botRole) {
                await interaction.editReply("No se puede desmutear al usuario")
                return
            }
            if (!mutedRole) {
                await interaction.editReply("No se ha encontrado el rol de mutear")
                return
            }
            previousMute = await unmute(target, null, true, null, false)
            if (!previousMute) {
                if (await target.roles.cache.has(mutedRole?.id)) await target.roles.remove(mutedRole!)
                await interaction.editReply("Este usuario no está muteado")
                return
            }

            const { start } = previousMute

            const embedFooterData: EmbedFooterData = {
                text: `Desmuteado por ${user.username}`,
                iconURL: user.displayAvatarURL({ dynamic: false, format: "jpg" }),
            }
            embed
                .setTitle(`${target.user.username} ha sido desmuteado`)
                .setDescription(
                    `**ID Usuario**: ${target.id}\n**Miembro**: ${target}\n**Muteado desde**: ${getDate(
                        start
                    )}\n**Muteado durante**: ${getTimeElapsed(start, moment().valueOf())}`
                )
                .setFooter(embedFooterData)
                .setColor("GREEN")
        }
        await interaction.editReply({ embeds: [embed] })
    },
} as ICommand
