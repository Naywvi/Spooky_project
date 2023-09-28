const { sendEmbed } = require("../../utils/functions")

fight = ['https://cdn.weeb.sh/images/HkJ6-e91z.gif','https://cdn.weeb.sh/images/Hy7KZUmDb.gif','https://cdn.weeb.sh/images/SkFub87DW.gif','https://cdn.weeb.sh/images/HJKiX1tPW.gif','https://cdn.weeb.sh/images/HyV5mJtDb.gif','https://cdn.weeb.sh/images/S1-RQVFjZ.gif','https://cdn.weeb.sh/images/ryqfNEtj-.gif','https://cdn.weeb.sh/images/rkpAXa5bG.gif']

module.exports= {
  name: "fight",
  description: "Kiss someone",
  async run (client, message, args) {
    
    var randomhug = fight[Math.floor(Math.random()*hug.length)]
    user = " You"
    
    if(message.guild) {
      mention = message.mentions.members.first() || message.guild.members.cache.get(args[0])
      user = mention.user.tag
    }

    var title = `😘 ${message.author.username} is fighting ${user} 😘`
    sendEmbed(message, title, "DARK_GOLD", randomhug)
  }
}