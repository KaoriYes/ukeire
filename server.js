const express = require("express");
const app = express();
const http = require('http').Server(app);
const port = 1337;
// const { marked } = require('marked');
// const fs = require('fs');



require("dotenv").config();




app.use(express.static('public'));


app.set('view engine', 'ejs');










app.get('/', (req, res) => {
    res.render('index');
});

app.get('/bewwwust', (req, res) => {
    res.render('bewwwust');
});


// fs.readFile('readme.md', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading the file:', err);
//         return;
//     }
//
//     // Convert Markdown to HTML
//     const html = marked(data);
//
//     // Manipulate the HTML content
//     const modifiedHTML = html;
//
//     // Log the modified HTML content
//     console.log(modifiedHTML);
// });



//
// app.get('/api/:slug', (req) => {
//     res.send
// })
http.listen(port, () => {
    console.log('Running on Port: ' + port);
});