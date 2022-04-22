import { Client, Message, MessageEmbed, TextChannel } from "discord.js"
import * as sftp from "ssh2-sftp-client"
import { decrypt } from "../../utils/crypto"
import * as fs from "fs"
import { replaceLine } from "../../utils/string"
import { getChannelByString, getMsFromString } from "../../utils/getters"
import { downloadToBuffer, getHtml } from "../../utils/net"
import { McVersionList } from "../../types"
import { DEV_GUILD_ID } from "../../constants"
import * as msu from "minecraft-server-util"
import { Emojis } from "../../emojis"
import { McServer } from "../../mc-server"
const nodeactyl = require("nodeactyl")

class SandboxServer extends McServer {
    constructor(ip: string, port: number, title: string, description: string) {
        super(ip, port, title, description)
    }
}

const ip = "136.243.55.135"
const port = "25605"
var sftpConn: sftp | null = new sftp.default()
var serverMsg: Message
const hostClient = new nodeactyl.NodeactylClient(
    "https://control.heavynode.com/",
    decrypt(
        "U2FsdGVkX19Y09g0S7KeKDipUqqZI4Be4ryw7+257nGDTQvz1Dm1kuEkN9Bf2MDiTKNTw4ItOMZkFpBZgWuY76xW+C2qqLMeWTW3afK/Gl0="
    )
)

sftpConn!.on("ready", () => {
    console.log("SFTP connection established")
})

export async function initSnapshotServer(client: Client) {
    await sftpConn
        ?.connect({
            host: decrypt("U2FsdGVkX18FLvW/cAwuan6DpzzqaGBZppmrDG4UG8x4Q7Ue4VuMLZhFCvUVE83D"),
            port: parseInt(decrypt("U2FsdGVkX19ln9mNOV6wag+QAs2jIx3AckHJl+hPHJY=")),
            username: decrypt("U2FsdGVkX1/T/PFneK4a21GOOkbMmFv8YD7tt9AY3a3LjioXqsRUgXCnbYuWufPP"),
            password: decrypt("U2FsdGVkX18ajUSkNqIt443XoQsIvDi96zw93LT5/qk="),
        })
        .catch((err) => {
            console.error(err)
            sftpConn = null
        })
    if (sftpConn) await core(client)
    else console.log("Error connecting to SFTP")
}

async function core(client: Client) {
    const interval = getMsFromString("5s")
    var prevVersion: string
    var currVersion: string

    prevVersion = await getLatestVersion()
    setInterval(async () => {
        currVersion = await getLatestVersion()
        await manageDiscordMessage(client)
        if (currVersion === prevVersion) return
        const serverJarUrl = await getLatestVersionServerJarUrl(currVersion)
        if (!serverJarUrl) return
        //if (!(await upload(serverJarUrl, currVersion))) return
        if (!(await restartServer())) return
        prevVersion = currVersion
        console.log(`Updated server to version ${currVersion}`)
    }, interval)
}

async function getLatestVersion() {
    const dataBuf = await downloadToBuffer("https://meta.multimc.org/v1/net.minecraft/index.json")

    if (!dataBuf) return ""
    const data = JSON.parse(dataBuf.toString()) as McVersionList
    return data.versions[0].type === "snapshot" ? data.versions[0].version : ""
}

async function getLatestVersionServerJarUrl(version: string) {
    const url = "https://mcversions.net/download/" + version
    var $

    while (!$) {
        $ = await getHtml(url)
    }
    return $(".bg-green-700").attr("href")
}

async function upload(serverJarUrl: string, version: string) {
    var bufData = await downloadToBuffer(serverJarUrl)

    await sftpConn?.rmdir("/", true).catch(console.error)
    try {
        if (!bufData) return
        overrideServerProperties(version)
        await sftpConn?.put(bufData, "/server.jar").catch(console.error)
        await sftpConn?.put("./src/features/sandbox-server/files/eula.txt", "/eula.txt")
        await sftpConn?.put("./src/features/sandbox-server/files/server.properties", "/server.properties")
        await sftpConn?.put("./src/features/sandbox-server/files/ops.json", "/ops.json")
        return true
    } catch (e) {
        return false
    }
}

async function restartServer() {
    try {
        await hostClient.restartServer("b70bacd2")
        return true
    } catch (e) {
        return false
    }
}

async function manageDiscordMessage(client: Client) {
    const emojis = Emojis.getClientEmojis()
    const isServerOnline = async () => {
        try {
            await msu.status(ip, parseInt(port))
            return true
        } catch (e) {
            return false
        }
    }

    if (!serverMsg) {
        const lcGuild = client.guilds.cache.get(DEV_GUILD_ID)
        if (!lcGuild) return
        const serversChannel = getChannelByString("mc-servers", lcGuild)
        if (!serversChannel) return
        serversChannel as TextChannel
        await serversChannel.bulkDelete(100).catch(console.error)
        const isOnline = await isServerOnline()
        serverMsg = await serversChannel.send({
            embeds: [
                new MessageEmbed()
                    .setTitle("LogicraftSMP Sandbox Server")
                    .setDescription("Updated to latest snapshot")
                    .setFields([
                        {
                            name: "Access",
                            value: `**IP** ${ip}\n**Port** ${port}`,
                            inline: false,
                        },
                        {
                            name: "Status",
                            value: isOnline ? `Online ${emojis.high}` : `Offline ${emojis.none}`,
                            inline: false,
                        },
                    ]),
            ],
        })
    } else {
        const isOnline = await isServerOnline()

        await serverMsg.edit({
            embeds: [
                new MessageEmbed()
                    .setTitle("LogicraftSMP Sandbox Server")
                    .setDescription("Updated to latest snapshot")
                    .setFields([
                        {
                            name: "Access",
                            value: `**IP** ${ip}\n**Port** ${port}`,
                            inline: false,
                        },
                        {
                            name: "Status",
                            value: isOnline ? `Online ${emojis.high}` : `Offline ${emojis.none}`,
                            inline: false,
                        },
                    ]),
            ],
        })
    }
}

function overrideServerProperties(version: string) {
    const path = "./src/features/sandbox-server/files/server.properties"

    var file = fs.readFileSync(path, "utf8")
    file = replaceLine(
        "motd=",
        `motd=\u00a7eLogicraftSMP Sandbox Server - ${version}\u00a7r\n\u00a77Updated to latest snapshot`,
        file
    )
    fs.writeFileSync(path, file, "utf8")
}
