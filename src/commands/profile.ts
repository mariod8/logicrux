import {
    BufferResolvable,
    ButtonInteraction,
    GuildMember,
    MessageActionRow,
    MessageAttachment,
    MessageButton,
    MessageEmbed,
} from "discord.js"
import moment from "moment"
import { ICommand } from "wokcommands"
import { Emojis } from "../emojis"
import { MyMember } from "../member"
import { _menuPages, _used, _userProfile } from "../templates"
import { getMsFromString } from "../utils/getters"
import { getUserProfile } from "../utils/mongo"
import { CanvasRenderService } from "chartjs-node-canvas"

class Profile {
    private page: _menuPages
    private member: MyMember
    private profile: _userProfile
    private clientEmojis: any

    constructor(member: MyMember, profile: _userProfile, clientEmojis: any) {
        this.page = "general"
        this.member = member
        this.profile = profile
        this.clientEmojis = clientEmojis
    }

    public async getEmojiChart() {
        const {
            globalStats: {
                emojis: { used },
            },
        } = this.profile
        const names: Array<string> = []
        const amount: Array<number> = []
        const width = 800
        const height = 800
        const canvas = new CanvasRenderService(width, height)

        used.forEach((emoji) => {
            names.push(emoji.name)
            amount.push(emoji.amount)
        })
        const config = {
            type: "doughnut",
            data: {
                labels: names,
                datasets: [
                    {
                        label: "adsao",
                        data: amount,
                    },
                ],
            },
        }
        const image = await canvas.renderToBuffer(config)
        const file = new MessageAttachment(image)
        return file
    }

    private getMostUsedEmojis(emojis: Array<_used>) {
        var result = ""

        if (!emojis.length) return "_No has usado ningún emoji_"
        emojis.sort(function(a, b) {
            return b.amount - a.amount;
        });
        for (var i = 0; i < emojis.length && i < 10; i++) {
            result += `**${emojis[i].name}** - **${emojis[i].amount}**\n`
        }
        return result
    }

    public setPage(option: _menuPages){
        this.page = option
    }

