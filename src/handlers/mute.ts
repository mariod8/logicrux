import { Client, EmbedFooterData, GuildMember, MessageEmbed, Role } from "discord.js"
import moment from "moment"
import { _mutes, _unmute } from "../templates"
import { getChannelByString, getDate, getTimeElapsed } from "../utils/getters"
import { deleteMute, getGuildProfile, getMute, getMutes } from "../utils/mongo"

const scheduledUnmutes: Array<_unmute> = []

export async function unmute(
    target: GuildMember,
    client: Client | null,
    reply: boolean,
    muteID: string | null,
    guild: boolean
) {
    if (guild) {
        const previousMutes = await getMutes(target.guild.id)
        var roleIDs: Array<string> = []
        const roles: any = {}
        var promises: Array<any> = []

        if (!previousMutes) return null
        previousMutes.forEach((previousMute) => {
            previousMute.roles.forEach((role) => {
                roleIDs.push(role)
            })
        })
        roleIDs = [...new Set(roleIDs)]
        roleIDs.forEach((role) => {
            promises.push((roles[role] = target.guild!.roles!.cache!.get(role)))
        })
        await Promise.all(promises)

        promises = []
        previousMutes.forEach(async (previousMute) => {
            const userRoles: Array<any> = []

            previousMute.roles.forEach((role) => {
                userRoles.push(roles[role])
            })
            promises.push(
                target!.guild!.members!.cache!.get(previousMute!.userID)!.roles!.set(userRoles!).catch(console.error)
            )
            await deleteMute({ userID: previousMute.userID, guildID: target.guild.id })
        })
        await Promise.all(promises)
    } else {
        const previousMute = muteID
            ? await getMute({ userID: target.id, guildID: target.guild.id, muteID })
            : await getMute({ userID: target.id, guildID: target.guild.id })
        if (!previousMute) return null
        const { userID, guildID, roles, start } = previousMute as _mutes
        await deleteMute({ userID, guildID })
        await recoverRoles(target, roles).catch(console.error)
        cleanTimeouts(target.id)
        if (muteID && client && reply) {
            const spamChannel = await getChannelByString("spam", target.guild!)
            const embedFooterData: EmbedFooterData = {
                text: `Desmuteado por ${target.user.username}`,
                iconURL: target.user.displayAvatarURL({ dynamic: false, format: "jpg" }),
            }
            const embed = new MessageEmbed()
                .setTitle(`${target.user.username} ha sido desmuteado`)
                .setDescription(
                    `**ID Usuario**: ${target.id}\n**Miembro**: ${target}\n**Muteado desde**: ${getDate(
                        start
                    )}\n**Muteado durante**: ${getTimeElapsed(start, moment().valueOf())}`
                )
                .setFooter(embedFooterData)
                .setColor("GREEN")
            await spamChannel.send({ embeds: [embed] })
        }
        return previousMute
    }
}

export async function recoverRoles(member: GuildMember, roles: Array<string>) {
    await member.roles.set([]).catch(console.error)
    roles.forEach(async (r) => {
        const role = await member.guild.roles.cache.get(r)
        if (role) await member.roles.add(role)
    })
}

export function addScheduledUnmute(
    member: GuildMember,
    muteID: string,
    duration: number,
    client: Client,
    reply: boolean,
    guild: boolean
) {
    scheduledUnmutes.push({
        userID: member.id,
        unmute: setTimeout(() => unmute(member, client, reply, muteID, guild), duration),
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
    const guildMute = await getGuildProfile({ guildID: member?.guild?.id })

    if (!mutedRole) return
    if (!member.manageable || member.roles.botRole) return
    if (guildMute.muted) {
        await member.roles.set([mutedRole])
        return
    }
    if (!previousMute) return
    if (previousMute.expires > 0 && previousMute.expires <= moment().valueOf()) {
        await unmute(member, null, true, null, false)
    } else {
        await member.roles.set([mutedRole])
    }
}
