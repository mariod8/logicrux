import { Client, Guild } from "discord.js"
import { getRandomInObject } from "./utils/getters"

export class Emojis {
    private static clientEmojis: any = {}
    private static discEmojis: any = {}

    public static async setEmojis(client: Client) {
        const guild = (await client.guilds.cache.get("829448956417015828")) as Guild

        guild.emojis.cache.forEach((emoji) => {
            Emojis.clientEmojis[`${emoji.name}`] = emoji
            if (emoji.name!.includes("musicDisc")) Emojis.discEmojis[`${emoji.name}`] = emoji
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
