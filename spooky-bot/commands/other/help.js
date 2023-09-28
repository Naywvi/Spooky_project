const { MessageActionRow, MessageSelectMenu } = require("discord.js-selfbot-v13")

module.exports = {
    name:"help",
    description: "Help command to show you the utilities",
    async run(client, message, args){
        setTimeout(() => message.edit("**All commands are on the website**"), 2000)
    }
}