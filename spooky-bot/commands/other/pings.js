module.exports = { 
    name: "ping",
    description: "Simple Ping", 
    rank: "free",
    async run (client, message, args) {
        setTimeout(() => message.edit(`:microphone2: | **Hi, ping is successfull**`).catch(), 1500)
    }
};