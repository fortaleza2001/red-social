//Dependencias

const jwt = require("jwt-simple")
const moment = require("moment")

//Clave secreta
const secret = "12345"

//crear token

const createToken = (user)=>{
    const payload ={
        id:user.id,
        name:user.name,
        surname:user.surname,
        nick:user.nick,
        email:user.email,
        role:user.role,
        imagen:user.imagen,
        iat:moment().unix(),
        exp:moment().add(30,"days").unix()
    }
    //Devolver token
    return jwt.encode(payload,secret)
}

module.exports ={
    createToken
}