module.exports = {
    name:"serverowner",
    description:"Get information on the owner of the server",
    async run(client, message, args){
        if(!message.guild) return
        let target = await message.guild.fetchOwner({force: true})
        var userInfo = 
        [
            "```\n\n",
            `User Information on ${target.user.username}\n\n`,
            `Created at(dd/mm/yy): \n ${target.user.createdAt.getDay()}/${target.user.createdAt.getMonth()}/${target.user.createdAt.getFullYear()} \n\n`,
            `Avatar URL: \n ${target.avatarURL({dynamic: true})}\n\n`,
            `Username: ${target.user.username} / Discriminator: ${target.user.discriminator}\n`,
            `ID: ${target.user.id}   `,
            "```",
        ]
        setTimeout(() => message.edit(userInfo.join(" ")).catch(), 2000)
    }
}