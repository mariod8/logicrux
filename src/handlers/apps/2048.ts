import { MessageActionRow, MessageButton, MessageEmbed, TextChannel, User } from "discord.js"
import moment from "moment"
import { Emojis } from "../../emojis"

class __2048 {
    private tiles: number[][]
    private boardSize = 4
    private id: number

    constructor() {
        this.tiles = new Array(this.boardSize).fill(0).map(() => new Array(this.boardSize).fill(0))
        this.id = moment().valueOf()
    }
    public move(dir: "UP" | "DOWN" | "LEFT" | "RIGHT") {}
    public add() {}
    public getBoard() {
        var board = ""

        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                board += this.tiles[i][j] + (j < 3 ? " | " : "")
            }
            board += "\n"
        }
        return board
    }
    public getId() {
        return this.id
    }
}

export async function _2048Init(channel: TextChannel, user: User) {
    const _2048 = new __2048()
    const clientEmojis = Emojis.getClientEmojis()
    const board = new MessageEmbed().setTitle("2048").setDescription(_2048.getBoard())
    const controls = new MessageActionRow().addComponents(
        new MessageButton()
            .setCustomId("left" + _2048.getId())
            .setLabel("<")
            .setStyle("PRIMARY"),
        new MessageButton()
            .setCustomId("right" + _2048.getId())
            .setLabel(">")
            .setStyle("PRIMARY"),
        new MessageButton()
            .setCustomId("up" + _2048.getId())
            .setLabel("^")
            .setStyle("PRIMARY"),
        new MessageButton()
            .setCustomId("down" + _2048.getId())
            .setLabel("v")
            .setStyle("PRIMARY"),
        new MessageButton()
            .setCustomId("quit" + _2048.getId())
            .setLabel(clientEmojis!.quit)
            .setStyle("DANGER")
    )
    const gameInstance = await channel.send({ embeds: [board], components: [controls] })
}
