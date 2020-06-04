const express = require('express');
//vamos a routear a los pintores 
let pintor = require('../controllers/pintorescontroller.js');

//creamos nuestras rutas 
let router = express.Router();

router.get('/', pintor.list);

module.express = router;