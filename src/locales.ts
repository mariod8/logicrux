import { getInteractionLocale } from "./utils/getters"

export const texts = {
    missingVoiceChannel: (noneEmoji: any, locale: string) => {
        return {
            "es-ES": `Necesitas estar en un canal de voz ${noneEmoji}`,
            "en-US": `You need to be in a voice channel ${noneEmoji}`,
        }[getInteractionLocale(locale)]
    },
    playingPlaylist: (playlistName: any, discEmoji: any, locale: string) => {
        return {
            "es-ES": `Reproduciendo "**${playlistName}**" ${discEmoji}`,
            "en-US": `Playing "**${playlistName}**" ${discEmoji}`,
        }[getInteractionLocale(locale)]
    },
    errorPlayingPlaylist: (locale: string) => {
        return { "es-ES": `No se ha podido reproducir la playlist`, "en-US": `Playlist couldn't be played` }[
            getInteractionLocale(locale)
        ]
    },
    playingSong: (songName: any, discEmoji: any, locale: string) => {
        return {
            "es-ES": `Reproduciendo "**${songName}**" ${discEmoji}`,
            "en-US": `Playing "**${songName}**" ${discEmoji}`,
        }[getInteractionLocale(locale)]
    },
    errorPlayingSong: (locale: string) => {
        return { "es-ES": `No se ha podido reproducir el audio`, "en-US": `Audio couldn't be played` }[
            getInteractionLocale(locale)
        ]
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
    loopSong: (locale: string) => {
        return { "es-ES": `El audio actual se ha puesto en bucle`, "en-US": `Looping current audio` }[
            getInteractionLocale(locale)
        ]
    },
    loopQueue: (locale: string) => {
        return { "es-ES": `La cola actual se ha puesto en bucle`, "en-US": `Looping current queue` }[
            getInteractionLocale(locale)
        ]
    },
    queueResumed: (locale: string) => {
        return { "es-ES": `La cola se ha reanudado`, "en-US": `Queue has been resumed` }[getInteractionLocale(locale)]
    },
    queueShuffled: (locale: string) => {
        return { "es-ES": `La cola se ha aleatorizado`, "en-US": `Queue has been shuffled` }[
            getInteractionLocale(locale)
        ]
    },
    queueEnded: (locale: string) => {
        return { "es-ES": `La cola ha terminado`, "en-US": `Queue ended` }[getInteractionLocale(locale)]
    },
    queueStopped: (locale: string) => {
        return { "es-ES": `La cola se ha detenido`, "en-US": `Queue has been stopped` }[getInteractionLocale(locale)]
    },
    invalidEmoji: (locale: string) => {
        return {
            "es-ES": "El emoji introducido no se puede usar o bien no es un emoji",
            "en-US": "The emoji you introduced can't be used or it isn't an emoji",
        }[getInteractionLocale(locale)]
    },
    errorPrintOutChar: (char: any, locale: string) => {
        return {
            "es-ES": `El caracter ${char} no se puede imprimir`,
            "en-US": `Character ${char} can't be printed out`,
        }[getInteractionLocale(locale)]
    },
    errorMsgContentTooLong: (locale: string) => {
        return {
            "es-ES": "El resultado del mensaje supera el límite de 2000 caracteres",
            "en-US": "Resulting message exceeds the 2000 character limit",
        }[getInteractionLocale(locale)]
    },
    reasonNotSpecified: (locale: string) => {
        return {
            "es-ES": "_No especificado_",
            "en-US": "_No specified_",
        }[getInteractionLocale(locale)]
    },
    specifySomeoneToBan: (locale: string) => {
        return {
            "es-ES": "Especifica alguien a banear",
            "en-US": "Specify someone to ban",
        }[getInteractionLocale(locale)]
    },
    errorBanningUser: (locale: string) => {
        return {
            "es-ES": "No se ha podido banear al usuario",
            "en-US": "User couldn't be banned",
        }[getInteractionLocale(locale)]
    },
    userAlreadyBanned: (locale: string) => {
        return {
            "es-ES": "El usuario ya está baneado",
            "en-US": "User is already banned",
        }[getInteractionLocale(locale)]
    },
    banTitle: (target: any, locale: string) => {
        return {
            "es-ES": `${target} ha sido baneado`,
            "en-US": `${target} has been banned`,
        }[getInteractionLocale(locale)]
    },
    banDescription: (targetId: any, targetUser: any, reason: any, locale: string) => {
        return {
            "es-ES": `**ID Usuario**: ${targetId}\n**Miembro**: ${targetUser}\n**Motivo**: ${reason}`,
            "en-US": `**User ID**: ${targetId}\n**Member**: ${targetUser}\n**Reason**: ${reason}`,
        }[getInteractionLocale(locale)]
    },
    banFooter: (mod: any, locale: string) => {
        return {
            "es-ES": `Baneado por ${mod}`,
            "en-US": `Banned by ${mod}`,
        }[getInteractionLocale(locale)]
    },
    specifySomeoneToKick: (locale: string) => {
        return {
            "es-ES": "Especifica alguien a expulsar",
            "en-US": "Specify someone to kick",
        }[getInteractionLocale(locale)]
    },
    errorKickingUser: (locale: string) => {
        return {
            "es-ES": "No se ha podido expulsar al usuario",
            "en-US": "User couldn't be kicked",
        }[getInteractionLocale(locale)]
    },
    kickTitle: (target: any, locale: string) => {
        return {
            "es-ES": `${target} ha sido expulsado`,
            "en-US": `${target} has been kicked`,
        }[getInteractionLocale(locale)]
    },
    kickDescription: (targetId: any, targetUser: any, reason: any, locale: string) => {
        return {
            "es-ES": `**ID Usuario**: ${targetId}\n**Miembro**: ${targetUser}\n**Motivo**: ${reason}`,
            "en-US": `**User ID**: ${targetId}\n**Member**: ${targetUser}\n**Reason**: ${reason}`,
        }[getInteractionLocale(locale)]
    },
    kickFooter: (mod: any, locale: string) => {
        return {
            "es-ES": `Baneado por ${mod}`,
            "en-US": `Banned by ${mod}`,
        }[getInteractionLocale(locale)]
    },
}
