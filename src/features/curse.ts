import { Client, TextChannel } from "discord.js"
const sentencer = require("sentencer")

export default async function (client: Client) {
    const validParents: Array<String> = ["666295715726622744", "783965035684167691"]
    const logicraft = client.guilds.cache.get("666295714724446209")
    if (!logicraft) return
    const member = logicraft.members.cache
        .filter((m) => m.manageable && m.bannable && m.kickable && !m.user.bot)
        .random()
    if (!member) return
    const channel = logicraft.channels.cache
        .filter((c) => c.manageable && c.type === "GUILD_TEXT" && validParents.includes(c.parentId ? c.parentId : ""))
        .random() as TextChannel
    if (!channel) return

    await channel.send(sentencer.make(`${member.user.username} is {{adjective}}`)).catch(console.error)
}
