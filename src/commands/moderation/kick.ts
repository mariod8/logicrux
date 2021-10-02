import { ColorResolvable, GuildMember, MessageEmbed } from "discord.js"
import { ICommand } from "wokcommands"

export default {
  category: "Moderation",
  description: "Kicks a user",
  permissions: ["KICK_MEMBERS"],
  slash: true,
  testOnly: true,
  guildOnly: true,
  options: [
    {
      name: "user",
      description: "User you want to kick",
      required: true,
      type: "USER",
    },
    {
      name: "reason",
      description: "The reason why you want to kick this user",
      required: false,
      type: "STRING",
    },
  ],
  callback: ({ interaction, args }) => {
    const target = interaction.options.getMember("user") as GuildMember
    const author = interaction.user

    if (!target) return "Please specify someone to kick"
    if (!target.kickable) return "No se puede kickear al usuario"
    args.shift()
    const reason = args.length ? args.join(" ") : "_No especificado_"
    const embed = new MessageEmbed()
      .setTitle(`${target.user.username} ha sido expulsado`)
      .setDescription(
        `**ID Usuario**: ${target.id}\n**Miembro**: ${target}\n**Motivo**: ${reason}`
      )
      .setFooter(`Expulsado por ${author.username}`, author.displayAvatarURL())
      .setColor("ORANGE")
    target.kick(reason)
    return embed
  },
} as ICommand
