import { Client } from "discord.js"
import moment from "moment"
import momentTimezone from "moment-timezone"

export default (client: Client) => {
    // Set Spain/Madrid timezone and language
    momentTimezone.tz("Europe/Madrid").format()
    moment.locale("es")

    // Set presence
    client?.user?.setActivity('chats 📲', { type: 'WATCHING' });

    // Set avatar
    client?.user?.setAvatar("./src/assets/avatar.jpg");
}
