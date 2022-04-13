import { GuildChannelResolvable } from "discord.js"
import { ICommand } from "wokcommands"
import { Emojis } from "../../emojis"
import { texts } from "../../locales"
import { MyPlayer } from "../../player"

export default {
    category: "Audio",
    description: "Stop audio",
    guildOnly: true,
    testOnly: true,
    slash: true,
    callback: async ({ member, guild, interaction }) => {
        const player = MyPlayer.getPlayer()
        const channel = member.voice.channel as GuildChannelResolvable

        if (!channel) return texts.missingVoiceChannel(Emojis.getClientEmojis().none, interaction.locale)
        var queue = player.getQueue(guild!.id)
        if (queue) {
            await queue.stop()
            return texts.queueStopped(interaction.locale)
        }
        return texts.errorNoActiveQueue(Emojis.getClientEmojis().none, interaction.locale)
    },
} as ICommand
