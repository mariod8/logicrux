import { Client } from "discord.js"
import { getMsFromString } from "../utils/getters"
import { getHtml } from "../utils/net"

async function getSilksongRelDate() {
    const url = "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/"

    const html = await getHtml(url)
    if (!html) return
    return html(".date").text()
}

export default async function setStatus(client: Client) {
    const interval = getMsFromString("5m")
    var prevDate = await getSilksongRelDate()
    const update = async (date = "") => await client.user?.setActivity(`Silksong 📆: ${date}`, { type: "WATCHING" })

    await update(prevDate)
    setInterval(async () => {
        const currDate = await getSilksongRelDate()

        if (prevDate !== currDate) {
            await update(currDate)
            prevDate = currDate
        }
    }, interval)
}
