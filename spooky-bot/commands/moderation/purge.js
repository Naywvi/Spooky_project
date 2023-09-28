const { Permissions } = require("discord.js-selfbot-v13")   

module.exports = { 
    name: "purge",
    description: "Count number of members in vocal", 
    async run(client, message, args){   
    if(!message.guild) return;
    if (!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return setTimeout(() => message.delete().catch(), 1000)
        await message.channel.clone().catch()
        await message.channel.delete().catch()
    }
}