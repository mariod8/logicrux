import { Player } from "discord-music-player"
import { Client } from "discord.js"
import * as moment from "moment"
import * as momentTimezone from "moment-timezone"
import { Emojis } from "./emojis"
import { initIlogicraftServer } from "./features/servers/ilogicraft-server"
import setStatus from "./features/status"

export default async (client: Client, player: Player) => {
    // Set Spain/Madrid timezone and language
    momentTimezone.tz("Europe/Madrid").format()
    moment.locale("Europe/Madrid")

    // Set presence
    //client.user?.setActivity("Minecraft", { type: "PLAYING" })
    client.user?.setStatus("online")

    // Set avatar
    //client?.user?.setAvatar("./src/assets/avatar2.jpeg").catch(console.error)

    // Set emojis
    await Emojis.setEmojis(client)

    // Set status
    setStatus(client)

    // Init servers
    //initIlogicraftServer()
}
