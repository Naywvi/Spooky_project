module.exports = { 
    name: "vc",
    description: "Count number of members in vocal", 
    async run (client, message, args) {
        if(!message.guild) return
        await setTimeout(()  => message.edit(`:microphone2: | **${message.guild.members.cache.filter(m => m.voice.channel).size}** members are in vocal in **${message.guild.name}**`).catch(() => console.log("")), 1500)

}};
