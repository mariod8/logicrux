import { spam } from "./regex"

export function cleanSpam(text: String) {
    return text.replace(spam, "")
}

export function cleanSpecialCharacters(text: String) {
    return text.replace("*", "\\*").replace("_", "\\_").replace("|", "\\|").replace("`", "\\`")
}

export function intToString(value: number) {
    var suffixes = ["", "k", "m", "b", "t"]
    var suffixNum = Math.floor(("" + value).length / 3)
    var shortValue: any = parseFloat((suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2))

    if (shortValue % 1 != 0) {
        shortValue = shortValue.toFixed(1)
    }
    return shortValue + suffixes[suffixNum]
}
