import { MessageEmbed } from "discord.js"
import { Emojis } from "../../emojis"
import { HeavyNodeMcServer } from "../../mc-server"
import { getDate, getMsFromString } from "../../utils/getters"

const emojis = Emojis.getClientEmojis()

class LogicraftServer extends HeavyNodeMcServer {
    constructor(
        ip: string,
        port: number,
        title: string,
        description: string,
        hostApiKey?: string,
        hostServerId?: string
    ) {
        super(ip, port, title, description, hostApiKey, hostServerId)
    }

    public getEmbed() {
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
                    name: `Version`,
                    value: `${this.data ? `${this.data.version.name}` : "-"}`,
                    inline: true,
                },
                {
                    name: `Players`,
                    value: `${this.data ? `${this.data.players.online} / ${this.data.players.max}` : "-"}`,
                    inline: false,
                },
                {
                    name: `Names`,
                    value: `${this.getPlayerNames() ?? "-"}`,
                    inline: true,
                },
                {
                    name: `Discord`,
                    value: `${this.getPlayerDiscord() ?? "-"}`,
                    inline: true,
                },
            ])
    }
}

export function initLogicraftServer() {
    const logicraftServer = new LogicraftServer("", 0, "", "")

    const interval = getMsFromString("5m")

    setInterval(async () => {
        await logicraftServer.update()
    }, interval)
}
