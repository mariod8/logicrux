import * as crypto from "crypto-js"
import * as dotenv from "dotenv"

dotenv.config()
const key = process.env.CRYPTO_KEY

export function decrypt(str: string) {
    return key ? crypto.AES.decrypt(str, key).toString(crypto.enc.Utf8) : ""
}
