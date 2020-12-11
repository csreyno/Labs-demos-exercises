const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const es6Renderer = require('express-es6-template-engine');

const projects_db = [
    'Blackjack',
    'Hiking App',
    'Fishing Game',
    'Backend Project',
    'React Project',
    'Capstone Project'
];

app.engine('html', es6Renderer); 
app.set('views', 'templates');   
app.set('view engine', 'html'); 

app.get('/', (req, res) => {
    res.send('Chad R');
});

app.get('/projects', (req, res) => {
    res.render('projects-list', {
        locals: {
            projects: projects_db
        }
    });
});
//     res.send(`
//  <ul>   
//     <li><a href="/projects/blackjack">Blackjack</a></li>
//     <li><a href="/projects/hiking_app">Hiking App</a></li>
//     <li><a href="/projects/fishing_game">Fishing Game</a></li>
//     <li><a href="/projects/backend">Backend Project</a></li>
//     <li><a href="/projects/react">React Project</a></li>
//     <li><a href="/projects/capstone">Capstone Project</a></li>
//  </ul>   
//     `);
// });

app.get('/projects/:id', (req, res) => {
    const id = req.params.id;
    res.send(`
        <h1>Welcome to the ${id} page!</h1>
        <a href="/projects/">Back</a>
    `);
});


server.listen(5000, 'localhost', () => {
    console.log('Running on port http://localhost:5000')
});