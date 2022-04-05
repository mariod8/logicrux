import {
    ButtonInteraction,
    EmbedFooterData,
    Guild,
    Message,
    MessageActionRow,
    MessageButton,
    MessageEmbed,
    TextChannel,
    User,
} from "discord.js"
import * as moment from "moment"
import { Emojis } from "../../emojis"
import { _2048MoveDir, GuildProfile } from "../../templates"
import { lerp } from "../../utils/color"
import { getDate, getMsFromString, getRandomDecimalNumber, getRandomInArray, getTimeElapsed } from "../../utils/getters"
import { MyMath } from "../../utils/math"
import { getGuildProfile, getUserProfile, incGlobalStats, setGlobalStats, setGuildProfile } from "../../utils/mongo"
const asciiTable = require("ascii-table")

class __2048 {
    static readonly boardSize = 4
    private static highscore: number = 0
    private static userHighscore: any
    private static dateHighscore: any
    private tiles: number[][]
    private id: number
    private score: number
    private user: User
    private guild: Guild
    private startTime: number

    constructor(user: User, guild: Guild) {
        this.tiles = new Array(__2048.boardSize).fill(0).map(() => new Array(__2048.boardSize).fill(0))
        this.guild = guild
        this.score = 0
        this.id = moment.default().valueOf()
        this.startTime = this.id
        this.user = user
        this.genRandomTile()
        this.updateHighscore()
    }

    public move(dir: _2048MoveDir) {
        var tilesWereMoved = false
        var highestAddition = 0

        if (dir === "UP") {
            for (var j = 0; j < __2048.boardSize; j++)
                for (var i = 0; i < __2048.boardSize; i++)
                    if (this.tiles[i][j] !== 0)
                        for (var k = 0; k < i; k++)
                            if (this.tiles[k][j] === 0 || this.tiles[k][j] === this.tiles[i][j]) {
                                var canMove = true

                                for (var m = k; m < i; m++)
                                    if (this.tiles[m][j] !== 0 && this.tiles[m][j] !== this.tiles[i][j]) canMove = false
                                if (!canMove) break
                                tilesWereMoved = true
                                this.tiles[k][j] = this.tiles[k][j] === 0 ? this.tiles[i][j] : this.tiles[i][j] * 2
                                this.tiles[i][j] = 0
                                if (this.tiles[k][j] > highestAddition) highestAddition = this.tiles[k][j]
                                break
                            }
        } else if (dir === "DOWN") {
            for (var j = 0; j < __2048.boardSize; j++)
                for (var i = __2048.boardSize - 1; i >= 0; i--)
                    if (this.tiles[i][j] !== 0)
                        for (var k = __2048.boardSize - 1; k > i; k--)
                            if (this.tiles[k][j] === 0 || this.tiles[k][j] === this.tiles[i][j]) {
                                var canMove = true

                                for (var m = k; m > i; m--)
                                    if (this.tiles[m][j] !== 0 && this.tiles[m][j] !== this.tiles[i][j]) canMove = false
                                if (!canMove) break
                                tilesWereMoved = true
                                this.tiles[k][j] = this.tiles[k][j] === 0 ? this.tiles[i][j] : this.tiles[i][j] * 2
                                this.tiles[i][j] = 0
                                if (this.tiles[k][j] > highestAddition) highestAddition = this.tiles[k][j]
                                break
                            }
        } else if (dir === "LEFT") {
            for (var i = 0; i < __2048.boardSize; i++)
                for (var j = 0; j < __2048.boardSize; j++)
                    if (this.tiles[i][j] !== 0)
                        for (var k = 0; k < j; k++)
                            if (this.tiles[i][k] === 0 || this.tiles[i][k] === this.tiles[i][j]) {
                                var canMove = true

                                for (var m = k; m < j; m++)
                                    if (this.tiles[i][m] !== 0 && this.tiles[i][m] !== this.tiles[i][j]) canMove = false
                                if (!canMove) break
                                tilesWereMoved = true
                                this.tiles[i][k] = this.tiles[i][k] === 0 ? this.tiles[i][j] : this.tiles[i][j] * 2
                                this.tiles[i][j] = 0
                                if (this.tiles[i][k] > highestAddition) highestAddition = this.tiles[i][k]
                                break
                            }
        } else if (dir === "RIGHT") {
            for (var i = 0; i < __2048.boardSize; i++)
                for (var j = __2048.boardSize - 1; j >= 0; j--)
                    if (this.tiles[i][j] !== 0)
                        for (var k = __2048.boardSize - 1; k > j; k--)
                            if (this.tiles[i][k] === 0 || this.tiles[i][k] === this.tiles[i][j]) {
                                var canMove = true

                                for (var m = k; m > j; m--)
                                    if (this.tiles[i][m] !== 0 && this.tiles[i][m] !== this.tiles[i][j]) canMove = false
                                if (!canMove) break
                                tilesWereMoved = true
                                this.tiles[i][k] = this.tiles[i][k] === 0 ? this.tiles[i][j] : this.tiles[i][j] * 2
                                this.tiles[i][j] = 0
                                if (this.tiles[i][k] > highestAddition) highestAddition = this.tiles[i][k]
                                break
                            }
        }
        this.score += highestAddition
        this.updateHighscore()
        return tilesWereMoved
    }
    public genRandomTile() {
        var tiles = []
        var chosenTile = null

        for (var i = 0; i < __2048.boardSize; i++)
            for (var j = 0; j < __2048.boardSize; j++) if (this.tiles[i][j] === 0) tiles.push({ i, j })
        chosenTile = getRandomInArray(tiles)
        this.tiles[chosenTile.i][chosenTile.j] = getRandomDecimalNumber(0, 1) < 0.2 ? 4 : 2
    }
    private getBoard() {
        var board = new asciiTable()
        board.addRowMatrix(this.tiles).removeBorder()
        board = "```\n" + board.toString() + "\n```"
        return board
    }
    private getEmbedColor() {
        return lerp(
            "#57F287",
            "#ED4245",
            MyMath.clamp(this.score / (__2048.highscore === 0 ? 1 : __2048.highscore), 0, 1)
        )
    }
    public async updateHighscore() {
        const guildProfile = await getGuildProfile({ guildID: this.guild.id })
        __2048.highscore = guildProfile?._2048?.score | 0
        __2048.dateHighscore = guildProfile?._2048?.date ? getDate(guildProfile?._2048?.date) : null
        __2048.userHighscore = guildProfile?._2048?.userTag
        if (this.score > __2048.highscore) {
            __2048.highscore = this.score
            await setGuildProfile(
                { guildID: this.guild.id },
                {
                    "_2048.score": this.score,
                    "_2048.userTag": this.user.tag,
                    "_2048.date": moment.default().valueOf().toString(),
                }
            )
        }
    }
    public getId() {
        return this.id
    }
    public gameOver() {
        for (var i = 0; i < __2048.boardSize; i++) {
            for (var j = 0; j < __2048.boardSize; j++) {
                if (i - 1 >= 0)
                    if (this.tiles[i - 1][j] === this.tiles[i][j] || this.tiles[i - 1][j] === 0) return false
                if (j - 1 >= 0)
                    if (this.tiles[i][j - 1] === this.tiles[i][j] || this.tiles[i][j - 1] === 0) return false
                if (i + 1 <= __2048.boardSize - 1)
                    if (this.tiles[i + 1][j] === this.tiles[i][j] || this.tiles[i + 1][j] === 0) return false
                if (j + 1 <= __2048.boardSize - 1)
                    if (this.tiles[i][j + 1] === this.tiles[i][j] || this.tiles[i][j + 1] === 0) return false
            }
        }
        return true
    }
    public getScore() {
        return this.score
    }
    public getEmbed() {
        const embedFooterData: EmbedFooterData = {
            text: `${this.user.username} is playing · ${getTimeElapsed(this.startTime, moment.default().valueOf())} ⏰`,
            iconURL: this.user.displayAvatarURL({ dynamic: false, format: "jpg" }),
        }
        const embed = new MessageEmbed()
            .setTitle(`2048`)
            .setDescription("The 2048 Game")
            .addFields(
                {
                    name: "Board",
                    value: `${this.getBoard()}`,
                    inline: true,
                },
                {
                    name: "Score",
                    value: `${this.score}`,
                    inline: true,
                },
                {
                    name: "Highscore",
                    value:
                        __2048.highscore === 0
                            ? "_No existe o todavía no se ha actualizado_"
                            : `${__2048.highscore} · ${__2048.userHighscore} _(${__2048.dateHighscore})_`,
                    inline: false,
                }
            )
            .setColor(this.getEmbedColor())
            .setFooter(embedFooterData)
        return embed
    }
}

