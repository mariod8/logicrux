import { GuildChannelResolvable } from "discord.js"
import { ICommand } from "wokcommands"
import { player } from "../.."
import { Emojis } from "../../emojis"
import { texts } from "../../locales"

export default {
    category: "Audio",
    description: "Pause the queue",
    guildOnly: true,
    slash: true,
    testOnly: true,
    callback: async ({ guild, member, interaction }) => {
        const channel = member.voice.channel as GuildChannelResolvable

        if (!channel) return texts.missingVoiceChannel(Emojis.getClientEmojis().none, interaction.locale)
        var queue = player.getQueue(guild!.id)
        if (queue) {
            await queue.setPaused(true)
            return texts.queuePaused(interaction.locale)
        }
        return texts.errorNoActiveQueue(Emojis.getClientEmojis().none, interaction.locale)
    },
} as ICommand
