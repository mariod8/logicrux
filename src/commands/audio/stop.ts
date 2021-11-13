import { GuildChannelResolvable } from "discord.js"
import { ICommand } from "wokcommands"
import { Emojis } from "../../emojis"
import { MyPlayer } from "../../player"

export default {
    category: "Audio",
    description: "Stop audio",
    slash: true,
    testOnly: true,
    callback: async ({ member, guild }) => {
        const player = MyPlayer.getPlayer()
        const channel = member.voice.channel as GuildChannelResolvable

        if (!channel) return `Necesitas estar en un canal de voz ${Emojis.getClientEmojis().none}`
        var queue = player.getQueue(guild!.id)
        if (queue) {
            await queue.stop()
            return `Se ha detenido la cola`
        }
        return `No hay ninguna cola activa ${Emojis.getClientEmojis().none}`
    },
} as ICommand
