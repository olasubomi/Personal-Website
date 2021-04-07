var express = require('express');
var path = require('path');
var PORT = process.env.PORT || 5000;
var pg = require('pg');

console.log("Gets in index.js file");

var config = {
    host: 'ec2-54-225-107-174.compute-1.amazonaws.com',
    user: 'kdybyyzmkneukt',
    database: 'db1c9f93sqh3e3',
    password: '617bbd402bbebce800141115595154c915710ae84141f29ee8726f7f7c9e5a9e',
    port: 5432
};

var app =express();

// app.get('/*', function (req, res, next) {

//     if (req.url.indexOf("/images/") === 0 || req.url.indexOf("/stylesheets/") === 0) {
//       res.setHeader("Cache-Control", "public, max-age=2592000");
//       res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
//     }
//     next();
//   });

app.use(express.static(__dirname + '/public', {
    maxAge: 86400000,
    setHeaders: function(res, path) {
        res.setHeader("Expires", new Date(Date.now() + 2592000000*30).toUTCString());
        }
}))

app.use(express.static(path.join(__dirname, 'public_html'))).set('view engine', 'ejs').get('/', function (req, res) {
    return res.render('pages/index');
}).listen(PORT, function () {
    return console.log('Listening on ' + PORT);
});