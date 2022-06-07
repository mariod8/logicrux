import { Client, Message, MessageEmbed, TextChannel } from "discord.js"
import { client } from "."
import { DEV_GUILD_ID, LC_GUILD_ID } from "./constants"
import { McServerStatus } from "./types"
import { getChannelByString, getDate, getUserByString } from "./utils/getters"
import * as msu from "minecraft-server-util"
import { JavaStatusResponse } from "minecraft-server-util"
import { decrypt } from "./utils/crypto"
const nodeactyl = require("nodeactyl")

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

    public getConsoleWebSocket() {
        try {
            const socket = this.hostConn.getConsoleWebSocket(this.hostServerId)
            return socket
        } catch (e) {
            return
        }
    }
}

abstract class McServer {
    protected ip: string
    protected port: number
    protected title: string
    protected description: string
    protected status: McServerStatus = "OFFLINE"
    protected channel?: TextChannel
    private message?: Message | void
    protected data?: JavaStatusResponse
    private client: Client = client
    private static wipedChannel: boolean = false

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
            await this.message.edit({ embeds: [this.getEmbed()] })
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

    private async sendMessage() {
        try {
            if (this.message) return false
            const lcGuild = this.client.guilds.cache.get(LC_GUILD_ID)
            if (!lcGuild) return false
            this.channel = getChannelByString("mc-servers", lcGuild) as TextChannel
            if (!this.channel) return false
            if (!McServer.wipedChannel) {
                await this.channel.bulkDelete(100)
                McServer.wipedChannel = true
            }
            this.message = await this.channel.send({ embeds: [this.getEmbed()] })
            return true
        } catch (e) {
            return false
        }
    }

    protected getPlayerNames() {
        var names = ""

        if (!this.data) return
        if (!this.data.players.sample) return
        names += `${this.getPlayerMcProfiles()}\n`
        return names
    }

    private getPlayerMcProfiles() {
        var mcProfiles = ""

        if (!this.data) return
        if (!this.data.players.sample) return
        for (var player of this.data.players.sample) {
            mcProfiles += `[${player.name}](https://namemc.com/profile/${player.name})\n`
        }
        return mcProfiles
    }

    protected getPlayerDiscord() {
        var discord = ""

        if (!this.data) return
        if (!this.data.players.sample) return
        for (var player of this.data.players.sample) {
            discord += `${getUserByString(player.name, this.channel!.guild, "MEMBER") ?? "-"}\n`
        }
        return discord
    }

    abstract getEmbed(): MessageEmbed
}

export abstract class HeavyNodeMcServer extends McServer {
    private hostConn?: HeavyNodeConnection

    constructor(
        ip: string,
        port: number,
        title: string,
        description: string,
        hostApiKey?: string,
        hostServerId?: string
    ) {
        super(ip, port, title, description)
        if (hostApiKey && hostServerId) this.hostConn = new HeavyNodeConnection(hostApiKey, hostServerId)
    }

    public restartServer() {
        if (!this.hostConn) return
        return this.hostConn.restartServer()
    }

    public getConsoleWebSocket() {
        if (!this.hostConn) return
        return this.hostConn.getConsoleWebSocket()
    }
}
