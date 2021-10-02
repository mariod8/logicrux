import userSchema from "../schemas/user-schema"

export async function incUserSchema(
    userIdentification: Object,
    userStats: Object
) {
    await userSchema.updateOne(
        userIdentification,
        {
            $inc: userStats,
        },
        {
            upsert: true,
            setDefaultsOnInsert: false,
        }
    )
}
