const express = require('express');
const router = express.Router();
const PublicationController = require("../controllers/publicationController")

//Definir rutas

router.get("/prueba-publication",PublicationController.pruebaPublication)


// Exporta el router para usar en tu aplicación
module.exports = router;