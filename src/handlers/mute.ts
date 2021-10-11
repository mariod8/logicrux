import { GuildMember } from "discord.js"
import { _mutes, _unmute } from "../templates"
import { delMute, getMute } from "../utils/mongo"

const scheduledUnmutes: Array<_unmute> = []

export async function recoverRoles(member: GuildMember, roles: Array<string>) {
    await member.roles.set([]).catch(console.error)
    roles.forEach(async (r) => {
        const role = await member.guild.roles.cache.get(r)
        if (role) await member.roles.add(role)
    })
}

export function addScheduledUnmute(member: GuildMember, muteID: string, duration: number) {
    scheduledUnmutes.push({
        userID: member.id,
        unmute: setTimeout(async () => {
            const previousMute = await getMute({ userID: member.id, guildID: member.guild.id, current: true, muteID })
            if (previousMute === false) return
            const { userID, guildID, roles, staffID, staffTag, current, expires, reason } = previousMute as _mutes
            await delMute({ userID, guildID, current: true })
            await recoverRoles(member, roles).catch(console.error)
        }, duration),
    } as _unmute)
}

export function cleanTimeouts(userID: string) {
    for (var i = 0; i < scheduledUnmutes.length; i++)
        if (scheduledUnmutes[i].userID === userID) {
            clearTimeout(scheduledUnmutes[i].unmute)
            scheduledUnmutes.splice(i, 1)
        }
}

export async function checkOnJoinMute(member: GuildMember) {
    const previousMute = await getMute({ userID: member?.id, guildID: member?.guild?.id, current: true })
    if (previousMute !== false) return
    const mutedRole = await member?.guild?.roles?.cache?.find((role) => role.name.toLowerCase().includes("mute")!)
    if (!mutedRole) return
    await member.roles.set([mutedRole])
}
