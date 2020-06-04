let mongoose = require('mongoose');
//vamos a unirlo al modelo
let Pintores = require('../models/pintores');

let pintorescontroller = {};

/*LISTAR -> FIND()*/
pintorescontroller.list = (req, res) => {
    Pintores.find({})
        .limit(20)
        .skip(0)
        .exec((err, pintor) => {
            if (err) {
                console.log('ERROR: ', err)
                res.render('../views/index', {
                    Pintores: pintor,
                    titulo: "Listado de Pintores",
                    year: new date().getDate()
                })
            }
        })
};

module.exports = pintorescontroller;