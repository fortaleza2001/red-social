const User = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const jwtService =require("../services/jwt.js")

const register = async (req, res) => {
    try {
        let params = req.body;

        if (!params.name || !params.email || !params.nick || !params.password) {
            return res.status(400).json({
                status: "error",
                message: "Faltan parametros. Los parametros obligatorios son: {name, email, nick, password}"
            });
        }

        const users = await User.find({
            $or: [
                { email: params.email.toLowerCase() },
                { nick: params.nick.toLowerCase() }
            ]
        });

        if (users && users.length >= 1) {
            return res.status(400).json({
                status: "error",
                message: `El usuario ${params.name} ya existe`
            });
        }

        const hashedPassword = await bcrypt.hash(params.password, 10);
        params.password = hashedPassword;

        const user_to_save = new User(params);
        await user_to_save.save();

        return res.status(200).json({
            status: "success",
            message: "Usuario registrado correctamente",
            user: user_to_save
        });
    } 
    catch (error) 
    {
        console.error(error);
        return res.status(500).json({
            status: "error",
            message: "Error interno del servidor"
        });
    }
};


const login = async(req,res)=>{

    //Recoger parametros
    let params = req.body;
    //Buscar en la base de datos si exixten los parametros
    if ( !params.email || !params.nick) {
        return res.status(400).json({
            status: "error",
            message: "Faltan parametros. Los parametros obligatorios son: {email, nick}"
        });
    }

    const usuario = await User.findOne({email:params.email}) //Miramos si coincide el email trallendo el user
    if (!usuario)//no coincide el email
    {
        return res.status(400).json({
            status: "error",
            message: "El email no exixte",
            
        });
    }

    //Si llegamos aqui ya tenemos el user
    //Comprobar su contraseña
    const pwd= await bcrypt.compare(params.password,usuario.password) 

    if(!pwd)//Contraseña incorrecta
    {
        return res.status(400).json({
            status: "error",
            message: "La contraseña no existe",
            
        });
    }



    // Devolver Token

    const token =  jwtService.createToken(usuario);

    // Devolver Datos de usuario

    return res.status(200).json({
        status: "succes",
        message: "Usuario logueado",
        user:{
            name:usuario.name,
            email:usuario.email,
            nick:usuario.nick,
            id_:usuario.id_


        },
        token:token

    });
}
module.exports = {
    register,
    login
};
