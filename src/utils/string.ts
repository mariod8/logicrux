import { spam } from "./regex"

export function cleanSpam(text: String) {
    return text.replace(spam, "")
}

export function cleanSpecialCharacters(text: String) {
    return text.replace("*", "\\*").replace("_", "\\_").replace("|", "\\|").replace("`", "\\`")
}
