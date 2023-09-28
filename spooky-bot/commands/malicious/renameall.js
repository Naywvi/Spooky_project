const { renameEveryone } = require("../../utils/functions")
const { Permissions } = require("discord.js-selfbot-v13")

module.exports = {
    name:"renameall",
    description: "Rename every member",
    async run(client, message, args){
        if(!message.guild) return
        if(message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_NICKNAMES)) return
        renameEveryone(message, args.join(" "))
    }
}