import { ButtonInteraction, Guild, MessageActionRow, MessageButton, MessageEmbed, Options } from "discord.js"
import { ICommand } from "wokcommands"
import { getMsFromString } from "../../utils/getters"

function nuke(guild: Guild) {
    //TODO
}

export default {
    category: "Testing",
    description: "Nuke a server",
    slash: true,
    testOnly: true,
    guildOnly: true,
    ownerOnly: true,
    callback: async ({ guild, interaction, member, user, channel }) => {
        await interaction.deferReply()

        const time = getMsFromString("1m")
        const embedConfirm = new MessageEmbed()
            .setTitle(`¿Estás seguro que quieres nukear ${guild!.name}?`)
            .setDescription(
                "Nukear un servidor eliminará todos sus canales, incluido los registros de mensajes, todos los roles y demás. Procede con precaución"
            )
            .setColor("RED")
            .setFooter(`Lanzado por ${member.user.username}`)
        const embedCancelled = new MessageEmbed().setTitle(`Nuke cancelado`).setColor("GREY").setFooter(`Lanzado por ${member.user.username}`)
        const embedApproved = new MessageEmbed()
            .setTitle(`Nuke aceptado`)
            .setDescription("Nukeando servidor")
            .setColor("RED")
            .setFooter(`Lanzado por ${member.user.username}`)

        await interaction.editReply({
            embeds: [embedConfirm],
            components: [
                new MessageActionRow().addComponents(
                    new MessageButton().setCustomId("y").setEmoji("✔️").setStyle("DANGER"),
                    new MessageButton().setCustomId("n").setEmoji("❌").setStyle("SECONDARY")
                ),
            ],
        })
        const message = await interaction.fetchReply()
        const filter = (i: ButtonInteraction) => {
            return i.user.id === user.id && i.message.id === message.id
        }
        const menusManager = channel.createMessageComponentCollector({
            componentType: "BUTTON",
            time,
            filter,
        })

        menusManager.on("collect", async (i: ButtonInteraction) => {
            if (i.customId === "y") {
                i.update({
                    embeds: [embedApproved],
                    components: [],
                })
                nuke(guild!)
            } else if (i.customId === "n") {
                i.update({
                    embeds: [embedCancelled],
                    components: [],
                })
                menusManager.stop()
            }
        })
        menusManager.on("end", async (collection) => {
            interaction.editReply({
                embeds: [embedCancelled],
                components: [],
            })
        })
    },
} as ICommand
