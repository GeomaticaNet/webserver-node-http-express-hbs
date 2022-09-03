const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;


// Motor de plantillas Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');



// Servir contenido estático
app.use(express.static('public'));

// Esto se renderiza con Handlebars
// app.get('/', (req, res) => {
//     res.render('home', {
//         nombre: 'Fernando Herrera',
//         titulo: 'Curso de Node'
//     });
// });

// Ruta 2
// app.get('/generic', (req, res) => {
//     res.render('generic', {
//         nombre: 'Fernando Herrera',
//         titulo: 'Curso de Node'
//     });
// });

// // Ruta 2
// app.get('/elements', (req, res) => {
//     res.render('elements', {
//         nombre: 'Fernando Herrera',
//         titulo: 'Curso de Node'
//     });
// });

// Ruta 3
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})