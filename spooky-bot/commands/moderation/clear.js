const { Permissions } = require("discord.js-selfbot-v13")   

module.exports = { 
    name: "clear",
    description: "Count number of members in vocal", 
    async run(client, message, args){   
    if(!message.guild) return;
    if (!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return
    // A FAIRE
    }
}