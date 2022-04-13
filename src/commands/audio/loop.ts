import { RepeatMode } from "discord-music-player"
import { GuildChannelResolvable } from "discord.js"
import { ICommand } from "wokcommands"
import { Emojis } from "../../emojis"
import { texts } from "../../locales"
import { MyPlayer } from "../../player"

export default {
    category: "Audio",
    description: "Loop current song or queue",
    guildOnly: true,
    slash: true,
    testOnly: true,
    options: [
        {
            name: "option",
            description:
                "Choose whether you want to loop the current song or the entire queue. You can also disable it",
            required: true,
            type: "STRING",
            choices: [
                {
                    name: "Song",
                    value: "song",
                },
                {
                    name: "Queue",
                    value: "queue",
                },
                {
                    name: "Disable",
                    value: "disable",
                },
            ],
        },
    ],
    callback: async ({ guild, interaction, member }) => {
        const player = MyPlayer.getPlayer()
        const option = interaction.options.getString("option")!
        const channel = member.voice.channel as GuildChannelResolvable

        if (!channel) return texts.missingVoiceChannel(Emojis.getClientEmojis().none, interaction.locale)
        var queue = player.getQueue(guild!.id)
        if (queue) {
            if (option === "song") {
                queue.setRepeatMode(RepeatMode.SONG)
                return texts.loopSong(interaction.locale)
            } else if (option === "queue") {
                queue.setRepeatMode(RepeatMode.QUEUE)
                return texts.loopQueue(interaction.locale)
            } else if (option === "disable") {
                queue.setRepeatMode(RepeatMode.DISABLED)
            }
        }
        return texts.errorNoActiveQueue(Emojis.getClientEmojis().none, interaction.locale)
    },
} as ICommand
