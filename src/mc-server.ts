import { Client, Message, MessageEmbed, TextChannel } from "discord.js"
import { client } from "."
import { DEV_GUILD_ID } from "./constants"
import { McServerStatus } from "./types"
import { getChannelByString } from "./utils/getters"

export class McServer {
    private ip: string
    private port: number
    private title: string
    private description: string
    private status: McServerStatus = "OFFLINE"
    private client: Client = client
    private channel?: TextChannel
    private message?: Message | void

    constructor(ip: string, port: number, title: string, description: string) {
        this.ip = ip
        this.port = port
        this.title = title
        this.description = description
    }

    public isOnline() {
        return this.status === "ONLINE"
    }

    private async updateMessage() {
        if (!this.message) return false
        await this.message.edit({ embeds: [this.getEmbed()] }).catch(console.error)
        return true
    }

    private getEmbed() {
        return new MessageEmbed().setTitle(this.title).setDescription(this.description).setTimestamp()
    }

    private async setMessage() {
        if (this.message) return false
        const lcGuild = this.client.guilds.cache.get(DEV_GUILD_ID)
        if (!lcGuild) return false
        this.channel = getChannelByString("mc-servers", lcGuild)
        if (!this.channel) return false
        this.message = await this.channel.send({ embeds: [this.getEmbed()] }).catch(console.error)
        return true
    }
}
