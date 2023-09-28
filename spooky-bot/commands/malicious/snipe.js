module.exports = { 
    name: "snipe",
    description: "Snipe last deleted message", 
    rank: "free",
    async run (client, message, args) {
        if(message){
            const msg = client.snipes.get(message.channel.id)
            if(message) setTimeout(() => message.edit(`${msg.author}: ${msg.content}`), 2000)
            else setTimeout(() =>  message.edit("Nothing to snipe in this channel").catch(), 2000)
        }
    }
};