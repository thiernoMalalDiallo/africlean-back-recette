/**
 * Ce fichier implemente le dispatcher qui, en fonction de l'url courrante 
 * va requêter sur le bon controller du back.
 * REMARQUE: Ce fichier est a maintenir régulièrement. En effet, dés que une nouvelle url est 
 * rajouter côté back, il faut renseigner cette dernière ici.
 */


 // Importations
redirect = require("./redirect.js");

// variables global
var base_url = 'http://localhost';

// REMARQUE: Par défaut, hostname = localhost
var options = {
    hostname: base_url,
    port: 3001,
    path: '',
    method: ''
  }


dispatcher = (app) => {

    // Routes concernant le User controller
    userController(app);

}

/**
 * Redirige vers le UserController
 * @param {*} app application
 */
function userController(app) {

    // GET
    app.get('/toto', (req, res) => {
        options.method = 'GET';
        options.path = '/user';
        redirect.redirectTo('http://127.0.0.1:3001/user', res);
    });
}

exports.dispatcher = dispatcher;