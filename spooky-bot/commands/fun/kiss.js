const { sendEmbed } = require("../../utils/functions")

kiss = ['https://cdn.weeb.sh/images/rymvn6_wW.gif','https://cdn.weeb.sh/images/H1a42auvb.gif','https://cdn.weeb.sh/images/H1Gx2aOvb.gif','https://cdn.weeb.sh/images/rJrCj6_w-.gif','https://cdn.weeb.sh/images/B13D2aOwW.gif','https://cdn.weeb.sh/images/BJLP3a_Pb.gif','https://cdn.weeb.sh/images/Hy-oQl91z.gif','https://cdn.weeb.sh/images/SJINn6OPW.gif','https://cdn.weeb.sh/images/ByiMna_vb.gif','https://cdn.weeb.sh/images/rymvn6_wW.gif','https://cdn.weeb.sh/images/BJSdQRtFZ.gif','https://cdn.weeb.sh/images/S1PCJWASf.gif','https://cdn.weeb.sh/images/SJ3dXCKtW.gif','https://cdn.weeb.sh/images/HJlWhpdw-.gif','https://cdn.weeb.sh/images/rkde2aODb.gif','https://cdn.weeb.sh/images/SybPhp_wZ.gif','https://cdn.weeb.sh/images/rkFSiEedf.gif','https://cdn.weeb.sh/images/r1cB3aOwW.gif','https://cdn.weeb.sh/images/BJv0o6uDZ.gif','https://cdn.weeb.sh/images/B13D2aOwW.gif','https://cdn.weeb.sh/images/Skv72TuPW.gif','https://cdn.weeb.sh/images/S1qZksSXG.gif','https://cdn.weeb.sh/images/Sk1k3TdPW.gif','https://cdn.weeb.sh/images/S1-KXsh0b.gif','https://cdn.weeb.sh/images/B1yv36_PZ.gif','https://cdn.weeb.sh/images/BJx2l0ttW.gif']

module.exports= {
  name: "kiss",
  description: "Kiss someone",
  async run (client, message, args) {
    
    var randomhug = kiss[Math.floor(Math.random()*hug.length)]
    user = " You"

    if(message.guild) {
      mention = message.mentions.members.first() || message.guild.members.cache.get(args[0])
      user = mention.user.tag
    }

    var title = `😘 ${message.author.username} is kissing ${user} 😘`
    sendEmbed(message, title, "DARK_GOLD", randomhug)
  }
}