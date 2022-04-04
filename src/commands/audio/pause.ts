import { GuildChannelResolvable } from "discord.js"
import { ICommand } from "wokcommands"
import { Emojis } from "../../emojis"
import { MyPlayer } from "../../player"

export default {
    category: "Audio",
    description: "Pause the queue",
    guildOnly: true,
    slash: true,
    callback: async ({ guild, member }) => {
        const player = MyPlayer.getPlayer()
        const channel = member.voice.channel as GuildChannelResolvable

        if (!channel) return `Necesitas estar en un canal de voz ${Emojis.getClientEmojis().none}`
        var queue = player.getQueue(guild!.id)
        if (queue) {
            await queue.setPaused(true)
            return `La cola se ha pausado`
        }
        return `No hay ninguna cola activa ${Emojis.getClientEmojis().none}`
    },
} as ICommand
