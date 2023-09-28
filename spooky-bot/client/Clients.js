const Convert = require("./Conversion.js")

module.exports = class SpookyBotClients {
    constructor(tokens){
        this.bsbc = new Convert(tokens)
        require('../utils/loadEvents')(this.bsbc);
    }

    run(){
        this.bsbc.forEach(e => {
            e.connect()
        });
    }
}