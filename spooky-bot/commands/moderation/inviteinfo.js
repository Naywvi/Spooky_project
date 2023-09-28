const { Permissions } = require("discord.js-selfbot-v13")   

module.exports = { 
    name: "inviteinfo",
    description: "Count number of members in vocal", 
    async run(client, message, args){
        if(args.length < 0) return
        invite = await client.fetchInvite(args[0]).catch((e) => console.log(e))
        console.log(invite)
    }
}