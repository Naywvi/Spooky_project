const { sendEmbed } = require("../../utils/functions")

hug = ['https://cdn.weeb.sh/images/rk6PsvOUM.gif','https://cdn.weeb.sh/images/S1qhfy2cz.gif','https://cdn.weeb.sh/images/Hyec_OmDW.gif','https://cdn.weeb.sh/images/BkHA_O7v-.gif','https://cdn.weeb.sh/images/HkQs_dXPZ.gif','https://cdn.weeb.sh/images/HytoudXwW.gif','https://cdn.weeb.sh/images/BysjuO7D-.gif']

module.exports= {
  name: "hug",
  description: "Kiss someone",
  async run (client, message, args) {
    
    var randomhug = hug[Math.floor(Math.random()*hug.length)]
    user = " You"
    
    if(message.guild) {
      mention = message.mentions.members.first()|| message.guild.members.cache.get(args[0])
      user = mention.user.tag
    }

    var title = `😘 ${message.author.username} is hugging ${user} 😘`
    sendEmbed(message, title, "DARK_GOLD", randomhug)
  }
}