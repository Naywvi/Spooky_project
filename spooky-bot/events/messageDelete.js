module.exports = async (client, message) => {
  if(message.author == null) return;
  if(client.user.tag == message.author.tag) return;
    client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    member: message.member,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })
}