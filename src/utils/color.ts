import { ColorResolvable } from "discord.js"
import { rgb } from "../templates"
import { hex2rgb } from "./regex"

function componentToHex(c: number) {
    var hex = c.toString(16)
    return hex.length == 1 ? "0" + hex : hex
}

function rgbToHex(r: number, g: number, b: number) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

function hexToRgb(hex: string) {
    var result = hex2rgb.exec(hex)
    return (
        result
            ? {
                  r: parseInt(result[1], 16),
                  g: parseInt(result[2], 16),
                  b: parseInt(result[3], 16),
              }
            : {
                  r: 0,
                  g: 0,
                  b: 0,
              }
    ) as rgb
}

function calcLerp(a: number, b: number, u: number) {
    return Math.floor((1 - u) * a + u * b)
}

export function lerp(a: string, b: string, u: number) {
    const { r: sR, g: sG, b: sB } = hexToRgb(a)
    const { r: eR, g: eG, b: eB } = hexToRgb(b)
    return rgbToHex(calcLerp(sR, eR, u), calcLerp(sG, eG, u), calcLerp(sB, eB, u)) as ColorResolvable
}
