import { ButtonInteraction, MessageActionRow, MessageButton, MessageEmbed, TextChannel, User } from "discord.js"
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
    public add() {
        for (var i = 0; i < 4; i++) for (var j = 0; j < 4; j++) this.tiles[i][j] += 1
    }
    private getCellSpacing(num: number) {
        return num > 999 ? " " : num > 99 ? " · " : num > 9 ? " · · " : " · · · "
    }
    private getBoard() {
        var board = ""

        for (var i = 0; i < 4; i++) {
            board += "+---------+---------+---------+---------+\n"
            for (var j = 0; j < 4; j++) {
                board +=
                    "\\|" +
                    this.getCellSpacing(this.tiles[i][j]) +
                    this.tiles[i][j] +
                    this.getCellSpacing(this.tiles[i][j])
            }
            board += "\\|\n"
        }
        board += "+---------+---------+---------+---------+"
        return board
    }
    public getId() {
        return this.id
    }
    public getEmbed() {
        const embed = new MessageEmbed().setTitle("2048").setDescription("yes").addFields(
            {
                name: "Board",
                value: this.getBoard(),
                inline: true,
            },
            {
                name: "Scoreboard",
                value: "1234",
                inline: true,
            }
        )
        return embed
    }
}

export async function _2048Init(channel: TextChannel, user: User) {
    const _2048 = new __2048()
    const filter = (i: ButtonInteraction) => {
        return i.user.id === user.id
    }
    const clientEmojis = Emojis.getClientEmojis()
    const controls = [
        new MessageActionRow().addComponents(
            new MessageButton().setCustomId("left").setLabel("<").setStyle("PRIMARY"),
            new MessageButton().setCustomId("right").setLabel(">").setStyle("PRIMARY")
        ),
        new MessageActionRow().addComponents(
            new MessageButton().setCustomId("up").setLabel("^").setStyle("PRIMARY"),
            new MessageButton().setCustomId("down").setLabel("v").setStyle("PRIMARY")
        ),
        new MessageActionRow().addComponents(
            new MessageButton().setCustomId("exit").setEmoji(clientEmojis!.exit).setStyle("SECONDARY")
        ),
    ]
    const gameMessage = await channel.send({ embeds: [_2048.getEmbed()], components: controls })
    const controlsManager = channel.createMessageComponentCollector({ componentType: "BUTTON", time: 300000, filter })

    controlsManager.on("collect", async (i: ButtonInteraction) => {
        if (i.customId === "left") {
            _2048.add()
            controlsManager.resetTimer()
            i.update({ embeds: [_2048.getEmbed()], components: controls })
        } else if (i.customId === "right") {
            _2048.add()
            controlsManager.resetTimer()
            i.update({ embeds: [_2048.getEmbed()], components: controls })
        } else if (i.customId === "down") {
            _2048.add()
            controlsManager.resetTimer()
            i.update({ embeds: [_2048.getEmbed()], components: controls })
        } else if (i.customId === "up") {
            _2048.add()
            controlsManager.resetTimer()
            i.update({ embeds: [_2048.getEmbed()], components: controls })
        } else if (i.customId === "exit") {
            i.update({ embeds: [_2048.getEmbed()], components: [] })
            controlsManager.stop()
        }
    })
    controlsManager.on("end", async (collection) => {
        console.log(`2048 (${_2048.getId()}) ended!`)
    })
}
