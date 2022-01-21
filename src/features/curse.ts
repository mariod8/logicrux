import { Client, TextChannel } from "discord.js"
import moment from "moment"
import { getRandomDecimalNumber } from "../utils/getters"
const sentencer = require("sentencer")

const curse = async (client: Client) => {
    const timeout =
        moment().endOf("day").valueOf() - moment().valueOf() + Math.round(getRandomDecimalNumber(8, 20) * 3600 * 1000)
    setTimeout(async () => {
        const validParents: Array<String> = ["666295715726622744", "783965035684167691"]
        const logicraft = client.guilds.cache.get("666295714724446209")
        if (!logicraft) return
        const member = logicraft.members.cache
            .filter((m) => m.manageable && m.bannable && m.kickable && !m.user.bot)
            .random()
        if (!member) return
        const channel = logicraft.channels.cache
            .filter(
                (c) => c.manageable && c.type === "GUILD_TEXT" && validParents.includes(c.parentId ? c.parentId : "")
            )
            .random() as TextChannel
        if (!channel) return

        await channel.send(sentencer.make(`${member.user.username} is {{adjective}}`)).catch(console.error)
        curse(client)
    }, timeout)
}

export default async function (client: Client) {
    await curse(client)
}
