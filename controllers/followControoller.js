//Acciones de prueba

const pruebaFollow = (req,res)=>{
    return res.status(200).send({
        message:"Mensaje enviado por el controlador de follows : followController.js"
    })
}

module.exports={
    pruebaFollow
}