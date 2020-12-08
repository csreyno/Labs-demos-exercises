const http = require('http');
const express = require('express');

const app = express(); // make me a new app!
const server = http.createServer(app);

app.use( express.static( "public" ) );

app.get('/', (req, res) => {
    res.send('The Home Page');
});

app.get('/movies', (req, res) => {
    res.send(`<h1>Three Favorite Movies:</h1>
    <div>
        <ul>   
            <li><a href="/movies/Fast and The Furious 1">FF1</a></li>
            <li><a href="/movies/Fast and The Furious 2">FF2</a></li>
            <li><a href="/movies/Fast and The Furious 3 aka the masterpiece 'Tokyo Drift'">FF3</a></li>
        </ul>   
    </div>`)
});

app.get('/movies/:movieName', (req, res) => {
    const movieName = req.params.movieName;
    res.send(`
    <h1>Welcome to the Vin Diesel Shrine for ${movieName}</h1>
    <img src="/diesel1.jpg" max height = 400px/>`)
});

server.listen(3001, 'localhost', () => {
    console.log('Running on port http://localhost:3001')
});