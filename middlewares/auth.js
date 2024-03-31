//Importar dependencias , clave secreta
const jwt = require("jwt-simple")
const moment = require("moment")

const libjwt = require("../services/jwt")

const secret = libjwt.secret

//funcion de authentificación

exports.auth = (req,res,next) =>{

//Comprobar si me llega la cabezera de auth


// Si la cabecera de autorización no está presente
if (!req.headers.authorization) {
    return res.status(403).send({
      message: "La petición no tiene la cabecera de autenticación",
      status: "Error"
    });
  }

// Limpiar token
let token = req.headers.authorization.replace(/["']+/g, "");







//Decodificar token

try
{
    let payload = jwt.decode(token,secret)

    //Comprobar expiración del token

    if(payload.exp<= moment.unix())
    {
        return res.status(404).send({

            message:"token expirado",
            status:"Error",
            error:err
    
        })
    }

    //Añadir usuario a la req

    req.user = payload;

    next();


}

catch(err)
{
    return res.status(404).send({

        message:"token invalido",
        status:"Error",
        error:err

    })
}

//pasar datos de usuario al controlador

}



