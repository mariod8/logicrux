import { GuildMember, PartialGuildMember, TextChannel } from "discord.js"
import { getChannelByString } from "../utils/getters"

export default async (member: GuildMember | PartialGuildMember, action: "ADD" | "REMOVE") => {
    const { guild, user } = member
    const channel = await getChannelByString("general", guild)

    if (!channel) return
    if (action === "ADD")
        await channel.send(`\`\`\`fix\n${user?.username} joined the game\n\`\`\``).catch(console.error)
    else await channel.send(`\`\`\`fix\n${user?.username} left the game\n\`\`\``).catch(console.error)
}
