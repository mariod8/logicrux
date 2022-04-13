import { GuildMember, MessageEmbed } from "discord.js"
import * as moment from "moment"
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
            description: "Unmute a user",
            type: "USER",
            required: true,
        },
    ],
    callback: async ({ interaction, user, member, guild }) => {
        const target = interaction.options.getMember("user") as GuildMember
        const mutedRole = await guild?.roles?.cache?.find((role) => role.name.toLowerCase().includes("mute")!)
        const option = interaction.options.getSubcommand()
        const embed = new MessageEmbed()
        var previousMute

        await interaction.deferReply()

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
        previousMute = await unmute(target, null, true, null)
        if (!previousMute) {
            if (await target.roles.cache.has(mutedRole?.id)) await target.roles.remove(mutedRole!)
            await interaction.editReply("Este usuario no está muteado")
            return
        }

        const { start } = previousMute

        embed
            .setTitle(`${target.user.username} ha sido desmuteado`)
            .setDescription(
                `**ID Usuario**: ${target.id}\n**Miembro**: ${target}\n**Muteado desde**: ${getDate(start)}\n**Muteado durante**: ${getTimeElapsed(
                    start,
                    moment.default().valueOf()
                )}`
            )
            .setFooter({
                text: `Desmuteado por ${user.username}`,
                iconURL: user.displayAvatarURL({ dynamic: false, format: "jpg" }),
            })
            .setColor("GREEN")
        await interaction.editReply({ embeds: [embed] })
    },
} as ICommand
