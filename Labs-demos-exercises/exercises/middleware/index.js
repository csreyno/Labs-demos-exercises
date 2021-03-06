const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const HOST = '127.0.0.1';
const PORT = 3000;

const morgan = require('morgan');
const logger = morgan('tiny');
app.use(logger);

const helmet = require('helmet');
app.use(helmet());

const petNames = ['dog1', 'dog2', 'dog3', 'spot'];

app.all('*', (req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/pets', (req, res) => {
    res.render('pets', {
        locals: {
            petNames: petNames,
            path: req.path
        }
    });
});

// app.get('/pets:name', (req, res) => {
//     res.render('home');
// });

server.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`);
});