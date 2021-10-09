import { ButtonInteraction, MessageActionRow, MessageButton, MessageEmbed, TextChannel, User } from "discord.js"
import moment from "moment"
import { Emojis } from "../../emojis"
import { getMsFromString, getRandomDecimalNumber, getRandomInArray, getRandomNumber } from "../../utils/getters"

class __2048 {
    private tiles: number[][]
    private boardSize = 4
    private id: number
    private score: number

    constructor() {
        this.tiles = new Array(this.boardSize).fill(0).map(() => new Array(this.boardSize).fill(0))
        this.id = moment().valueOf()
        this.genRandomTile()
        this.score = 0
    }
    public move(dir: "UP" | "DOWN" | "LEFT" | "RIGHT") {
        var tilesWereMoved = false
        var highestAddition = 0

        if (dir === "UP") {
            for (var j = 0; j < this.boardSize; j++)
                for (var i = 0; i < this.boardSize; i++)
                    if (this.tiles[i][j] !== 0)
                        for (var i2 = 0; i2 < i; i2++)
                            if (this.tiles[i][i2] === 0) {
                                tilesWereMoved = true
                                this.tiles[i][i2] = this.tiles[i][j]
                                this.tiles[i][j] = 0
                                break
                            } else if (this.tiles[i][i2] === this.tiles[i][j]) {
                                tilesWereMoved = true
                                this.tiles[i][i2] += this.tiles[i][j]
                                if (this.tiles[i][i2] > highestAddition) highestAddition = this.tiles[i][i2]
                                this.tiles[i][j] = 0
                                break
                            }
        } else if (dir === "DOWN") {
            for (var j = 0; j < this.boardSize; j++){
                for (var i = this.boardSize - 1; i >= 0; i--){
                    if (this.tiles[i][j] !== 0){
                        for (var j2 = j; j2 >= 0; j2--){
                            if (this.tiles[i][j2] === 0) {
                                tilesWereMoved = true
                                this.tiles[i][j2] = this.tiles[i][j]
                                this.tiles[i][j] = 0
                                break
                            } else if (this.tiles[i][j2] === this.tiles[i][j]) {
                                tilesWereMoved = true
                                this.tiles[i][j2] += this.tiles[i][j]
                                if (this.tiles[i][j2] > highestAddition) highestAddition = this.tiles[i][j2]
                                this.tiles[i][j] = 0
                                break
                            }
                        }
                    }
                }
            }
        } else if (dir === "LEFT") {
            for (var i = 0; i < this.boardSize; i++)
                for (var j = 0; j < this.boardSize; j++)
                    if (this.tiles[i][j] !== 0)
                        for (var j2 = 0; j2 < j; j2++)
                            if (this.tiles[i][j2] === 0) {
                                tilesWereMoved = true
                                this.tiles[i][j2] = this.tiles[i][j]
                                this.tiles[i][j] = 0
                                break
                            } else if (this.tiles[i][j2] === this.tiles[i][j]) {
                                tilesWereMoved = true
                                this.tiles[i][j2] += this.tiles[i][j]
                                if (this.tiles[i][j2] > highestAddition) highestAddition = this.tiles[i][j2]
                                this.tiles[i][j] = 0
                                break
                            }
        } else if (dir === "RIGHT") {
            for (var i = 0; i < this.boardSize; i++)
                for (var j = this.boardSize - 1; j >= 0; j--)
                    if (this.tiles[i][j] !== 0)
                        for (var j2 = j; j2 >= 0; j2--)
                            if (this.tiles[i][j2] === 0) {
                                tilesWereMoved = true
                                this.tiles[i][j2] = this.tiles[i][j]
                                this.tiles[i][j] = 0
                                break
                            } else if (this.tiles[i][j2] === this.tiles[i][j]) {
                                tilesWereMoved = true
                                this.tiles[i][j2] += this.tiles[i][j]
                                if (this.tiles[i][j2] > highestAddition) highestAddition = this.tiles[i][j2]
                                this.tiles[i][j] = 0
                                break
                            }
        }
        this.score += highestAddition
        return tilesWereMoved
    }
    private getCellSpacing(num: number) {
        return num > 999 ? " " : num > 99 ? " · " : num > 9 ? " · · " : " · · · "
    }
    public genRandomTile() {
        interface tile {
            i: number
            j: number
        }
        var tiles = []
        var chosenTile = null

        for (var i = 0; i < this.boardSize; i++)
            for (var j = 0; j < this.boardSize; j++) if (this.tiles[i][j] === 0) tiles.push({ i, j })
        chosenTile = getRandomInArray(tiles)
        this.tiles[chosenTile.i][chosenTile.j] = getRandomDecimalNumber(0, 1) < 0.2 ? 4 : 2
    }
    private getBoard() {
        var board = ""

        for (var i = 0; i < this.boardSize; i++) {
            for (var k = 0; k < this.boardSize; k++) board += "+---------"
            board += "+\n"
            for (var j = 0; j < this.boardSize; j++) {
                board +=
                    "\\|" +
                    this.getCellSpacing(this.tiles[i][j]) +
                    this.tiles[i][j] +
                    this.getCellSpacing(this.tiles[i][j])
            }
            board += "\\|\n"
        }
        for (var i = 0; i < this.boardSize; i++) board += "+---------"
        board += "+"
        return board
    }
    public getId() {
        return this.id
    }
    public getEmbed() {
        const embed = new MessageEmbed()
            .setTitle("2048")
            .setDescription(
                "The 2048 game on Discord. Use the buttons to move the tiles. When two tiles with the same number touch, they'll merge!"
            )
            .addFields(
                {
                    name: "Board",
                    value: this.getBoard(),
                    inline: true,
                },
                {
                    name: "Score",
                    value: this.score.toString(),
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
            new MessageButton().setCustomId("right").setLabel(">").setStyle("PRIMARY"),
            new MessageButton().setCustomId("up").setLabel("^").setStyle("PRIMARY"),
            new MessageButton().setCustomId("down").setLabel("v").setStyle("PRIMARY"),
            new MessageButton().setCustomId("exit").setEmoji(clientEmojis!.exit).setStyle("SECONDARY")
        ),
    ]
    await channel.send({ embeds: [_2048.getEmbed()], components: controls }).catch(console.error)
    const controlsManager = channel.createMessageComponentCollector({
        componentType: "BUTTON",
        time: getMsFromString("50s"),
        filter,
    })

    controlsManager.on("collect", async (i: ButtonInteraction) => {
        if (i.customId === "left") {
            if (_2048.move("LEFT")) _2048.genRandomTile()
            controlsManager.resetTimer()
            i.update({ embeds: [_2048.getEmbed()], components: controls })
        } else if (i.customId === "right") {
            if (_2048.move("RIGHT")) _2048.genRandomTile()
            controlsManager.resetTimer()
            i.update({ embeds: [_2048.getEmbed()], components: controls })
        } else if (i.customId === "down") {
            if (_2048.move("DOWN")) _2048.genRandomTile()
            controlsManager.resetTimer()
            i.update({ embeds: [_2048.getEmbed()], components: controls })
        } else if (i.customId === "up") {
            if (_2048.move("UP")) _2048.genRandomTile()
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
