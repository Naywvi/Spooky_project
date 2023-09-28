const SpookyBot = require("./MainClass");
const Discord = require("discord.js-selfbot-v13")

const allIntents = new Discord.Intents(32767);

module.exports = class Convert{
    constructor(tokens){
        this.tempArray = []
        tokens.forEach(e => {
            this.tempArray.push(new SpookyBot(e.token, e.rank ,{allIntents}))
        });
        return this.tempArray
    }
}