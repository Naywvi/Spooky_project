const Discord = require("discord.js")

module.exports = { 
    name: "createreactionrole",
    description: "Simple Ping", 
    rank: "free",
    async run (client, message, args) {
        const row = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                .setCustomId('ButtonRoles')
                .setLabel('Verify')
                .setStyle('SUCCESS')
                .setEmoji("📣"),
            );
            message.channel.send({
                content: 'Please press the button to verify.',
                components: [row]
            })
    }
};