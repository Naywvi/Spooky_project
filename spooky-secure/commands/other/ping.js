module.exports = { 
    name: "ping",
    description: "Simple Ping", 
    rank: "free",
    async run (client, message, args) {
        message.channel.send("Successfull | Member whitelisted: ")
    }
};