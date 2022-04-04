import { GuildChannelResolvable } from "discord.js"
import { ICommand } from "wokcommands"
import { Emojis } from "../../emojis"
import { MyPlayer } from "../../player"

export default {
    category: "Audio",
    description: "Resumes the queue",
    guildOnly: true,
    testOnly: true,
    slash: true,
    callback: async ({ guild, member }) => {
        const player = MyPlayer.getPlayer()
        const channel = member.voice.channel as GuildChannelResolvable

        if (!channel) return `Necesitas estar en un canal de voz ${Emojis.getClientEmojis().none}`
        var queue = player.getQueue(guild!.id)
        if (queue) {
            await queue.setPaused(false)
            return `La cola se ha reanudado`
        }
        return `No hay ninguna cola activa ${Emojis.getClientEmojis().none}`
    },
} as ICommand
