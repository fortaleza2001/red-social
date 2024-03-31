const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController")
const check = require("../middlewares/auth")

//Definir rutas

router.post("/register",UserController.register)

router.post("/login",UserController.login)

router.get("/prueba",check.auth,UserController.prueba)


// Exporta el router para usar en tu aplicación
module.exports = router;