import { getInteractionLocale } from "./utils/getters"

export const texts = {
    missingVoiceChannel: (noneEmoji: any, locale: string) => {
        return {
            "es-ES": `Necesitas estar en un canal de voz ${noneEmoji}`,
            "en-US": `You need to be in a voice channel ${noneEmoji}`,
        }[getInteractionLocale(locale)]
    },
    playingPlaylist: (playlistName: any, discEmoji: any, locale: string) => {
        return { "es-ES": `Reproduciendo "**${playlistName}**" ${discEmoji}`, "en-US": `Playing "**${playlistName}**" ${discEmoji}` }[
            getInteractionLocale(locale)
        ]
    },
    errorPlayingPlaylist: (locale: string) => {
        return { "es-ES": `No se ha podido reproducir la playlist`, "en-US": `Playlist couldn't be played` }[getInteractionLocale(locale)]
    },
    playingSong: (songName: any, discEmoji: any, locale: string) => {
        return { "es-ES": `Reproduciendo "**${songName}**" ${discEmoji}`, "en-US": `Playing "**${songName}**" ${discEmoji}` }[
            getInteractionLocale(locale)
        ]
    },
    errorPlayingSong: (locale: string) => {
        return { "es-ES": `No se ha podido reproducir el audio`, "en-US": `Audio couldn't be played` }[getInteractionLocale(locale)]
    },
    queuePaused: (locale: string) => {
        return { "es-ES": `La cola se ha pausado`, "en-US": `Queue has been paused` }[getInteractionLocale(locale)]
    },
    errorNoActiveQueue: (noneEmoji: any, locale: string) => {
        return {
            "es-ES": `No hay ninguna cola activa ${noneEmoji}`,
            "en-US": `There's not an active queue ${noneEmoji}`,
        }[getInteractionLocale(locale)]
    },
}
