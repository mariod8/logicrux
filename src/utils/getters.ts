import { Client, ColorResolvable, CommandInteraction, Guild, GuildMember, Message, TextChannel, User } from "discord.js"
import moment from "moment"
import { _userType } from "../templates"
import { time } from "./regex"
const stringSimilarity = require("string-similarity")

export function getUserByString(username: string, guild: Guild, type: _userType = _userType.User) {
    var usernames: Array<string> = []
    const usernameSimilarityThreshold = 0.1
    username = username.toLowerCase()

    guild.members.cache.each((member) => {
        usernames.push(member.user.username.toLowerCase())
    })
    const similarUsername = stringSimilarity.findBestMatch(username, usernames).bestMatch.target as string
    const similarMember = guild.members.cache.find(
        (member) => member.user.username.toLowerCase() === similarUsername
    ) as GuildMember
    if (stringSimilarity.compareTwoStrings(similarUsername, username) < usernameSimilarityThreshold)
        throw "No se ha podido encontrar al usuario"
    return type === _userType.User ? similarMember.user : similarMember
}

export function getChannelByString(channel: string, guild: Guild) {
    var channels: Array<string> = []
    const channelSimilarityThreshold = 0.1
    channel = channel.toLowerCase()

    guild.channels.cache
        .filter((channel) => channel.type === "GUILD_TEXT")
        .each((channel) => channels.push(channel.name.toLowerCase()))
    const similarChannelName = stringSimilarity.findBestMatch(channel, channels).bestMatch.target as string
    const similarChannel = guild.channels.cache.find((channel) => channel.name.toLowerCase() === similarChannelName)
    return (
        stringSimilarity.compareTwoStrings(similarChannelName, channel) < channelSimilarityThreshold
            ? guild.channels.cache.filter((channel) => channel.type === "GUILD_TEXT").first()
            : similarChannel
    ) as TextChannel
}

export function getRandomInArray(array: Array<any>) {
    return array[Math.floor(Math.random() * array.length)]
}

export function getRandomInObject(object: any) {
    const keys = Object.keys(object)

    return object[keys[Math.floor(Math.random() * keys.length)]]
}

export function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getRandomDecimalNumber(min: number, max: number) {
    return Math.random() * (max - min + 1) + min
}

export function getTime(option: "MS_TO_END_OF_WEEK" | "WEEKLY_LOOP") {
    if (option === "MS_TO_END_OF_WEEK") return moment().endOf("isoWeek").valueOf() - moment().valueOf() - 5000
    else if (option === "WEEKLY_LOOP") return 7 * 24 * 60 * 3600 * 1000
}

export function getMsFromString(timeRaw: string) {
    timeRaw = timeRaw.toLowerCase()
    if (!time.test(timeRaw)) return 1000
    var timeUnit = /[smhd]/gm.exec(timeRaw)![0]
    var timeValue = parseInt(/\d+/gm.exec(timeRaw)![0]) * 1000

    switch (timeUnit) {
        case "s":
            return timeValue
        case "m":
            return timeValue * 60
        case "h":
            return timeValue * 60 * 60
        case "d":
            return timeValue * 60 * 60 * 24
        default:
            return 1000
    }
}

export function getTimeElapsed(startTime: number, endTime: number) {
    var timeElapsed = endTime - startTime
    var ms = timeElapsed % 1000
    timeElapsed = (timeElapsed - ms) / 1000
    var secs = timeElapsed % 60
    timeElapsed = (timeElapsed - secs) / 60
    var mins = timeElapsed % 60
    var hrs = (timeElapsed - mins) / 60
    return (hrs < 10 ? "0" + hrs : hrs) + ":" + (mins < 10 ? "0" + mins : mins) + ":" + (secs < 10 ? "0" + secs : secs)
}

export function getDate(ms: number | string) {
    if (typeof ms == "string") return moment(ms, "x").format("lll")
    return moment(ms).format("lll")
}
