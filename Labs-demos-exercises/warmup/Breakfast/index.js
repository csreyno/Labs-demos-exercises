//exercise 1 - write a "Hello World" program using Express

const http = require('http');
const express = require('express');

const app = express(); // make me a new app!
const server = http.createServer(app);


app.get('/', (req, res) => {
    res.send('Hello World!');
});



server.listen(5000, 'localhost', () => {
    console.log('Running on port http://localhost:5000')
});


