module.exports = {
    name:"userinfo",
    description:"Get information on someone",
    async run(client, message, args){
        let target = message.mentions.users.first() || client.user;
        if(message.guild.members.cache.get(args[0])) target = message.guild.members.cache.get(args[0]).user
        var userInfo = 
        [
            "```\n\n",
            `User Information on ${target.username}\n\n`,
            `Created at(dd/mm/yy): \n ${target.createdAt.getDay()}/${target.createdAt.getMonth()}/${target.createdAt.getFullYear()} \n\n`,
            `Avatar URL: \n ${target.avatarURL({dynamic: true})}\n\n`,
            `Username: ${target.username} / Discriminator: ${target.discriminator}\n`,
            `ID: ${target.id}   `,
            "```",
        ]
        setTimeout(() => message.edit(userInfo.join(" ")).catch(), 2000)
    }
}