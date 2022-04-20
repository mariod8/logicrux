import * as axios from "axios"
import * as cheerio from "cheerio"

async function getWeb() {
    const url = "https://clients.heavynode.com/clientarea.php"

    try {
        const response = await axios.default.get(url)
        const html = cheerio.load(response.data)
        return html("html body.footer-color.srf-whmcs section#main-body div.container div.row div.col-xs-12.main-content div.logincontainer div.row div.col-sm-12 form.login-form div.form-group input#inputEmail.form-control placeholder").text()
    } catch (e) {
        console.error(eval)
    }
}

async function main() {
    console.log(await getWeb())
}

main()