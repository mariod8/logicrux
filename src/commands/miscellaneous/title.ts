import { ICommand } from "wokcommands"
import { emojis } from "../../util/regex"

export default {
    category: "Miscellaneous",
    description: "Displays a 3x3 emoji-formed text",
    slash: true,
    testOnly: true,
    options: [
        {
            name: "emoji",
            description: "Emoji to show up forming the characters",
            required: true,
            type: "STRING",
        },
        {
            name: "text",
            description: "Text to convert",
            required: true,
            type: "STRING",
        },
    ],
    callback: ({ args, user }) => {
        const characters: any = {
            "a": {
                top: "OXO",
                mid: "XXX",
                bot: "XOX",
            },
            "b": {
                top: "XXO",
                mid: "XXX",
                bot: "XXX",
            },
            "c": {
                top: "XXX",
                mid: "XOO",
                bot: "XXX",
            },
            "d": {
                top: "XXO",
                mid: "XOX",
                bot: "XXO",
            },
            "e": {
                top: "XXX",
                mid: "XXO",
                bot: "XXX",
            },
            "f": {
                top: "XXX",
                mid: "XXO",
                bot: "XOO",
            },
            "g": {
                top: "XXO",
                mid: "XOX",
                bot: "XXX",
            },
            "h": {
                top: "XOX",
                mid: "XXX",
                bot: "XOX",
            },
            "i": {
                top: "XXX",
                mid: "OXO",
                bot: "XXX",
            },
            "j": {
                top: "OOX",
                mid: "XOX",
                bot: "XXX",
            },
            "k": {
                top: "XOX",
                mid: "XXO",
                bot: "XOX",
            },
            "l": {
                top: "XOO",
                mid: "XOO",
                bot: "XXX",
            },
            "m": {
                top: "XXX",
                mid: "XXX",
                bot: "XOX",
            },
            "n": {
                top: "XXX",
                mid: "XOX",
                bot: "XOX",
            },
            "o": {
                top: "XXX",
                mid: "XOX",
                bot: "XXX",
            },
            "p": {
                top: "XXX",
                mid: "XXX",
                bot: "XOO",
            },
            "q": {
                top: "XXX",
                mid: "XXX",
                bot: "OOX",
            },
            "r": {
                top: "XXX",
                mid: "XOO",
                bot: "XOO",
            },
            "s": {
                top: "OXX",
                mid: "OXO",
                bot: "XXO",
            },
            "t": {
                top: "XXX",
                mid: "OXO",
                bot: "OXO",
            },
            "u": {
                top: "XOX",
                mid: "XOX",
                bot: "XXX",
            },
            "v": {
                top: "XOX",
                mid: "XOX",
                bot: "OXO",
            },
            "w": {
                top: "XOX",
                mid: "XXX",
                bot: "XXX",
            },
            "x": {
                top: "XOX",
                mid: "OXO",
                bot: "XOX",
            },
            "y": {
                top: "XOX",
                mid: "OXO",
                bot: "OXO",
            },
            "z": {
                top: "XXO",
                mid: "OXO",
                bot: "OXX",
            },
            "0": {
                top: "XXX",
                mid: "XOX",
                bot: "XXX",
            },
            "1": {
                top: "XXO",
                mid: "OXO",
                bot: "XXX",
            },
            "2": {
                top: "XXO",
                mid: "OXO",
                bot: "OXX",
            },
            "3": {
                top: "XXX",
                mid: "OXX",
                bot: "XXX",
            },
            "4": {
                top: "XOX",
                mid: "XXX",
                bot: "OOX",
            },
            "5": {
                top: "OXX",
                mid: "OXO",
                bot: "XXO",
            },
            "6": {
                top: "XOO",
                mid: "XXX",
                bot: "XXX",
            },
            "7": {
                top: "XXX",
                mid: "OOX",
                bot: "OOX",
            },
            "8": {
                top: "OXX",
                mid: "XXX",
                bot: "XXX",
            },
            "9": {
                top: "XXX",
                mid: "XXX",
                bot: "OOX",
            },
            "/": {
                top: "OOX",
                mid: "OXO",
                bot: "XOO",
            },
            " ": {
                top: "OOO",
                mid: "OOO",
                bot: "OOO",
            },
            "+": {
                top: "OXO",
                mid: "XXX",
                bot: "OXO",
            },
            "-": {
                top: "OOO",
                mid: "XXX",
                bot: "OOO",
            },
            ".": {
                top: "OOO",
                mid: "OOO",
                bot: "OXO",
            },
            ",": {
                top: "OOO",
                mid: "OXO",
                bot: "OXO",
            },
            ":": {
                top: "OXO",
                mid: "OOO",
                bot: "OXO",
            },
            "[": {
                top: "XXO",
                mid: "XOO",
                bot: "XXO",
            },
            "]": {
                top: "OXX",
                mid: "OOX",
                bot: "OXX",
            },
            "'": {
                top: "OXO",
                mid: "OXO",
                bot: "OOO",
            },
            "?": {
                top: "XXX",
                mid: "OXX",
                bot: "OXO",
            },
            "ª": {
                top: "XOO",
                mid: "OOO",
                bot: "OOO",
            },
        }
        const emoji = args[0] as string
        const emptyChar = "      "
        var result = "‎\n"

        if (!emojis.test(emoji))
            return `**${user?.username}**, el emoji introducido no se puede usar o bien no es un emoji`

        args.shift()
        const title = args.join(" ")

        // top row
        for (let i = 0; i < title.length; i++) {
            if (!(`${title[i].toLowerCase()}` in characters))
                return `**${user?.username}**, el caracter \'${title[i]}\' no se puede imprimir`
            for (let j = 0; j < 3; j++)
                result +=
                    characters[`${title[i].toLowerCase()}`].top[j] === "X"
                        ? emoji
                        : emptyChar
            result += "   "
        }
        result += "\n"

        // middle row
        for (let i = 0; i < title.length; i++) {
            for (let j = 0; j < 3; j++)
                result +=
                    characters[`${title[i].toLowerCase()}`].mid[j] === "X"
                        ? emoji
                        : emptyChar
            result += "   "
        }
        result += "\n"

        // bottom row
        for (let i = 0; i < title.length; i++) {
            for (let j = 0; j < 3; j++)
                result +=
                    characters[`${title[i].toLowerCase()}`].bot[j] === "X"
                        ? emoji
                        : emptyChar
            result += "   "
        }

        if (result.length > 2000)
            return `**${user?.username}**, el resultado del mensaje tiene más de 2000 caracteres`
        return result
    },
} as ICommand
