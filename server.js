const express = require('express');
const hbs = require('hbs');
const app = express();

/////////////
// Middleware

app.use(express.static(__dirname + '/public'));

// Express HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// HBS helpers
require('./hbs/helpers');

/////////////
// Routing

app.get('/', (req, res) => {
    res.render('index', {
        text1: 'Hello world with HandleBars!'
    });
});

app.get('/page', (req, res) => {
    res.render('page', {
        text1: 'Demo page with HandleBars!'
    });
});

app.get('/api1', (req, res) => {
    let data = {
        id: '1234567890qwerty=',
        value: 1234.56
    };

    res.send(data);
});

app.get('/api2', (req, res) => {
    let data = {
        list: [
            { value: 1 },
            { value: 2 }
        ]
    };

    res.send(data);
});

///////////////
// Server start

app.listen(8000, () => {
    console.log('Listen on port 8000');
});
