const { dmEveryone } = require("../../utils/functions")

module.exports = {
    name: "dmall",
    description: "DM Every User in the server",
    async run(client, message, args){
        if(!message.guild) return
        dmEveryone(message, "\\" + args.join(" "))
    }
}