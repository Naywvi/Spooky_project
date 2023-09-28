const Discord = require("discord.js")
const config = require("../../config.json")
const fs = require("fs")

module.exports = class SecureBot extends Discord.Client {
    constructor(){
        super({intents: 32767})

        this.whitelist = 
        [
          "655023105923874842", 
          "768155735980507156",
          "990016089931014154",
          "983092904841056316",
        ]

        this.token = config.secure_bot_token
        this.prefix = config.secure_bot_prefix
        this.commands = new Discord.Collection()
        this.snipes = new Discord.Collection()
        
        this.#loadInteractions()
        this.#loadEvents("../utils/loadEvents")
        this.#loadCommands("other/")
        this.#loadCommands("moderation/")
    }

    #loadCommands(dir){
        fs.readdir(`./spooky-secure/commands/${dir}`, (err, files) => {
          if(err) console.log(err)
          if(!files) return 
          let jsfile = files.filter(f => f.split('.').pop() === 'js')       
          jsfile.forEach((f, i) => {
          let props = require(`../commands/${dir}${f}`);
          this.commands.set(props.name, props);
          })
        })
      }

      #loadEvents(dir){
        require(dir)(this);
      }

      #loadInteractions(){
        this.on("interactionCreate", async interaction => {
          if (interaction.isButton()) {
            const buttonID = interaction.customId;
            if (buttonID === 'ButtonRoles') { 
                
                const memberRoleName = "☠️ Spooky Member 🦴"
                const member = interaction.member; 
                let role = member.guild.roles.cache.find((role) => role.name === memberRoleName);
                if (member.roles.cache.has(role)) { 
                    member.roles.remove(role).catch(); 
                    return interaction.reply({
                        content: 'Spooky Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(role).catch(); 
                    return interaction.reply({
                        content: 'Spooky Successfully added role !',
                        ephemeral: true
                    })
                }
            } 
          }
        })
      }

      run(){
        this.login(this.token).catch((e) => console.log(e))
      }
}
