import { MessageEmbed } from "discord.js"
import { Emojis } from "../../emojis"
import { HeavyNodeMcServer } from "../../mc-server"
import { getDate, getMsFromString, getUserByString } from "../../utils/getters"

const emojis = Emojis.getClientEmojis()

class IlogicraftServer extends HeavyNodeMcServer {
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
                    value: `Talk to ${getUserByString("Siber", this.channel!.guild) ?? "The Siber"}`,
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

export function initIlogicraftServer() {
    const ilogicraftServer = new IlogicraftServer(
        "U2FsdGVkX182vRoZBRNGxwXzRKvfcCwj/w4wIm/0Fs0=",
        25566,
        "Ilogicraft Minecraft Server",
        "Multiple dimensions vanilla on the 20w14infinity snapshot"
    )

    const interval = getMsFromString("5s")

    setInterval(async () => {
        await ilogicraftServer.update()
    }, interval)
}
