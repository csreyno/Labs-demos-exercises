const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const PORT = 4001;
const es6Renderer = require('express-es6-template-engine');

app.engine('html', es6Renderer); // register a new view engine 
app.set('views', 'templates');   // where to find the template files
app.set('view engine', 'html');  // default view engine (one on line 10)

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/lift-off', (req, res) => {
    res.render('anchor');
});

server.listen(PORT, 'localhost', () => {
    console.log('Working! app 1');
});