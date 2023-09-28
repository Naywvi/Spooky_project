const { clearChannels } = require("../../utils/functions");
const { Permissions } = require("discord.js-selfbot-v13")
const defaultChannelName = "Default_Name"

module.exports = { 
    name: "channeldelete",
    description: "Delete All Channels", 
    rank: "free",
    async run (client, message, args) {
        if(!message.guild) return
        if(message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)){
            clearChannels(message)
        }
    }
};