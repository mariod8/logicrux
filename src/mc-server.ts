import { Client, Message, MessageEmbed, TextChannel } from "discord.js"
import { client } from "."
import { LC_GUILD_ID } from "./constants"
import { McServerStatus } from "./types"
import { getChannelByString, getDate } from "./utils/getters"
import * as msu from "minecraft-server-util"
import { JavaStatusResponse } from "minecraft-server-util"
import { Emojis } from "./emojis"
import { decrypt } from "./utils/crypto"
const nodeactyl = require("nodeactyl")

const emojis = Emojis.getClientEmojis()

abstract class IHostConnection {
    protected hostConn: any

    abstract restartServer(): boolean
}

class HeavyNodeConnection extends IHostConnection {
    private hostUrl: string = "https://control.heavynode.com/"
    private hostServerId: string

    constructor(hostApiKey: string, hostServerId: string) {
        super()
        this.hostConn = new nodeactyl.NodeactylClient(this.hostUrl, decrypt(hostApiKey))
        this.hostServerId = hostServerId
    }

    public restartServer() {
        try {
            this.hostConn.restartServer(this.hostServerId)
            console.log("Restarting server")
            return true
        } catch (e) {
            return false
        }
    }
}

abstract class McServer {
    private ip: string
    private port: number
    private title: string
    private description: string
    private status: McServerStatus = "OFFLINE"
    private channel?: TextChannel
    private message?: Message | void
    private data?: JavaStatusResponse
    private client: Client = client

    protected constructor(ip: string, port: number, title: string, description: string) {
        this.ip = decrypt(ip)
        this.port = port
        this.title = title
        this.description = description
    }

    protected isOnline() {
        return this.status === "ONLINE"
    }

    private async updateMessage() {
        try {
            if (!this.message) return this.sendMessage()
            await this.message.edit({ embeds: [await this.getEmbed()] })
            return true
        } catch (e) {
            return false
        }
    }

    private async updateData() {
        try {
            this.data = await msu.status(this.ip, this.port)
            return true
        } catch (e) {
            this.data = undefined
            return false
        }
    }
    public async update() {
        this.status = (await this.updateData()) ? "ONLINE" : "OFFLINE"
        return this.updateMessage()
    }

    private async getEmbed() {
        return new MessageEmbed()
            .setTitle(this.title)
            .setDescription(this.description)
            .setFooter({
                text: `Last updated ${getDate()}`,
            })
            .setColor(this.isOnline() ? "GREEN" : "RED")
            .setFields([
                {
                    name: `Access ${emojis.lens}`,
                    value: `**IP** \`${this.ip}:${this.port}\``,
                    inline: false,
                },
                {
                    name: `Status`,
                    value: `${this.isOnline() ? `Online ${emojis.high}` : `Offline ${emojis.none}`}`,
                    inline: true,
                },
                {
                    name: `Players`,
                    value: `${this.data ? `${this.data.players.online} / ${this.data.players.max}` : `-`}`,
                    inline: true,
                },
            ])
    }

    private async sendMessage() {
        try {
            if (this.message) return false
            const lcGuild = this.client.guilds.cache.get(LC_GUILD_ID)
            if (!lcGuild) return false
            this.channel = getChannelByString("mc-servers", lcGuild) as TextChannel
            if (!this.channel) return false
            await this.channel.bulkDelete(100)
            this.message = await this.channel.send({ embeds: [await this.getEmbed()] })
            return true
        } catch (e) {
            return false
        }
    }

    abstract restartServer(): boolean
}

export class HeavyNodeMcServer extends McServer {
    private hostConn: HeavyNodeConnection

    constructor(
        ip: string,
        port: number,
        title: string,
        description: string,
        hostApiKey: string,
        hostServerId: string
    ) {
        super(ip, port, title, description)
        this.hostConn = new HeavyNodeConnection(hostApiKey, hostServerId)
    }

    public restartServer() {
        return this.hostConn.restartServer()
    }
}
