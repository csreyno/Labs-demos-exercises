const http = require('http');
const express = require('express');

const PORT = 3000;
const HOST = 'localhost';

const app = express();
const server = http.createServer(app);

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.get('/', (req, res) => {
    console.log('hey');
    // res.send('Helloooooo!');
    res.render('home');
    });

app.get('/:word', (req, res) => {
    console.log('hey');
    const word = req.params.word;
    // res.render('home');
    res.render('greet', {
        locals: {
            oakley: word
        }
    });
});

server.listen(PORT, HOST, () => {
    console.log(`running on http://${HOST}:${PORT}`)
})