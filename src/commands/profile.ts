import { ButtonInteraction, GuildMember, MessageActionRow, MessageButton, MessageEmbed } from "discord.js"
import * as moment from "moment"
import { ICommand } from "wokcommands"
import { Emojis } from "../emojis"
import { MyMember } from "../member"
import { ProfileMenuPages, UserProfile, UserType } from "../types"
import { getMsFromString, getUserByString } from "../utils/getters"
import { getUserProfile } from "../utils/mongo"
import { intToString } from "../utils/string"

class Profile {
    private page: ProfileMenuPages
    private member: MyMember
    private profile: UserProfile

    constructor(member: MyMember, profile: UserProfile) {
        this.page = "GENERAL"
        this.member = member
        this.profile = profile
    }

    private getMostUsedEmojis(emojis: UserProfile["globalStats"]["emojis"]["used"]) {
        var result = ""

        if (!emojis.length) return "_No has usado ningún emoji_"
        emojis.sort(function (a, b) {
            return b.amount - a.amount
        })
        for (var i = 0; i < emojis.length && i < 10; i++) {
            result += `${i + 1}. ${emojis[i].name} **${emojis[i].amount}**\n`
        }
        return result
    }

    public setPage(option: ProfileMenuPages) {
        this.page = option
    }

    public async getEmbed(option?: ProfileMenuPages) {
        if (!option) option = this.page
        if (option === "GENERAL") {
            return [
                new MessageEmbed()
                    .setTitle(`Perfil de ${this.member.getUsername()}`)
                    .setDescription(this.member.getStatus())
                    .setColor(await this.member.getUserPrimaryColor())
                    .setThumbnail(this.member.getUser().displayAvatarURL({ dynamic: true }))
                    .addFields({
                        name: "`General`",
                        value: `**Miembro**: ${this.member.getMember()}\n**Tag**: ${
                            this.member.getUser().tag
                        }\n**Fecha de unión**: ${moment
                            .default(this.member.getMember().joinedTimestamp)
                            .format("lll")}\n**Última vez boosteado**: ${
                            this.member.getMember().premiumSinceTimestamp
                                ? moment.default(this.member.getMember().premiumSince).format("lll")
                                : "_Nunca_"
                        }`,
                    }),
            ]
        } else if (option === "CHAT") {
            return [
                new MessageEmbed()
                    .setTitle(`Perfil de ${this.member.getUsername()}`)
                    .setDescription("Datos del chat")
                    .setColor(await this.member.getUserPrimaryColor())
                    .setThumbnail(this.member.getUser().displayAvatarURL({ dynamic: true }))
                    .addFields({
                        name: "`Chat`",
                        value: `**Nivel**: ${this.profile.globalStats.level}\n**XP**: ${intToString(
                            this.profile.globalStats.totalXp
                        )}\n**Mensajes enviados**: ${this.profile.globalStats.messages}\n**Palabras escritas**: ${
                            this.profile.globalStats.words
                        }\n**Ratio palabras/mensaje**: ${
                            this.profile.globalStats.messages === 0
                                ? 0
                                : Math.round(
                                      (this.profile.globalStats.words / this.profile.globalStats.messages) * 100
                                  ) / 100
                        }\n**Archivos adjuntados**: ${this.profile.globalStats.attachments}`,
                    }),
            ]
        } else if (option === "EMOJIS") {
            return [
                new MessageEmbed()
                    .setTitle(`Perfil de ${this.member.getUsername()}`)
                    .setDescription("Estadísticas sobre los emojis que has usado")
                    .setColor(await this.member.getUserPrimaryColor())
                    .setThumbnail(this.member.getUser().displayAvatarURL({ dynamic: true }))
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
    public getComponents(option?: ProfileMenuPages) {
        if (option === "GENERAL") {
            return [
                new MessageActionRow().addComponents(
                    new MessageButton().setCustomId("general").setLabel("General").setStyle("PRIMARY").setDisabled(),
                    new MessageButton().setCustomId("chat").setLabel("Chat").setStyle("PRIMARY"),
                    new MessageButton().setCustomId("emojis").setLabel("Emojis").setStyle("PRIMARY")
                ),
            ]
        } else if (option === "CHAT") {
            return [
                new MessageActionRow().addComponents(
                    new MessageButton().setCustomId("general").setLabel("General").setStyle("PRIMARY"),
                    new MessageButton().setCustomId("chat").setLabel("Chat").setStyle("PRIMARY").setDisabled(),
                    new MessageButton().setCustomId("emojis").setLabel("Emojis").setStyle("PRIMARY")
                ),
            ]
        } else if (option === "EMOJIS") {
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
    guildOnly: true,
    testOnly: true,
    options: [
        {
            name: "user",
            description: "Who you want to get the profile from. You can leave this blank to get yours",
            required: false,
            type: "STRING",
        },
    ],
    callback: async ({ interaction, member, guild, channel, user }) => {
        await interaction.deferReply()

        try {
            const targetMember = interaction.options?.getString("user")
                ? (getUserByString(interaction.options.getString("user") as string, guild!, "MEMBER") as GuildMember)
                : member
            const profile = new Profile(
                new MyMember(targetMember),
                await (
                    await getUserProfile({ userID: targetMember.id, guildID: guild!.id })
                ).userProfile
            )
            const time = getMsFromString("40s")

            await interaction.editReply({
                embeds: await profile.getEmbed("GENERAL"),
                components: profile.getComponents("GENERAL"),
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
                profile.setPage(i.customId as ProfileMenuPages)
                i.update({
                    embeds: await profile.getEmbed(i.customId as ProfileMenuPages),
                    components: profile.getComponents(i.customId as ProfileMenuPages),
                })
                menusManager.resetTimer()
            })
            menusManager.on("end", async (collection) => {
                interaction.editReply({
                    embeds: await profile.getEmbed(),
                    components: [],
                })
            })
        } catch (e) {
            return e
        }
    },
} as ICommand
