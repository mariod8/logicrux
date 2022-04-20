import { Client, Guild } from "discord.js"
import { DEV_GUILD_ID } from "./constants"
import { getRandomInObject } from "./utils/getters"

export class Emojis {
    private static clientEmojis: any = {}
    private static discEmojis: any = {}

    public static async setEmojis(client: Client) {
        const guild = client.guilds.cache.get(DEV_GUILD_ID) as Guild

        guild.emojis.cache.each((emoji) => {
            Emojis.clientEmojis[`${emoji.name}`] = emoji
            if (emoji.name!.startsWith("musicDisc")) Emojis.discEmojis[`${emoji.name}`] = emoji
        })
    }
    public static getClientEmojis() {
        return this.clientEmojis
    }
    public static getDiscEmojis() {
        return this.discEmojis
    }
    public static getRandomDiscEmoji(text?: string) {
        return text?.toLowerCase().includes("pigstep")
            ? this.discEmojis.musicDiscPigstep
            : getRandomInObject(this.discEmojis)
    }
}
