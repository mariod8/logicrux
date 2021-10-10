import {
    ButtonInteraction,
    Guild,
    Message,
    MessageActionRow,
    MessageButton,
    MessageEmbed,
    TextChannel,
    User,
} from "discord.js"
import moment from "moment"
import { Emojis } from "../../emojis"
import { _2048MoveDir, _guildProfile } from "../../templates"
import { lerp } from "../../utils/color"
import { getMsFromString, getRandomDecimalNumber, getRandomInArray, getTimeElapsed } from "../../utils/getters"
import { MyMath } from "../../utils/math"
import { getGuildProfile, setGuildProfile } from "../../utils/mongo"

class __2048 {
    readonly boardSize = 4
    private tiles: number[][]
    private id: number
    private score: number
    private user: User
    private highscore: any
    private userHighscore: any
    private dateHighscore: any
    private guild: Guild
    private startTime: number

    constructor(user: User, guild: Guild) {
        this.tiles = new Array(this.boardSize).fill(0).map(() => new Array(this.boardSize).fill(0))
        this.guild = guild
        this.score = 0
        this.highscore = 0
        this.id = moment().valueOf()
        this.genRandomTile()
        this.user = user
        this.updateHighscore()
        this.startTime = moment().valueOf()
    }
    public move(dir: _2048MoveDir) {
        var tilesWereMoved = false
        var highestAddition = 0

        if (dir === "UP") {
            for (var j = 0; j < this.boardSize; j++)
                for (var i = 0; i < this.boardSize; i++)
                    if (this.tiles[i][j] !== 0)
                        for (var i2 = 0; i2 < i; i2++)
                            if (this.tiles[i2][j] === 0) {
                                tilesWereMoved = true
                                this.tiles[i2][j] = this.tiles[i][j]
                                this.tiles[i][j] = 0
                                break
                            } else if (this.tiles[i2][j] === this.tiles[i][j]) {
                                tilesWereMoved = true
                                this.tiles[i2][j] += this.tiles[i][j]
                                if (this.tiles[i2][j] > highestAddition) highestAddition = this.tiles[i2][j]
                                this.tiles[i][j] = 0
                                break
                            }
        } else if (dir === "DOWN") {
            for (var j = 0; j < this.boardSize; j++)
                for (var i = this.boardSize - 1; i >= 0; i--)
                    if (this.tiles[i][j] !== 0)
                        for (var i2 = this.boardSize - 1; i2 > i; i2--)
                            if (this.tiles[i2][j] === 0) {
                                tilesWereMoved = true
                                this.tiles[i2][j] = this.tiles[i][j]
                                this.tiles[i][j] = 0
                                break
                            } else if (this.tiles[i2][j] === this.tiles[i][j]) {
                                tilesWereMoved = true
                                this.tiles[i2][j] += this.tiles[i][j]
                                if (this.tiles[i2][j] > highestAddition) highestAddition = this.tiles[i2][j]
                                this.tiles[i][j] = 0
                                break
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
                        for (var j2 = this.boardSize - 1; j2 > j; j2--)
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
        this.updateHighscore()
        return tilesWereMoved
    }
    private getCellSpacing(num: number) {
        return num > 999 ? " " : num > 99 ? " · " : num > 9 ? " · · " : " · · · "
    }
    public genRandomTile() {
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
    private getEmbedColor() {
        return lerp("#57f287", "#ed4245", MyMath.clamp(this.score / (this.highscore === 0 ? 1 : this.highscore), 0, 1))
    }
    public async updateHighscore() {
        const guildProfile = await getGuildProfile({ guildID: this.guild.id })
        this.highscore = guildProfile?._2048?.score
        this.dateHighscore = moment(guildProfile?._2048?.date, "x").format("lll")
        this.userHighscore = await this.guild?.members?.cache?.get(guildProfile?._2048?.userID)?.user
        if (this.score > this.highscore) {
            this.highscore = this.score
            await setGuildProfile(
                { guildID: this.guild.id },
                { "_2048.score": this.score, "_2048.userID": this.user.id, "_2048.date": moment().valueOf().toString() }
            )
        }
    }
    public getId() {
        return this.id
    }
    public gameOver() {
        for (var i = 0; i < this.boardSize; i++) {
            for (var j = 0; j < this.boardSize; j++) {
                if (i - 1 > 0) if (this.tiles[i - 1][j] === this.tiles[i][j]) return false
                if (j - 1 > 0) if (this.tiles[i][j - 1] === this.tiles[i][j]) return false
                if (i + 1 < this.boardSize - 1) if (this.tiles[i + 1][j] === this.tiles[i][j]) return false
                if (j + 1 < this.boardSize - 1) if (this.tiles[i][j + 1] === this.tiles[i][j]) return false
            }
        }
        return true
    }
    public getEmbed() {
        const embed = new MessageEmbed()
            .setTitle(`2048`)
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
                    value: `${this.score} _(${Math.floor(
                        (this.score / MyMath.clamp(this.highscore, 1, this.highscore)) * 100
                    )}% HS_)`,
                    inline: true,
                },
                {
                    name: "Highscore",
                    value:
                        this.highscore === 0
                            ? "_No previous highscore_"
                            : `${this.highscore} · ${this.userHighscore} _(${this.dateHighscore})_`,
                    inline: false,
                }
            )
            .setColor(this.getEmbedColor())
            .setFooter(
                `${this.user.username} is playing · ${getTimeElapsed(this.startTime, moment().valueOf())} ⏰`,
                this.user.displayAvatarURL()
            )
        return embed
    }
}

export async function _2048Init(channel: TextChannel, user: User) {
    const _2048 = new __2048(user, channel!.guild)
    const clientEmojis = Emojis.getClientEmojis()
    const time = getMsFromString("50s")
    const controls = [
        new MessageActionRow().addComponents(
            new MessageButton().setCustomId("left").setEmoji(clientEmojis!.leftArrow).setStyle("PRIMARY"),
            new MessageButton().setCustomId("right").setEmoji(clientEmojis!.rightArrow).setStyle("PRIMARY"),
            new MessageButton().setCustomId("up").setLabel("^").setStyle("PRIMARY"),
            new MessageButton().setCustomId("down").setLabel("v").setStyle("PRIMARY"),
            new MessageButton().setCustomId("exit").setEmoji(clientEmojis!.exit).setStyle("SECONDARY")
        ),
    ]
    const instanceMessage = (await channel
        .send({ embeds: [_2048.getEmbed()], components: controls })
        .catch(console.error)) as Message
    const filter = (i: ButtonInteraction) => {
        return i.user.id === user.id && i.message.id === instanceMessage.id
    }
    const controlsManager = channel.createMessageComponentCollector({
        componentType: "BUTTON",
        time,
        filter,
    })
    function _2048Exit(option: 0 | 1 | 2) {
        instanceMessage
            .edit({
                embeds: [
                    _2048
                        .getEmbed()
                        .setTitle(
                            option === 0
                                ? "2048 (GAME ENDED)"
                                : option === 1
                                ? "2048 (TIME EXPIRED)"
                                : "2048 (GAME OVER)"
                        )
                        .setColor("LIGHT_GREY"),
                ],
                components: [],
            })
            .catch(console.error)
        controlsManager.stop()
    }

    controlsManager.on("collect", async (i: ButtonInteraction) => {
        if (i.customId === "left") {
            if (_2048.move("LEFT")) _2048.genRandomTile()
        } else if (i.customId === "right") {
            if (_2048.move("RIGHT")) _2048.genRandomTile()
        } else if (i.customId === "down") {
            if (_2048.move("DOWN")) _2048.genRandomTile()
        } else if (i.customId === "up") {
            if (_2048.move("UP")) _2048.genRandomTile()
        }
        if (i.customId !== "exit") {
            if (_2048.gameOver()) {
                _2048Exit(2)
            } else {
                controlsManager.resetTimer()
                i.update({ embeds: [_2048.getEmbed()], components: controls })
            }
        } else {
            _2048Exit(0)
        }
    })
    controlsManager.on("end", async (collection) => {
        if (collection.last()?.customId === "exit") _2048Exit(0)
        else if (
            moment().valueOf() - time >=
                (collection?.last() ? collection!.last()!.createdTimestamp : moment().valueOf() - 2 * time) ||
            moment().valueOf() - time >= instanceMessage?.createdTimestamp
        )
            _2048Exit(1)
        console.log(`2048 (${_2048.getId()}, ${user.username}) ended!`)
    })
}
