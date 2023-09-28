const express = require("express")

module.exports = {
    async run(){
        var app = express();

        const PORT = 6300

        app.get('/', function (req, res) {
            res.send('Website under development / Site en développement');
        });
        
        app.post('/', function (req, res) {
            res.send('Website under development / Site en développement');
        });

        app.listen(PORT, () => {
            console.log(`Serveur démarré sur http://localhost:${PORT}`)
        })
    }
}