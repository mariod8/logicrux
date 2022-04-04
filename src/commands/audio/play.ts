import { GuildChannelResolvable } from "discord.js"
import { ICommand } from "wokcommands"
import { Emojis } from "../../emojis"
import { MyPlayer } from "../../player"

export default {
    category: "Audio",
    description: "Play audio in a voice channel",
    guildOnly: true,
    testOnly: true,
    slash: true,
    options: [
        {
            name: "audio",
            description: "Audio can be played from a Youtube or Spotify link, or a simple search",
            required: true,
            type: "STRING",
        },
    ],
    callback: async ({ interaction, guild, member }) => {
        const player = MyPlayer.getPlayer()
        const audio = interaction.options.getString("audio")!
        const channel = member.voice.channel as GuildChannelResolvable

        if (!channel) return `Necesitas estar en un canal de voz ${Emojis.getClientEmojis().none}`
        interaction.deferReply()
        let queue = player.createQueue(guild!.id)
        await queue.join(member.voice.channel as GuildChannelResolvable)
        if (audio.includes("youtube.com/playlist")) {
            await queue
                .playlist(audio)
                .catch(console.error)
                .then((playlist) =>
                    playlist
                        ? interaction.editReply(
                              `Reproduciendo "**${playlist.name}**" ${Emojis.getRandomDiscEmoji(playlist.name)}`
                          )
                        : interaction.editReply(`No se ha podido reproducir la playlist`)
                )
        } else {
            await queue
                .play(audio)
                .catch(console.error)
                .then((song) =>
                    song
                        ? interaction.editReply(
                              `Reproduciendo "**${song.name}**" ${Emojis.getRandomDiscEmoji(song.name)}`
                          )
                        : interaction.editReply(`No se ha podido reproducir el audio`)
                )
        }
    },
} as ICommand
