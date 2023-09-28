const { clearRoles } = require("../../utils/functions");
const { Permissions } = require("discord.js-selfbot-v13")

module.exports = { 
    name: "roledelete",
    description: "Delete All Role", 
    rank: "free",
    async run (client, message, args) {
        if(!message.guild) return
        if(message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_ROLES)){
            clearRoles(message)
        }
    }
};