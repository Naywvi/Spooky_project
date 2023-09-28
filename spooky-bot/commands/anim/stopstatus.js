module.exports = {
    name: "stopstatus",
    description:"Change Status",
    async run (client, message, args){
       client.status = false
    }
}