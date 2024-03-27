//Conexion base de datos
const exprees = require("express")
const cors = require("cors")
const conection = require("./database/conection");
conection();
//Crear servidor node
const app = exprees();
const puerto =3900;
//Configurar cors

app.use(cors())
//Convertir los datos del body a objetos js
app.use(exprees.json())
app.use(exprees.urlencoded({extended:true}))
//Cargar conf rutas 

const userRoutes = require("./routes/userRoutes.js")
const publicationRoutes = require("./routes/publicationRoutes.js")
const followRoutes = require("./routes/followRoutes.js")

app.use("/api/user",userRoutes)
app.use("/api",publicationRoutes)
app.use("/api",followRoutes)



//Poner el servidor a escuchar peticiones

app.listen(puerto,()=>{
    console.log("Servidor de node corriendo en el puerto " + puerto)
})