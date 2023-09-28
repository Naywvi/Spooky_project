const NSFW = require("discord-nsfw");
const f = require("../../utils/functions.js")
const { WebEmbed } = require("discord.js-selfbot-v13")

const nsfw = new NSFW();

module.exports = { 
    name: "nsfw",
    description: "NSFW", 
    rank: "free",
    async run (client, message, args) {
        var img = await nsfw.pussy()
        if(!args[0]) return f.sendEmbed(message, " 🔞 NSFW 🔞", "RED", img)
        
        switch(args[0]){
            case "ass":
                img = await nsfw.ass()
                break
            case "anal":
                img = await nsfw.anal()
                break
            case "boobs":
                img = await nsfw.boobs()
                break
            case "hentai":
                img = await nsfw.hentai()
                break
            case "erokemo":
                img = await nsfw.erokemo()
                break
            case "fourk":
                img = await nsfw.fourk()
                break
            case "gonewild":
                img = await nsfw.gonewild()
                break
            case "hentaiass":
                img = await nsfw.hentaiass()
                break
            case "hentaithigh":
                img = await nsfw.hentaithigh()
                break
            case "hmidriff":
                img = await nsfw.hmidriff()
                break
            case "kitsune":
                img = await nsfw.kitsune()
                break
            case "wallpaper":
                img = await nsfw.wallpaper()
                break
            case "lewd":
                img = await nsfw.lewd()
                break
            case "nekopussy":
                img = await nsfw.nekopussy()
                break
            case "nekofeet":
                img = await nsfw.nekofeet()
                break
            case "nekotits":
                img = await nsfw.nekotits()
                break
            case "solo":
                img = await nsfw.solo()
                break
            case "pgif":
                img = await nsfw.pgif()
                break
        }

        f.sendEmbed(message, "NSFW", "RED", img)
    }
};