import { Client, Guild } from "discord.js"

export class Emojis {
    private static clientEmojis: any = {}
    private static discEmojis: any = {}

    public static async setEmojis(client: Client) {
        const guild = (await client.guilds.cache.get("829448956417015828")) as Guild

        guild.emojis.cache.forEach((emoji) => {
            Emojis.clientEmojis[`${emoji.name}`] = emoji
        })
        guild.emojis.cache
            .filter((emoji) => emoji?.name?.includes("musicDisc") as boolean)
            .forEach((emoji) => {
                Emojis.clientEmojis[`${emoji?.name}`] = emoji
            })
    }
    public static getClientEmojis() {
        return this.clientEmojis
    }
    public static getDiscEmojis() {
        return this.discEmojis
    }
}
