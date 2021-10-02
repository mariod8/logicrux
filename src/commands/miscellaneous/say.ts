import { ICommand } from "wokcommands"
import { cleanSpam } from "../../util/string"

export default {
  category: "Miscellaneous",
  description: "Echo command",
  minArgs: 1,
  slash: true,
  testOnly: true,
  expectedArgs: "<text>",
  options: [
    {
      name: "text",
      description: "Echo text",
      required: true,
      type: "STRING",
    },
  ],
  callback: ({ text }) => {
    return cleanSpam(text)
  },
} as ICommand
