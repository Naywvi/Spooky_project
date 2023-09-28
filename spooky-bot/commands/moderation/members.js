module.exports = {
    name: "members",
    description: "Count the members in the server",
    async run(client, message, args){
        if(!message.guild) return
        setTimeout(() => message.edit(`There are ${message.guild.memberCount} members with ${message.guild.members.cache.filter(m=>m.user.bot).size} bots`).catch(() => console.log("Error")), 2000)
    }
}