export async function _2048Init(channel: TextChannel, user: User) {
    const _2048 = new __2048(user, channel!.guild)
    const clientEmojis = Emojis.getClientEmojis()
    const time = getMsFromString("300s")
    const controls = [
        new MessageActionRow().addComponents(
            new MessageButton().setCustomId("left").setEmoji(clientEmojis!.leftArrow).setStyle("PRIMARY"),
            new MessageButton().setCustomId("right").setEmoji(clientEmojis!.rightArrow).setStyle("PRIMARY"),
            new MessageButton().setCustomId("up").setEmoji(clientEmojis!.upArrow).setStyle("PRIMARY"),
            new MessageButton().setCustomId("down").setEmoji(clientEmojis!.downArrow).setStyle("PRIMARY"),
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
            moment.default().valueOf() - time >=
                (collection?.last() ? collection!.last()!.createdTimestamp : moment.default().valueOf() - 2 * time) ||
            moment.default().valueOf() - time >= instanceMessage?.createdTimestamp
        )
            _2048Exit(1)
        const profile = await getUserProfile({
            userID: user.id,
            guildID: channel!.guild.id,
        })
        if (_2048.getScore() > profile?.userProfile?.globalStats?.apps?._2048?.highscore)
            await setGlobalStats(
                {
                    userID: user.id,
                    guildID: channel!.guild.id,
                },
                {
                    "apps._2048.highscore": _2048.getScore(),
                }
            )
        await incGlobalStats(
            {
                userID: user.id,
                guildID: channel!.guild.id,
            },
            {
                "apps._2048.games": 1,
            }
        )
        console.log(`2048 (${_2048.getId()}, ${user.username}) ended!`)
    })
}
