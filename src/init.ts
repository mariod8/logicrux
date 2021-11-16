import { Player } from "discord-music-player"
import { Client } from "discord.js"
import moment from "moment"
import momentTimezone from "moment-timezone"
import { Emojis } from "./emojis"
import { MyPlayer } from "./player"

export default async (client: Client, player: Player) => {
    // Set Spain/Madrid timezone and language
    momentTimezone.tz("Europe/Madrid").format()
    moment.locale("Europe/Madrid")

    // Set presence
    client?.user?.setActivity("Minecraft", { type: "PLAYING" })

    // Set avatar
    //client?.user?.setAvatar("./src/assets/avatar.jpeg")

    // Set emojis
    Emojis.setEmojis(client)

    // Set player
    MyPlayer.setPlayer(player)
}
