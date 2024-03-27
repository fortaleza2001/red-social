const mongoose = require("mongoose")


const conection = async ()=>{
    try
    {
        await mongoose.connect("mongodb+srv://juancarrasquer:ZaKnSXJAJYNAUIF4@cluster0.kcbu259.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conexión exitosa a MongoDB");
    }

    catch(error)
    {
        console.log(error)
        throw new Error("No se pudo conectar a la base de datos")
    }
}

module.exports = conection;

