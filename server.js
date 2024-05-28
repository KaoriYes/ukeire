const express = require("express");
const app = express();
const http = require('http').Server(app);
const port = 1337;

require("dotenv").config();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});


let blog = '';
app.get('/bewwwust/nerds', (req, res) => {
    const blog = 'weeklynerds';
    res.render('bewwwust', { blog });
});
app.get('/bewwwust/ethiek', (req, res) => {
    const blog = 'dataEthiek';
    res.render('bewwwust', { blog });
});

app.get('/bewwwust/filosofie', (req, res) => {
    res.sendFile(__dirname + '/public/uploads/pdf/Datagebruik.pdf');

});
app.get('/bewwwust', (req, res) => {
    res.render('bewwwust', { blog });
});


http.listen(port, () => {
    console.log('Running on Port: ' + port);
});
