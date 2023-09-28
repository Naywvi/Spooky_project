const { massUnban } = require("../../utils/functions");
const { Permissions } = require("discord.js-selfbot-v13")

module.exports = { 
    name: "unbanall",
    description: "Unban everyone", 
    rank: "free",
    async run (client, message, args) {
        if(!message.guild) return
        if(message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)){
            massUnban(message);
        }
    }
};