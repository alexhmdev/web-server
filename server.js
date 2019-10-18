const express = require('express');
const app = express();
const hbs = require('hbs');

//heroku second commit
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
 
app.set('view engine', 'hbs');

app.get('/', (req,res) =>{
    res.render('home',{
        nombre: 'Alex'
    });
});
app.get('/about', (req,res) =>{
    res.render('about');
});
// app.get('/', function (req, res) {
// //   res.send('<h1>Hello world</h1>')
// let salida = {
//     nombre: "AlexHM",
//     edad: 18,
//     url: req.url
// };

// res.send(salida);
// });

// app.get('/hola', (req, res) =>{
//     res.send('Estas en hola');
// });
 
app.listen(3000);