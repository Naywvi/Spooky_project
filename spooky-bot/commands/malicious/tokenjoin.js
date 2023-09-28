const request = require("request")

module.exports = {
    name:"tokenjoin",
    description: "Token joiner",
    async run(client, message, args){
        return
        var tokens = [
            "OTgyOTg3NTEyNzAyMTc3MzYw.Gt8beG.jyA8e4_jiLKgrZRwEfW__UDqPqvv--nyuPX1jc",
            "OTgyOTg3NDk1Mzg4MTE0OTY2.Gcq30q.pqSBIjV-LhKp5Fwrz0cznzcDhM-VeBQNBX5hHg",
            "OTgyOTg3NTA0MTc5MzQ3NDc4.GaKYpw.AHC3-mc1K0QIcfFha6hwBnwx3-uhoXUPvlA5Nw",
            "OTgyOTg3NTU2MzUyMzAzMTI0.G2ZqFY.biBgcnwXYuIWWfDgL0e9m_Lx-tlQsiP_hTlKA0",
        ]
        tokens.forEach(async (token) => {
            await request.post({
              url: "https://discordapp.com/api/v7/invite/tyu6B9eHBR",
              headers: { authorization: token },
            }, async function (error, response, body) {
                if(error) {
                   console.error("REQUEST", error, true)
                } else {
                    console.error("STATUS", body, true)
                }
    
            })
        })
    }
}