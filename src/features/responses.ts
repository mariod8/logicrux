import { Message } from "discord.js"
import { getRandomInArray } from "../utils/getters"
import { monke, sus } from "../utils/regex"

export default (message: Message) => {
    const { channel } = message
    const fResponses = ["F :c", "Super F", "F", "Pulsa F -> `F`", ":regional_indicator_f:"]
    const fResponseChance = 0.8
    const content = message.content.toLowerCase()

    // F
    if (content === "f" && Math.random() * 1 < fResponseChance) channel.send(getRandomInArray(fResponses))
    // monke
    else if (monke.test(content)) channel.send("reject humanity, return to monke 🐒")
    // Dark trolling
    else if (content === "/xd") channel.send("seas o no Dark, es /xp no /xd")
    // sus
    else if (sus.test(content)) channel.send("ඞ")
}
