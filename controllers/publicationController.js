//Acciones de prueba

const pruebaPublication = (req,res)=>{
    return res.status(200).send({
        message:"Mensaje enviado por el controlador de publication : publicationController.js"
    })
}

module.exports={
    pruebaPublication
}