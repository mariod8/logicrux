import { Guild, GuildMember, TextChannel } from "discord.js"
import moment from "moment"
const stringSimilarity = require("string-similarity")

export function getUserByString(username: string, guild: Guild) {
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
    return stringSimilarity.compareTwoStrings(similarUsername, username) < usernameSimilarityThreshold
        ? null
        : similarMember.user
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

export function getTime(option: "MS_TO_END_OF_WEEK" | "WEEKLY_LOOP") {
    if (option === "MS_TO_END_OF_WEEK") return moment().endOf("isoWeek").valueOf() - moment().valueOf() - 5000
    else if (option === "WEEKLY_LOOP") return 7 * 24 * 60 * 3600 * 1000
}
