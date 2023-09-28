// DEPENDENCIES

const SpookyBotClients = require('./spooky-bot/client/Clients');
const SpookyBotSecure = require("./spooky-secure/client/client.js")
const Website = require("./spooky-web/Web.js")

// WEB PART

Website.run()

// BOT PART

const tokens = [
    {
        token: "XXXXXXX",
        rank: "premium",
    },
    {
        token: "XXXXXXX",
        rank: "free",
    },
    {
        token: "XXXXXXX",
        rank: "vip",
    },
]



const SpookyClients = new SpookyBotClients(tokens)
const SBS = new SpookyBotSecure()

SpookyClients.run()
SBS.run()
