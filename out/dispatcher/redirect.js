
const http = require("http");
var net = require("net");
var xhr = require("xhr")
const request = require("request");

const axios = require('axios');
// const http = require("http2");

/**
 * Redirige vers la bonne route du controller
 * @param request options
 * @param response l'objet Response
 */
redirectTo = (requestOptions, response) => {
    // console.log(requestOptions)
    // // Crée une requête
    // const request = http.request(requestOptions, (res) => {
    //         // Renvoie la réponse
    //         res.on('data', data => {
    //             response.status(res.statusCode).send(data)
    //         })
    //     });

    //     // Test s'il y'a une erreur
    //     request.on('error', error => {
    //         console.error(error)
    //         response.status('500').send(error)
    //     });
        
    //     // Termine la requête
    //     request.end();
    // var url = process.env.baseURL || "/user";
    
    // console.log('url : ' + url)
    // var req = request(url, function (err, resp, body) {
    //     // check resp.statusCode
    //      console.log(resp.statusCode)
    //      resp.on('close', (data) => {
    //          response.send(resp.body);
    //          console.log(data)
    //      });
    // })

    // // Test s'il y'a une erreur
    //     req.on('error', error => {
    //         console.error(error)
    //         response.status('500').send(error)
    //     });
        
    // //     // Termine la requête
    //     req.end();

    // 'https://jsonplaceholder.typicode.com/todos/1'
axios.get('http://localhost:3000/user')
  .then(res => {
    // console.log(res.data.id);
    // console.log(res.data.title);
    console.log(res)
    // response.send(res);
  })
  .catch(err => {
    console.log(err);
  });
}


exports.redirectTo = redirectTo;
