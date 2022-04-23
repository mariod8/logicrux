import { MessageEmbed } from "discord.js"
import { HeavyNodeMcServer } from "../../mc-server"

class LogicraftServer extends HeavyNodeMcServer {
    constructor(
        ip: string,
        port: number,
        title: string,
        description: string,
        hostApiKey: string,
        hostServerId: string
    ) {
        super(ip, port, title, description, hostApiKey, hostServerId)
    }

    public getEmbed() {
        return new MessageEmbed()
    }
}

export function initLogicraftServer() {
    const logicraftServer = new LogicraftServer("", 0, "", "", "", "")
}
