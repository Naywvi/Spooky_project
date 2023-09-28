const Discord = require("discord.js-selfbot-v13")

module.exports = { 
    name: "embed",
    description: "Embed", 
    rank: "free",
    async run (client, message, args) {
        const w = new Discord.WebEmbed({
            shorten: true,
            hidden: false
          })
              .setColor('RED')
              .setTitle(`${args.join(" ")}`);
        setTimeout(() =>  message.edit({embeds: [w] }).catch(() => (console.log("Error while sending embed"))), 2000)
    }
};