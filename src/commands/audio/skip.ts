import { GuildChannelResolvable } from "discord.js"
import { ICommand } from "wokcommands"
import { player } from "../.."
import { Emojis } from "../../emojis"
import { texts } from "../../locales"

export default {
    category: "Audio",
    description: "Skip to the next audio in the queue",
    guildOnly: true,
    testOnly: true,
    slash: true,
    callback: async ({ guild, member, interaction }) => {
        const channel = member.voice.channel as GuildChannelResolvable

        if (!channel) return texts.missingVoiceChannel(Emojis.getClientEmojis().none, interaction.locale)
        var queue = player.getQueue(guild!.id)
        if (queue) {
            await queue.skip()
            return "Ok"
        }
        return texts.queueEnded(interaction.locale)
    },
} as ICommand
