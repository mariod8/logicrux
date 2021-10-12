import { ColorResolvable, GuildMember } from "discord.js"

export class MyMember {
    private member: GuildMember
    private emojis: any
    private id: string

    constructor(member: GuildMember, emojis?: any) {
        this.member = member
        this.emojis = emojis
        this.id = member.id
    }
    public getStatus() {
        if (!this.emojis) throw "No emojis"
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
    public getId() {
        return this.id
    }
    public getUserPrimaryColor() {
        return "#ff00ff" as ColorResolvable
    }
}
