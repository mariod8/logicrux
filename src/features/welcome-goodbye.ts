import { GuildMember, PartialGuildMember, TextChannel } from "discord.js"
import { getChannelByString } from "../util/getters"

export default async (
    member: GuildMember | PartialGuildMember,
    action: "ADD" | "REMOVE"
) => {
    const { guild, user } = member
    const channel = (await getChannelByString("general", guild)) as TextChannel

    if (!channel) return
    if (action === "ADD")
        channel
            .send(`\`\`\`fix\n${user?.username} joined the game\n\`\`\``)
            .catch(console.error)
    else
        channel
            .send(`\`\`\`fix\n${user?.username} leaved the game\n\`\`\``)
            .catch(console.error)
}
