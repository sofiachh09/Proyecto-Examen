const mongoose = require('mongoose');
//vamos a crear un Schema 

let Schema = mongoose.Schema;

//crear coleccion 
let pintresSchem = new Schema({
    nombre: {
        type: String,
        required: [true, 'Requerimosel nombre']
    },
    Corriente: {
        type: String,
        required: [true, 'Requerimos el estilo']
    },
    nacionalidad: {
        type: String
    },
    pintura: {
        type: String
    }
});