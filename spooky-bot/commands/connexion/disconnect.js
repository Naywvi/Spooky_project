const Discord = require("discord.js-selfbot-v13")

module.exports = { 
    name: "disconnect",
    description: "Disconnect from client", 
    rank: "free",
    async run (client, message, args) {
        setTimeout(async () =>  {
            await message.edit("Disconnected").catch()
            console.log(`${client.user.username} has disconnected`)
            client.destroy()
        }, 2000)
    }
}