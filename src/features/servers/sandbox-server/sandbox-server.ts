import { Client, MessageEmbed } from "discord.js"
import * as sftp from "ssh2-sftp-client"
import { decrypt } from "../../../utils/crypto"
import * as fs from "fs"
import { replaceLine } from "../../../utils/string"
import { getDate, getMsFromString } from "../../../utils/getters"
import { downloadToBuffer, getHtml } from "../../../utils/net"
import { McVersionList } from "../../../types"
import { HeavyNodeMcServer } from "../../../mc-server"
import { Emojis } from "../../../emojis"

const emojis = Emojis.getClientEmojis()

class SandboxServer extends HeavyNodeMcServer {
    private sftpConn?: sftp = new sftp.default()

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

    public async setSftpConnection() {
        if (!this.sftpConn) return false
        try {
            await this.sftpConn?.connect({
                host: decrypt("U2FsdGVkX18FLvW/cAwuan6DpzzqaGBZppmrDG4UG8x4Q7Ue4VuMLZhFCvUVE83D"),
                port: parseInt(decrypt("U2FsdGVkX19ln9mNOV6wag+QAs2jIx3AckHJl+hPHJY=")),
                username: decrypt("U2FsdGVkX1/T/PFneK4a21GOOkbMmFv8YD7tt9AY3a3LjioXqsRUgXCnbYuWufPP"),
                password: decrypt("U2FsdGVkX18ajUSkNqIt443XoQsIvDi96zw93LT5/qk="),
            })
            console.log("SFTP connection established")
            return true
        } catch (e) {
            console.error(e)
            this.sftpConn = undefined
            return false
        }
    }

    public async upload(serverJarUrl: string, currVersion: string) {
        if (!this.sftpConn) return false
        const bufData = await downloadToBuffer(serverJarUrl)
        if (!bufData) return false

        await this.sftpConn?.rmdir("/", true).catch(console.error)
        try {
            ovewriteServerProperties(currVersion)
            await this.sftpConn?.put(bufData, "/server.jar").catch(console.error)
            await this.sftpConn?.put("./src/features/sandbox-server/files/eula.txt", "/eula.txt")
            await this.sftpConn?.put("./src/features/sandbox-server/files/server.properties", "/server.properties")
            await this.sftpConn?.put("./src/features/sandbox-server/files/ops.json", "/ops.json")
            return true
        } catch (e) {
            return false
        }
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

export async function initSandboxServer() {
    const sandboxServer = new SandboxServer(
        "U2FsdGVkX18sBEBYARLrsvGo7s6HPGvZF4FDrtRhvsE='",
        25605,
        "LogicraftSMP Sandbox Server",
        "Try the latest Minecraft Java snapshot's features",
        "U2FsdGVkX19Y09g0S7KeKDipUqqZI4Be4ryw7+257nGDTQvz1Dm1kuEkN9Bf2MDiTKNTw4ItOMZkFpBZgWuY76xW+C2qqLMeWTW3afK/Gl0=",
        "b70bacd2"
    )
    const interval = getMsFromString("5m")
    var prevVersion: string
    var currVersion: string

    await sandboxServer.setSftpConnection()
    prevVersion = await getLatestMcSnapshot()
    while (!sandboxServer.restartServer()) {}
    setInterval(async () => {
        currVersion = await getLatestMcSnapshot()
        if (!(await sandboxServer.update())) return
        if (currVersion === prevVersion) return
        const serverJarUrl = await getServerJarUrl(currVersion)
        if (!serverJarUrl) return
        if (!(await sandboxServer.upload(serverJarUrl, currVersion))) return
        if (!sandboxServer.restartServer()) return
        prevVersion = currVersion
        console.log(`Updated server to version ${currVersion}`)
    }, interval)
}

async function getLatestMcSnapshot() {
    const dataBuf = await downloadToBuffer("https://meta.multimc.org/v1/net.minecraft/index.json")

    if (!dataBuf) return ""
    const data = JSON.parse(dataBuf.toString()) as McVersionList
    const latestSnapshot = data.versions.find((version) => version.type === "snapshot")
    return latestSnapshot ? latestSnapshot.version : ""
}

async function getServerJarUrl(version: string) {
    const url = "https://mcversions.net/download/" + version
    var $

    while (true) {
        if ( $ = await getHtml(url)) break
        setTimeout(() => {}, 5000)
    }
    return $(".bg-green-700").attr("href")
}

function ovewriteServerProperties(version: string) {
    const path = "./src/features/sandbox-server/files/server.properties"

    var file = fs.readFileSync(path, "utf8")
    file = replaceLine("motd=", `motd=\u00a7eLogicraftSMP Sandbox Server \u00a7f${version}`, file)
    fs.writeFileSync(path, file, "utf8")
}
