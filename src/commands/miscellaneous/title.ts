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
            required: false,
            type: "STRING",
        },
    ],
    callback: ({ args, user }) => {
        const characters = {
            a: {
                top: "OXO",
                middle: "XXX",
                bottom: "XOX",
            },
            b: {
                top: "XXO",
                middle: "XXX",
                bottom: "XXX",
            },
            c: {
                top: "XXX",
                middle: "XOO",
                bottom: "XXX",
            },
            d: {
                top: "XXO",
                middle: "XOX",
                bottom: "XXO",
            },
            e: {
                top: "XXX",
                middle: "XXO",
                bottom: "XXX",
            },
            f: {
                top: "XXX",
                middle: "XXO",
                bottom: "XOO",
            },
            g: {
                top: "XXO",
                middle: "XOX",
                bottom: "XXX",
            },
            h: {
                top: "XOX",
                middle: "XXX",
                bottom: "XOX",
            },
            i: {
                top: "XXX",
                middle: "OXO",
                bottom: "XXX",
            },
            j: {
                top: "OOX",
                middle: "XOX",
                bottom: "XXX",
            },
            k: {
                top: "XOX",
                middle: "XXO",
                bottom: "XOX",
            },
            l: {
                top: "XOO",
                middle: "XOO",
                bottom: "XXX",
            },
            m: {
                top: "XXX",
                middle: "XXX",
                bottom: "XOX",
            },
            n: {
                top: "XXX",
                middle: "XOX",
                bottom: "XOX",
            },
            o: {
                top: "XXX",
                middle: "XOX",
                bottom: "XXX",
            },
            p: {
                top: "XXX",
                middle: "XXX",
                bottom: "XOO",
            },
            q: {
                top: "XXX",
                middle: "XXX",
                bottom: "OOX",
            },
            r: {
                top: "XXX",
                middle: "XOO",
                bottom: "XOO",
            },
            s: {
                top: "OXX",
                middle: "OXO",
                bottom: "XXO",
            },
            t: {
                top: "XXX",
                middle: "OXO",
                bottom: "OXO",
            },
            u: {
                top: "XOX",
                middle: "XOX",
                bottom: "XXX",
            },
            v: {
                top: "XOX",
                middle: "XOX",
                bottom: "OXO",
            },
            w: {
                top: "XOX",
                middle: "XXX",
                bottom: "XXX",
            },
            x: {
                top: "XOX",
                middle: "OXO",
                bottom: "XOX",
            },
            y: {
                top: "XOX",
                middle: "OXO",
                bottom: "OXO",
            },
            z: {
                top: "XXO",
                middle: "OXO",
                bottom: "OXX",
            },
            0: {
                top: "XXX",
                middle: "XOX",
                bottom: "XXX",
            },
            1: {
                top: "XXO",
                middle: "OXO",
                bottom: "XXX",
            },
            2: {
                top: "XXO",
                middle: "OXO",
                bottom: "OXX",
            },
            3: {
                top: "XXX",
                middle: "OXX",
                bottom: "XXX",
            },
            4: {
                top: "XOX",
                middle: "XXX",
                bottom: "OOX",
            },
            5: {
                top: "OXX",
                middle: "OXO",
                bottom: "XXO",
            },
            6: {
                top: "XOO",
                middle: "XXX",
                bottom: "XXX",
            },
            7: {
                top: "XXX",
                middle: "OOX",
                bottom: "OOX",
            },
            8: {
                top: "OXX",
                middle: "XXX",
                bottom: "XXX",
            },
            9: {
                top: "XXX",
                middle: "XXX",
                bottom: "OOX",
            },
            "/": {
                top: "OOX",
                middle: "OXO",
                bottom: "XOO",
            },
            " ": {
                top: "OOO",
                middle: "OOO",
                bottom: "OOO",
            },
            "+": {
                top: "OXO",
                middle: "XXX",
                bottom: "OXO",
            },
            "-": {
                top: "OOO",
                middle: "XXX",
                bottom: "OOO",
            },
            ".": {
                top: "OOO",
                middle: "OOO",
                bottom: "OXO",
            },
            ",": {
                top: "OOO",
                middle: "OXO",
                bottom: "OXO",
            },
            ":": {
                top: "OXO",
                middle: "OOO",
                bottom: "OXO",
            },
            "[": {
                top: "XXO",
                middle: "XOO",
                bottom: "XXO",
            },
            "]": {
                top: "OXX",
                middle: "OOX",
                bottom: "OXX",
            },
            "'": {
                top: "OXO",
                middle: "OXO",
                bottom: "OOO",
            },
            "?": {
                top: "XXX",
                middle: "OXX",
                bottom: "OXO",
            },
            ª: {
                top: "XOO",
                middle: "OOO",
                bottom: "OOO",
            },
        }
        const emoji = args[0]
        const emptyChar = "      "

        let result = "‎\n"

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
                    characters[`${title[i].toLowerCase()}`].middle[j] === "X"
                        ? emoji
                        : emptyChar
            result += "   "
        }
        result += "\n"

        // bottom row
        for (let i = 0; i < title.length; i++) {
            for (let j = 0; j < 3; j++)
                result +=
                    characters[`${title[i].toLowerCase()}`].bottom[j] === "X"
                        ? emoji
                        : emptyChar
            result += "   "
        }

        if (result.length > 2000)
            return `**${user?.username}**, el mensaje tiene más de 2000 caracteres`

        return result
    },
} as ICommand
