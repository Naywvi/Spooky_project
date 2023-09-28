const fs = require('fs');
const config = require("../../config.json")

module.exports = clients => {
    clients.forEach(client => {
        fs.readdir(`./spooky-bot/events/`, (_err, files) => {
        files.forEach((file) => {
            if (!file.endsWith(".js")) return;
            const event = require(`../events/${file}`);
            let eventName = file.split(".")[0];
            client.on(eventName, event.bind(null, client));
            delete require.cache[require.resolve(`../events/${file}`)];
            });
        });
    }); 
 }