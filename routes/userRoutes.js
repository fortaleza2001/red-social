const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController")

//Definir rutas

router.post("/register",UserController.register)

router.post("/login",UserController.login)


// Exporta el router para usar en tu aplicación
module.exports = router;