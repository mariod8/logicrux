import { Client } from "discord.js"
import * as axios from "axios"
import * as cheerio from "cheerio"
import { getMsFromString } from "../utils/getters"

async function getSilksongRelDate() {
    const url = "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/"

    try {
        const response = await axios.default.get(url)
        const html = cheerio.load(response.data)
        return html(".date").text()
    } catch (e) {
        console.error(`Error en setStatus Silksong "${e}"`)
    }
}

export default async function setStatus(client: Client) {
    const timeout = getMsFromString("5m")
    var prevDate = await getSilksongRelDate()
    const update = async (date = "") => await client.user?.setActivity(`Silksong 📆: ${date}`, { type: "WATCHING" })

    await update(prevDate)
    setInterval(async () => {
        const currDate = await getSilksongRelDate()

        if (prevDate !== currDate) {
            await update(currDate)
            prevDate = currDate
        }
    }, timeout)
}
