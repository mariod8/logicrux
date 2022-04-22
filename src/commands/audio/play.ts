import { GuildChannelResolvable } from "discord.js"
import { ICommand } from "wokcommands"
import { player } from "../.."
import { Emojis } from "../../emojis"
import { texts } from "../../locales"

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
        const audio = interaction.options.getString("audio")!
        const channel = member.voice.channel as GuildChannelResolvable

        if (!channel) return texts.missingVoiceChannel(Emojis.getClientEmojis().none, interaction.locale)
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
                              texts.playingPlaylist(
                                  playlist.name,
                                  Emojis.getRandomDiscEmoji(playlist.name),
                                  interaction.locale
                              )
                          )
                        : interaction.editReply(texts.errorPlayingPlaylist(interaction.locale))
                )
        } else {
            await queue
                .play(audio)
                .catch(console.error)
                .then((song) =>
                    song
                        ? interaction.editReply(
                              texts.playingSong(song.name, Emojis.getRandomDiscEmoji(song.name), interaction.locale)
                          )
                        : interaction.editReply(texts.errorPlayingSong(interaction.locale))
                )
        }
    },
} as ICommand
