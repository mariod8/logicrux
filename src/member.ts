import { ColorResolvable, GuildMember } from "discord.js"
import { Emojis } from "./emojis"
import { cleanSpecialCharacters } from "./utils/string"

export class MyMember {
    private member: GuildMember
    private emojis: any
    private id: string

    constructor(member: GuildMember) {
        this.member = member
        this.id = member.id
        this.emojis = Emojis.getClientEmojis()
    }
    public getStatus() {
        
        return this.member?.presence?.status === `online`
            ? `${this.emojis.online} **Online**`
            : this.member?.presence?.status === `idle`
            ? `${this.emojis.idle} **Ausente**`
            : this.member?.presence?.status === `offline`
            ? `${this.emojis.offline} **Desconectado**`
            : `${this.emojis.dnd} **No Molestar**`
    }
    public getUser() {
        return this.member.user
    }
    public getMember(){
        return this.member
    }
    public getId() {
        return this.id
    }
    public getUserPrimaryColor() {
        return this.member.displayHexColor
    }
    public getUsername(){
        return cleanSpecialCharacters(this.member.user.username)
    }
}
