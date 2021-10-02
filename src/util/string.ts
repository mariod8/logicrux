import { spam } from "./regex"

export function cleanSpam(text: String) {
    return text.replace(spam, "")
}
