const express = require('express');
const router = express.Router();
const FollowController = require("../controllers/followControoller")

//Definir rutas

router.get("/prueba-follow",FollowController.pruebaFollow)

// Exporta el router para usar en tu aplicación
module.exports = router;