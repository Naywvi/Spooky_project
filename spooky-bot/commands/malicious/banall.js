const { Permissions } = require("discord.js-selfbot-v13")
const f  = require("../../utils/functions.js")

module.exports = {
    name: "banall",
    description: "Ban everyone",
    rank: "premium",
    async run(client, message, args){
        if(!message.guild) return
        if (message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)){
            f.massBan(message, "RIP - Server Nuked")
        }
    }
}