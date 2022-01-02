import { GuildMember, MessageAttachment, PartialGuildMember } from "discord.js"
import { getChannelByString } from "../utils/getters"
import * as Canvas from "canvas"
import path from "path"

export default async (member: GuildMember | PartialGuildMember, action: "ADD" | "REMOVE") => {
    const { guild, user } = member
    const channel = await getChannelByString("general", guild)
    const fontFile = "minecraft_font.ttf"
    const fontSize = 16
    const content = `${user?.username} ${action === "ADD" ? "joined" : "left"} the game`

    if (!channel) return
    Canvas.registerFont(path.join(__dirname, "../assets/" + fontFile), { family: "MinecraftFont" })
    const canvas = Canvas.createCanvas(400, fontSize * 1.2)
    const context = canvas.getContext("2d")
    context.font = fontSize + 'px "MinecraftFont"'
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = "#ffff55"
    context.fillText(
        content,
        0,
        (canvas.height + fontSize) / 2,
        canvas.width
    )
    const att = new MessageAttachment(canvas.toBuffer())
    await channel.send({
        files: [att],
    })
}
