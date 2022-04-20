import { ColorResolvable } from "discord.js"
const { getColorFromURL } = require("color-thief-node")
import { Rgb } from "../types"

function componentToHex(c: number) {
    var hex = c.toString(16)

    return hex.length == 1 ? "0" + hex : hex
}

export function rgbToHex(r: number, g: number, b: number) {
    return ("#" + componentToHex(r) + componentToHex(g) + componentToHex(b)) as ColorResolvable
}

function hexToRgb(hex: string) {
    let r = "",
        g = "",
        b = ""

    if (hex.length == 4) {
        r = "0x" + hex[1] + hex[1]
        g = "0x" + hex[2] + hex[2]
        b = "0x" + hex[3] + hex[3]
    } else if (hex.length == 7) {
        r = "0x" + hex[1] + hex[2]
        g = "0x" + hex[3] + hex[4]
        b = "0x" + hex[5] + hex[6]
    }
    return {
        r: +r,
        g: +g,
        b: +b,
    } as Rgb
}

function calcLerp(a: number, b: number, u: number) {
    return Math.floor((1 - u) * a + u * b)
}

export function lerpHexColors(a: string, b: string, u: number) {
    const { r: sR, g: sG, b: sB } = hexToRgb(a)
    const { r: eR, g: eG, b: eB } = hexToRgb(b)

    return rgbToHex(calcLerp(sR, eR, u), calcLerp(sG, eG, u), calcLerp(sB, eB, u)) as ColorResolvable
}

export async function getImagePrimaryColor(url: string) {
    const [r, g, b] = await getColorFromURL(url)
    return rgbToHex(r, g, b)
}
