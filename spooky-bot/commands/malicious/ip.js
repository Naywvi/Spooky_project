const Discord = require("discord.js-selfbot-v13")
const axios = require("axios")

module.exports = { 
    name: "ip",
    description: "Info on IP", 
    rank: "free",
    async run (client, message, args) {
        var str_content = args.join()
        axios.get(`https://ipapi.co/${str_content}/json`)
        .then((res) => {
            var data = res['data']
            if(data['error'] == true) setTimeout(() =>  message.edit(`${data['reason']}`).catch(() => console.log("Error")), 2000)
            else setTimeout(() =>  message.edit(`\`\`\`Main Info: \n\nIP: ${data['ip']}\nVersion: ${data['version']} \nCountry/Region/City: ${data['country_name']}/${data['region']}/${data['city']} \nPostal: ${data['postal']} \nLong/Lat: ${data['longitude']}/${data['latitude']} \nInternet Service Provider: ${data['org']} \nASN: ${data['asn']} \n\nOther: \n\nCurrency/Name: ${data['currency']}/${data['currency_name']} \nCountry Population: ${data['country_population']} \nCapital: ${data['country_capital']} \nCountry Calling Code: ${data['country_calling_code']}\`\`\` `).catch(() => console.log("Error")), 2000)
        })
        .catch((err) => {
            console.log(err)
        })
    }
};