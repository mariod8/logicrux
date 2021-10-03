import { Guild, GuildMember, TextChannel } from "discord.js"
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
    if (stringSimilarity.compareTwoStrings(similarUsername, username) < usernameSimilarityThreshold) return null
    else return similarMember.user
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
    if (stringSimilarity.compareTwoStrings(similarChannelName, channel) < channelSimilarityThreshold)
        return guild.channels.cache.filter((channel) => channel.type === "GUILD_TEXT").first() as TextChannel
    else return similarChannel as TextChannel
}

export function getRandomInArray(array: Array<any>) {
    return array[Math.floor(Math.random() * array.length)]
}