    public getEmbed(option?: _menuPages) {
        if (!option) option = this.page
        if (option === "general") {
            return [
                new MessageEmbed()
                    .setTitle(`Perfil de ${this.member.getUsername()}`)
                    .setDescription(this.member.getStatus())
                    .setColor(this.member.getUserPrimaryColor())
                    .setThumbnail(this.member.getUser().displayAvatarURL())
                    .addFields({
                        name: "`General`",
                        value: `**Miembro**: ${this.member.getMember()}\n**Tag**: ${
                            this.member.getUser().tag
                        }\n**Fecha de unión**: ${moment(this.member.getMember().joinedTimestamp).format(
                            "lll"
                        )}\n**Última vez boosteado**: ${
                            this.member.getMember().premiumSinceTimestamp
                                ? moment(this.member.getMember().premiumSince).format("lll")
                                : "_Nunca_"
                        }\n**Veces usuario de la semana**: ${this.profile.globalStats.weeklyUser} ${
                            this.clientEmojis.hero
                        }\n**Veces muteado**: ${this.profile.globalStats.mutes} ${this.clientEmojis.muted}`,
                    }),
            ]
        } else if (option === "chat") {
            return [
                new MessageEmbed()
                    .setTitle(`Perfil de ${this.member.getUsername()}`)
                    .setDescription("Algunas estadísticas relacionadas con el chat")
                    .setColor(this.member.getUserPrimaryColor())
                    .setThumbnail(this.member.getUser().displayAvatarURL())
                    .addFields({
                        name: "`Chat`",
                        value: `**Mensajes enviados**: ${this.profile.globalStats.messages}\n**Palabras escritas**: ${this.profile.globalStats.words}\n**Veces reaccionado**: ${this.profile.globalStats.reactions}\n**Veces respondido**: ${this.profile.globalStats.replies}\n**Archivos adjuntados**: ${this.profile.globalStats.attachments}\n**Comandos ejecutados**: ${this.profile.globalStats.commands}`,
                    }),
            ]
        } else if (option === "emojis") {
            return [
                new MessageEmbed()
                    .setTitle(`Perfil de ${this.member.getUsername()}`)
                    .setDescription("Estadísticas sobre los emojis que has usado")
                    .setColor(this.member.getUserPrimaryColor())
                    .setThumbnail(this.member.getUser().displayAvatarURL())
                    .addFields(
                        {
                            name: "`Emojis`",
                            value: `**Emojis enviados**: ${
                                this.profile.globalStats.emojis.custom + this.profile.globalStats.emojis.unicode
                            }\n**Emojis enviados Unicode**: ${
                                this.profile.globalStats.emojis.unicode
                            }\n**Emojis enviados personalizados**: ${this.profile.globalStats.emojis.custom}`,
                        },
                        {
                            name: "`Emojis más usados`",
                            value: `${this.getMostUsedEmojis(this.profile.globalStats.emojis.used)}`,
                        }
                    ),
            ]
        }
    }
    public getComponents(option?: _menuPages) {
        0
        if (option === "general") {
            return [
                new MessageActionRow().addComponents(
                    new MessageButton().setCustomId("general").setLabel("General").setStyle("PRIMARY").setDisabled(),
                    new MessageButton().setCustomId("chat").setLabel("Chat").setStyle("PRIMARY"),
                    new MessageButton().setCustomId("emojis").setLabel("Emojis").setStyle("PRIMARY")
                ),
            ]
        } else if (option === "chat") {
            return [
                new MessageActionRow().addComponents(
                    new MessageButton().setCustomId("general").setLabel("General").setStyle("PRIMARY"),
                    new MessageButton().setCustomId("chat").setLabel("Chat").setStyle("PRIMARY").setDisabled(),
                    new MessageButton().setCustomId("emojis").setLabel("Emojis").setStyle("PRIMARY")
                ),
            ]
        } else if (option === "emojis") {
            return [
                new MessageActionRow().addComponents(
                    new MessageButton().setCustomId("general").setLabel("General").setStyle("PRIMARY"),
                    new MessageButton().setCustomId("chat").setLabel("Chat").setStyle("PRIMARY"),
                    new MessageButton().setCustomId("emojis").setLabel("Emojis").setStyle("PRIMARY").setDisabled()
                ),
            ]
        }
    }
}

export default {
    category: "Stats",
    description: "Get the profile from a user",
    slash: true,
    testOnly: true,
    guildOnly: true,
    options: [
        {
            name: "user",
            description: "Who you want to get the profile from. You can leave this blank to get yours",
            required: false,
            type: "USER",
        },
    ],
    callback: async ({ interaction, member, guild, channel, user }) => {
        const targetMember = interaction.options?.getMember("user")
            ? (interaction.options.getMember("user") as GuildMember)
            : member
        const profile = new Profile(
            new MyMember(targetMember),
            await (
                await getUserProfile({ userID: targetMember.id, guildID: guild!.id })
            ).userProfile,
            Emojis.getClientEmojis()
        )
        const time = getMsFromString("40s")

        const message = await channel.send({
            embeds: profile.getEmbed("general"),
            components: profile.getComponents("general"),
        })
        const filter = (i: ButtonInteraction) => {
            return i.user.id === user.id && i.message.id === message.id
        }
        const menusManager = channel.createMessageComponentCollector({
            componentType: "BUTTON",
            time,
            filter,
        })

        menusManager.on("collect", async (i: ButtonInteraction) => {
            profile.setPage(i.customId as _menuPages)
            i.update({
                embeds: profile.getEmbed(i.customId as _menuPages),
                components: profile.getComponents(i.customId as _menuPages),
            })
            menusManager.resetTimer()
        })
        menusManager.on("end", async (collection) => {
            message.edit({
                embeds: profile.getEmbed(),
                components: [],
            })
        })
        return "Cargando perfil..."
    },
} as ICommand
