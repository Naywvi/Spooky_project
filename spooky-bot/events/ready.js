module.exports = bot => {
    bot.user.setStatus('dnd') && console.log(`Logged in ${bot.user.tag} with rank ${bot.rank}`)
}


