const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const pg = require('pg');

console.log("Gets in index.js file");

const config = {
    host: 'ec2-54-225-107-174.compute-1.amazonaws.com',
    user: 'kdybyyzmkneukt',
    database: 'db1c9f93sqh3e3',
    password: '617bbd402bbebce800141115595154c915710ae84141f29ee8726f7f7c9e5a9e',
    port: 5432
};


express()
  .use(express.static(path.join(__dirname, 'public_html')))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/', (req, res) => console.log('Hello World!'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
