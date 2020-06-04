//Importamos los paquetes que requerimos
const express = require('express');
const hbs = require('hbs');
const mongoose = require(mongoose);
//creamos una constante para el valor del puereto
const Puerto = process.env.PORT || 3000;

//emplear las rutas
let pintoresRouter = require('./routes/pintor')
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials( _dirname + '/views/partials');
app.use(experess.static(_dirname + '/public'));

app.use('/', pintoresRouter);

mongoose.promise = global.promise;
const cadena = 'mongodb+srv://examen3:toledo@chaconsofia-3ibb5.azure.mongodb.net/Examentres?retryWrites=true&w=majority';
mongoose.content(cadena,{ useNewUrsParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('conexion establecida con mongo ');

    })
    .catch(err => console.log(err));


app.listen(port, () => {
    console.log('escuchando el puerto 3000');
});

