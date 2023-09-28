module.exports = async (bot, message) => {
    if(bot.user.id != message.author.id) return;
    if(message.channel.type === 'dm') return;
    if (!message.content.startsWith(bot.prefix)) return;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    if(message.content.startsWith(bot.prefix)){
        if (!command) command = bot.commands.get(bot.aliases.get(cmd));
        let args = messageArray.slice(1);
        let commandFile = bot.commands.get(command.slice(bot.prefix.length));
        if(commandFile) commandFile.run(bot, message, args);
    }
}