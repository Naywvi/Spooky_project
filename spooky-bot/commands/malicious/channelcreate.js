const { makeChannel } = require("../../utils/functions");
const { Permissions } = require("discord.js-selfbot-v13")
const defaultChannelName = "Default_Name"

const default_max = 25
const max_possible = 25

module.exports = { 
    name: "channelcreate",
    description: "Create Channels", 
    rank: "free",
    async run (client, message, args) {
        if(!message.guild) return
        if(message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)){
            switch (args.length) {
                case 0:
                    for(let index = 0; index < default_max; index++) makeChannel(message, defaultChannelName)
                    break;
                
                case 1:
                    var num = args[0]
                    if(num > max_possible) num = max_possible
                    if(!isNaN(num)){
                        if(num > 0){
                            for(let index = 0; index < num; index++) makeChannel(message, defaultChannelName)
                        } 
                    } else {
                        for(let index = 0; index < default_max; index++) makeChannel(message, args.join(" "))
                    }
                    break;

                default:
                    var num = args[0]
                    if(num > max_possible) num = max_possible
                    if(!isNaN(num)){
                        if(num > 0){
                            args.shift()
                            for(let index = 0; index < num; index++) makeChannel(message, args.join(" "))
                        }
                    } else {
                        for(let index = 0; index < default_max; index++) makeChannel(message, args.join(" "))
                    }
                    break;
            }
        }
    }
};