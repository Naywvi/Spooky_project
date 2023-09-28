module.exports = {
    name: "status",
    description:"Change Status",
    async run (client, message, args){
        if(args.join(" ").length > 80) return message.edit("Tout much characters").catch()
            var str = args.join(" ")
            var newArr = []
            var tempStr = ""

            for(let i = 0; i < str.split(" ").length; i++){
                if(i > 0) tempStr += str.split(" ")[i - 1] + " "
                newArr.push(tempStr + str.split(" ")[i])
            }
            client.status = true
            client.loopChangeStatus(newArr)    
    }
}