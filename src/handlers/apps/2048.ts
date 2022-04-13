import { ButtonInteraction, Guild, Message, MessageActionRow, MessageButton, MessageEmbed, TextChannel, User } from "discord.js"
import * as moment from "moment"
import { Emojis } from "../../emojis"
import { _2048MoveDir } from "../../templates"
import { lerp } from "../../utils/color"
import { getDate, getMsFromString, getRandomFloat, getRandomInArray, getTimeElapsed } from "../../utils/getters"
import { MyMath } from "../../utils/math"
import { getGuildProfile, getUserProfile, incGlobalStats, setGlobalStats, setGuildProfile } from "../../utils/mongo"
const asciiTable = require("ascii-table")

class __2048 {
    private static readonly boardSize = 4
    private static highscore = 0
    private static userHighscore: string
    private static dateHighscore: string
    private tiles: number[][]
    private score: number
    private user: User
    private guild: Guild
    private startTime: number

    constructor(user: User, guild: Guild, tiles?: number[][], score?: number) {
        this.user = user
        this.guild = guild
        this.tiles = tiles ?? new Array(__2048.boardSize).fill(0).map(() => new Array(__2048.boardSize).fill(0))
        this.score = score ?? 0
        this.startTime = moment.default().valueOf()
        this.genRandomTile()
        this.setHighscore()
    }

    public move(dir: _2048MoveDir) {
        var tilesWereMoved = false
        var highestAddition = 0
        const moveTwo = (i: number, j: number, k: number, m: number) => {
            tilesWereMoved = true
            this.tiles[i][j] += this.tiles[k][m]
            this.tiles[k][m] = 0
            if (this.tiles[i][j] > highestAddition) highestAddition = this.tiles[i][j]
        }

        if (dir === "UP") {
            for (var j = 0; j < __2048.boardSize; j++)
                for (var i = 1; i < __2048.boardSize; i++)
                    if (this.tiles[i][j] !== 0)
                        for (var k = i; k > 0; k--) {
                            if (this.tiles[k - 1][j] === this.tiles[k][j]) {
                                moveTwo(k - 1, j, k, j)
                                break
                            } else if (this.tiles[k - 1][j] === 0) {
                                moveTwo(k - 1, j, k, j)
                            } else break
                        }
        } else if (dir === "DOWN") {
            for (var j = 0; j < __2048.boardSize; j++)
                for (var i = __2048.boardSize - 2; i >= 0; i--)
                    if (this.tiles[i][j] !== 0)
                        for (var k = i; k < __2048.boardSize - 1; k++) {
                            if (this.tiles[k + 1][j] === this.tiles[k][j]) {
                                moveTwo(k + 1, j, k, j)
                                break
                            } else if (this.tiles[k + 1][j] === 0) {
                                moveTwo(k + 1, j, k, j)
                            } else break
                        }
        } else if (dir === "LEFT") {
            for (var i = 0; i < __2048.boardSize; i++)
                for (var j = 1; j < __2048.boardSize; j++)
                    if (this.tiles[i][j] !== 0)
                        for (var k = j; k > 0; k--) {
                            if (this.tiles[i][k - 1] === this.tiles[i][k]) {
                                moveTwo(i, k - 1, i, k)
                                break
                            } else if (this.tiles[i][k - 1] === 0) {
                                moveTwo(i, k - 1, i, k)
                            } else break
                        }
        } else if (dir === "RIGHT") {
            for (var i = 0; i < __2048.boardSize; i++)
                for (var j = __2048.boardSize - 2; j >= 0; j--)
                    if (this.tiles[i][j] !== 0)
                        for (var k = j; k < __2048.boardSize - 1; k++) {
                            if (this.tiles[i][k + 1] === this.tiles[i][k]) {
                                moveTwo(i, k + 1, i, k)
                                break
                            } else if (this.tiles[i][k + 1] === 0) {
                                moveTwo(i, k + 1, i, k)
                            } else break
                        }
        }
        this.score += highestAddition
        return tilesWereMoved
    }
    public genRandomTile() {
        var tiles: Array<{ i: number; j: number }> = []
        var chosenTile = null

        for (var i = 0; i < __2048.boardSize; i++) for (var j = 0; j < __2048.boardSize; j++) if (this.tiles[i][j] === 0) tiles.push({ i, j })
        chosenTile = getRandomInArray(tiles)
        this.tiles[chosenTile.i][chosenTile.j] = getRandomFloat(0, 1) < 0.2 ? 4 : 2
    }
    private getBoard() {
        const board = new asciiTable()

        board.addRowMatrix(this.tiles).removeBorder()
        return "```\n" + board.toString() + "\n```"
    }
    private getEmbedColor() {
        return lerp("#57F287", "#ED4245", MyMath.clamp(this.score / (__2048.highscore === 0 ? 1 : __2048.highscore), 0, 1))
    }
    public async updateHighscore() {
        if (this.score > __2048.highscore) {
            __2048.highscore = this.score
            __2048.userHighscore = this.user.tag
            __2048.dateHighscore = moment.default().valueOf().toString()
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
    private showHighscore() {
        return __2048.highscore === 0
            ? "No existe o todavía no se ha actualizado"
            : `${__2048.highscore} · ${__2048.userHighscore} _${getDate(__2048.dateHighscore)}_`
    }
    private async setHighscore() {
        const guildProfile = await getGuildProfile({ guildID: this.guild.id })

        __2048.highscore = guildProfile?._2048?.score
        __2048.dateHighscore = guildProfile?._2048?.date
        __2048.userHighscore = guildProfile?._2048?.userTag
    }
    public isGameOver() {
        for (var i = 0; i < __2048.boardSize; i++) {
            for (var j = 0; j < __2048.boardSize; j++) {
                if (i - 1 >= 0 && (this.tiles[i - 1][j] === this.tiles[i][j] || this.tiles[i - 1][j] === 0)) return false
                if (j - 1 >= 0 && (this.tiles[i][j - 1] === this.tiles[i][j] || this.tiles[i][j - 1] === 0)) return false
                if (i + 1 < __2048.boardSize && (this.tiles[i + 1][j] === this.tiles[i][j] || this.tiles[i + 1][j] === 0)) return false
                if (j + 1 < __2048.boardSize && (this.tiles[i][j + 1] === this.tiles[i][j] || this.tiles[i][j + 1] === 0)) return false
            }
        }
        return true
    }
    public getScore() {
        return this.score
    }
    public getEmbed() {
        const embed = new MessageEmbed()
            .setTitle("2048")
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
                    value: `${this.showHighscore()}`,
                    inline: false,
                }
            )
            .setColor(this.getEmbedColor())
            .setFooter({
                text: `${this.user.username} is playing · ${getTimeElapsed(this.startTime, moment.default().valueOf())} ⏰`,
                iconURL: this.user.displayAvatarURL({ dynamic: false, format: "jpeg" }),
            })
        return embed
    }
    public end(cause: "timeout" | "gameover" | "quit", msgInstance: Message) {
        const embed = this.getEmbed()

        this.setHighscore()
        this.updateHighscore()
        if (cause === "timeout") {
            embed.setTitle("2048 (TIMEOUT)")
        } else if (cause === "gameover") {
            embed.setTitle("2048 (GAME OVER)")
        } else if (cause === "quit") {
            embed.setTitle("2048 (QUIT)")
        }
        embed.setFooter({
            text: `${this.user.username} played · ${getTimeElapsed(this.startTime, moment.default().valueOf())} ⏰`,
            iconURL: this.user.displayAvatarURL({ dynamic: false, format: "jpeg" }),
        })
        embed.setColor("LIGHT_GREY")
        msgInstance.edit({ embeds: [embed], components: [] }).catch(console.error)
    }
}

