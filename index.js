//Importamos los paquetes que requerimos
const express = require('express');
const hbs = require('hbs');

//creamos la aplicacion
const app = express();

//Definimos el motor de plantillas
//No de vamos a emplear MVC (Vista vamos a utiisar HBS)
app.set('view engine', 'hbs');

//Vamos a generar los partials
hbs.registerPartials(__dirname + '/views/partials/');

//Generamos el sitio estatico
app.use(express.static(__dirname + '/public'));

//configurar mis rutas
app.get('/', (req, res) => {
    res.render('index', {
        autor: 'Sofia Chacon Holguin - 4E',
        year: new Date().getFullYear(),
        title: 'Inicio'
    });
});

app.get('/picasso', (req, res) => {
    res.render('picasso', {
        autor: 'Sofia Chacon Holguin - 4E',
        year: new Date().getFullYear(),
        title: 'Pablo Picasso'
    });
});

app.get('/edvard', (req, res) => {
    res.render('edvard', {
        autor: 'Sofia Chacon Holguin - 4E',
        year: new Date().getFullYear(),
        title: 'Edvard Munch'
    });
});

app.get('/leo', (req, res) => {
    res.render('leonardo', {
        autor: 'Sofia Chacon Holguin - 4E',
        year: new Date().getFullYear(),
        title: 'Leonardo da Vinci',
        algo: "Leonardo da Vinci"
    });
});
app.get('/vin', (req, res) => {
    res.render('vincent', {
        autor: 'Sofia Chacon Holguin - 4E',
        year: new Date().getFullYear(),
        title: 'Vincent Van Goghx',
        algo: "Vincent Van Goghx"
    });
});
app.get('/acercademi', (req, res) => {
    res.render('acercademi', {
        autor: 'Sofia Chacon Holguin - 4E',
        year: new Date().getFullYear(),
        title: 'Acerca De Mi',
        algo: "Acerca De Mi"
    });
});

//Arrancamos el servisdor web
app.listen(8000, () => {
    console.log('Escuchando el puerto 8000');
});
console.log('jala2')