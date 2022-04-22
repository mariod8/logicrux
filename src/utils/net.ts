import * as axios from "axios"
import * as cheerio from "cheerio"
import * as https from "https"

export async function downloadToBuffer(url: string) {
    return new Promise((resolve) => {
        https
            .get(url, (response) => {
                const hotData: any = []

                return response
                    .on("data", (chunk) => {
                        hotData.push(chunk)
                    })
                    .on("end", async () => resolve(Buffer.concat(hotData)))
            })
            .on("error", (e) => {
                console.log(e)
            })
    }) as Promise<Buffer>
}

export async function getHtml(url: string) {
    try {
        const response = await axios.default.get(url)
        const html = cheerio.load(response.data)
        return html
    } catch (e) {
        console.error(e)
    }
}
