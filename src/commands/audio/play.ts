import { GuildChannelResolvable } from "discord.js"
import { ICommand } from "wokcommands"
import { Emojis } from "../../emojis"
import { MyPlayer } from "../../player"

export default {
    category: "Audio",
    description: "Play audio in a voice channel",
    slash: true,
    testOnly: true,
    options: [
        {
            name: "audio",
            description: "Audio can be played from a Youtube or Spotify link, or a simple search",
            required: true,
            type: "STRING",
        },
    ],
    callback: async ({ interaction, guild, member }) => {
        /*const player = MyPlayer.getPlayer()
        const audio = interaction.options.getString("audio")!

        let queue = player.createQueue(guild!.id)
        await queue.join(member.voice.channel as GuildChannelResolvable)
        let song = await queue.play(audio).catch(console.error)
        if(!song) return "No se ha podido reproducir el audio"
        return `Reproduciendo "**${song.name}**"`*/
        return "WIP"
    },
} as ICommand
