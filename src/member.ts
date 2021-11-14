import { GuildMember } from "discord.js"
import { Emojis } from "./emojis"
import { rgbToHex } from "./utils/color"
import { cleanSpecialCharacters } from "./utils/string"
const { getColorFromURL } = require("color-thief-node")

export class MyMember {
    private member: GuildMember
    private emojis: any
    private id: string

    constructor(member: GuildMember | undefined) {
        if (member === undefined) throw new Error("Undefined")
        this.member = member
        this.id = member.id
        this.emojis = Emojis.getClientEmojis()
    }
    public getStatus() {
        return this.member?.presence?.status === "online"
            ? `${this.emojis.online} **Online**`
            : this.member?.presence?.status === "idle"
            ? `${this.emojis.idle} **Ausente**`
            : this.member?.presence?.status === "offline"
            ? `${this.emojis.offline} **Desconectado**`
            : `${this.emojis.dnd} **No Molestar**`
    }
    public getUser() {
        return this.member.user
    }
    public getMember() {
        return this.member
    }
    public getId() {
        return this.id
    }
    public async getUserPrimaryColor() {
        const url = this.member.displayAvatarURL({ dynamic: false, format: "jpg", size: 256 })

        const [r, g, b] = await getColorFromURL(url)
        return rgbToHex(r, g, b)
    }
    public getUsername() {
        return cleanSpecialCharacters(this.member.user.username)
    }
}
