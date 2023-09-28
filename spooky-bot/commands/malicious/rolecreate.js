const { makeRoles } = require("../../utils/functions");
const { Permissions } = require("discord.js-selfbot-v13")
const defaultRoleName = "Default Name"

const default_max = 25
const max_possible = 25

module.exports = { 
    name: "rolecreate",
    description: "Create Role", 
    rank: "free",
    async run (client, message, args) {
        if(!message.guild) return
        if(message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_ROLES)){
            switch (args.length) {
                case 0:
                    for(let index = 0; index < default_max; index++) makeRoles(message, defaultRoleName)
                    break;
                
                case 1:
                    var num = args[0]
                    if(num > max_possible) num = max_possible
                    if(!isNaN(num)){
                        if(num > 0){
                            for(let index = 0; index < num; index++) makeRoles(message, defaultRoleName)
                        } 
                    } else {
                        for(let index = 0; index < default_max; index++) makeRoles(message, args.join(" "))
                    }
                    break;

                default:
                    var num = args[0]
                    console.log(args)
                    if(num > max_possible) num = max_possible
                    if(!isNaN(num)){
                        if(num > 0){
                            console.log(args)
                            args.shift()
                            console.log(args)
                            for(let index = 0; index < num; index++) makeRoles(message, args.join(" "))
                        }
                    } else {
                        for(let index = 0; index < default_max; index++) makeRoles(message, args.join(" "))
                    }
                    break;
            }
        }
    }
};