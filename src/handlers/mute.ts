import { Client, GuildMember, MessageEmbed } from "discord.js"
import moment from "moment"
import { _mutes, _unmute } from "../templates"
import { getChannelByString, getDate, getTimeElapsed } from "../utils/getters"
import { deleteMute, getMute } from "../utils/mongo"

const scheduledUnmutes: Array<_unmute> = []

export async function unmute(target: GuildMember, client: Client | null, muteID?: string) {
    const previousMute = muteID
        ? await getMute({ userID: target.id, guildID: target.guild.id, muteID })
        : await getMute({ userID: target.id, guildID: target.guild.id })
    if (!previousMute) return null
    const { userID, guildID, roles, start } = previousMute as _mutes
    await deleteMute({ userID, guildID })
    await recoverRoles(target, roles).catch(console.error)
    cleanTimeouts(target.id)
    if(muteID && client) {
        const spamChannel = await getChannelByString("spam", target.guild!)
        const embed = new MessageEmbed()
            .setTitle(`${target.user.username} ha sido desmuteado`)
            .setDescription(`**ID Usuario**: ${target.id}\n**Miembro**: ${target}\n**Muteado desde**: ${getDate(start)}\n**Muteado durante**: ${getTimeElapsed(start, moment().valueOf())}`)
            .setFooter(`Desmuteado por ${client?.user?.username}`, client?.user?.displayAvatarURL())
            .setColor("GREEN")
        await spamChannel.send({embeds: [embed]})
    } 
    return previousMute
}

export async function recoverRoles(member: GuildMember, roles: Array<string>) {
    await member.roles.set([]).catch(console.error)
    roles.forEach(async (r) => {
        const role = await member.guild.roles.cache.get(r)
        if (role) await member.roles.add(role)
    })
}

export function addScheduledUnmute(member: GuildMember, muteID: string, duration: number, client: Client) {
    scheduledUnmutes.push({
        userID: member.id,
        unmute: setTimeout(() => unmute(member, client, muteID), duration),
    } as _unmute)
}

export function cleanTimeouts(userID: string) {
    for (var i = 0; i < scheduledUnmutes.length; i++)
        if (scheduledUnmutes[i].userID === userID) {
            clearTimeout(scheduledUnmutes[i].unmute)
            scheduledUnmutes.splice(i, 1)
            break
        }
}

export async function checkOnJoinMute(member: GuildMember) {
    const previousMute = await getMute({ userID: member?.id, guildID: member?.guild?.id })
    const mutedRole = await member?.guild?.roles?.cache?.find((role) => role.name.toLowerCase().includes("mute")!)

    if (!previousMute) return
    if (!mutedRole) return
    if (previousMute.expires > 0 && previousMute.expires <= moment().valueOf()) {
        await unmute(member, null)
    } else {
        await member.roles.set([mutedRole])
    }
}
