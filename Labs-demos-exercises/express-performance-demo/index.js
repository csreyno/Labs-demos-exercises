const http = require('http');
const express = require('express');
const morgan = require('morgan');
const es6Renderer = require('express-es6-template-engine');
const data = require('./data.json')

const app = express();
const server = http.createServer(app);
const logger = morgan('dev');

app.engine('html', es6Renderer); // register a new view engine 
app.set('views', 'templates');   // keeping view files in a directory named templates
app.set('view engine', 'html');  // default view engine (from 2 lines up)

const homeRouter = require('./routers/homeRouter')

const PORT = 3006;

app.use(logger);
app.use('/', homeRouter);

//goal is to render the data from data.json to a template
app.get('./movies', (req, res) => {
    // res.send(data);
    res.render('movieList', {
        locals: {
            movies: 'here is some text'
        }
    });
});

server.listen(PORT, () => {
    console.log(`Working! on port ${PORT}`);
});