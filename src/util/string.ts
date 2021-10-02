import regex = require("./regex")

export function cleanSpam(text: String) {
    return text.replace(spam, "")
}