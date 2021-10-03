import moment from "moment"
import momentTimezone from "moment-timezone"

export default () => {
    // Set Spain/Madrid timezone and language
    momentTimezone.tz("Spain/Madrid").format()
    moment.locale("es")
}