export async function _2048Init(channel: TextChannel, user: User) {
    const clientEmojis = Emojis.getClientEmojis()
    const _2048 = new __2048(user, channel!.guild)
    const timeout = getMsFromString("300s")
    const buttons = [
        new MessageActionRow().addComponents(
            new MessageButton().setCustomId("left").setEmoji(clientEmojis!.leftArrow).setStyle("PRIMARY"),
            new MessageButton().setCustomId("right").setEmoji(clientEmojis!.rightArrow).setStyle("PRIMARY"),
            new MessageButton().setCustomId("up").setEmoji(clientEmojis!.upArrow).setStyle("PRIMARY"),
            new MessageButton().setCustomId("down").setEmoji(clientEmojis!.downArrow).setStyle("PRIMARY"),
            new MessageButton().setCustomId("exit").setEmoji(clientEmojis!.exit).setStyle("SECONDARY")
        ),
    ]
    const msgInstance = (await channel.send({ embeds: [_2048.getEmbed()], components: buttons }).catch(console.error)) as Message
    const filter = (i: ButtonInteraction) => {
        return i.user.id === user.id && i.message.id === msgInstance.id
    }
    const buttonsController = channel.createMessageComponentCollector({
        componentType: "BUTTON",
        time: timeout,
        filter,
    })

    buttonsController.on("collect", async (i: ButtonInteraction) => {
        if (i.customId === "left") {
            if (_2048.move("LEFT")) _2048.genRandomTile()
        } else if (i.customId === "right") {
            if (_2048.move("RIGHT")) _2048.genRandomTile()
        } else if (i.customId === "down") {
            if (_2048.move("DOWN")) _2048.genRandomTile()
        } else if (i.customId === "up") {
            if (_2048.move("UP")) _2048.genRandomTile()
        }
        if (i.customId === "exit") {
            _2048.end("quit", msgInstance)
            buttonsController.stop()
        } else if (_2048.isGameOver()) {
            _2048.end("gameover", msgInstance)
            buttonsController.stop()
        }
        if (!buttonsController.ended) i.update({ embeds: [_2048.getEmbed()], components: buttons }).catch(console.error)
    })
    buttonsController.on("end", async (collection) => {
        const profile = await getUserProfile({
            userID: user.id,
            guildID: channel!.guild.id,
        })

        if (
            moment.default().valueOf() - timeout >=
                (collection?.last() ? collection!.last()!.createdTimestamp : moment.default().valueOf() - (timeout << 1)) ||
            moment.default().valueOf() - timeout >= msgInstance?.createdTimestamp
        )
            _2048.end("timeout", msgInstance)
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
        console.log(`2048 by ${user.username} ended!`)
    })
}
