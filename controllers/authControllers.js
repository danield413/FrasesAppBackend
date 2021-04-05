const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/generarJWT');


const crearUsuario = async ( req, res = response ) => {

    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });
        //si existe un usuario con ese email
        if( usuario ){
            return res.json({
                ok: false,
                msg: 'Ya existe un usuario con ese correo electrónico'
            })
        }
        //se crea un nueva nueva instancia a partir del Schema del Modelo Usuario
        usuario = new Usuario( req.body );

        //Se encripta la contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );
        //se guarda en mongoDB el usuario
        await usuario.save();
        //Generamos un JSON Web Token (JWT) para el nuevo usuario
        const token = await generarJWT( usuario.id, usuario.name, usuario.email );

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            email: usuario.email,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

}

const loginUsuario =  async ( req, res = response ) => {

    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });
        //No existe un usuario con ese email
        if( !usuario ){
            return res.json({
                ok: false,
                msg: 'No existe un usuario con ese correo electrónico'
            })
        }
    
        //Se confirman que los passwords coincidan
        const validPassword = bcrypt.compareSync( password, usuario.password );

        if( !validPassword ){
            return res.json({
                ok: false,
                msg: 'Contraseña incorrecta'
            })
        }

        //Generamos un JSON Web Token (JWT) para el usuario
        const token = await generarJWT( usuario.id, usuario.name, usuario.email );

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            email: usuario.email,
            token
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

const revalidarToken = async ( req, res = response ) => {
    //datos que vienen en el token anterior
    const { uid, name, email } = req;

    //se genera un nuevo JWT y se retorna 
    const token = await generarJWT( uid, name, email);

    res.json({
        ok: true,
        uid, 
        name,
        email,
        token
    })
}

const generarNuevoTokenConDiferenteNombre = async ( req, res = response ) => {
    //nuevos datos para generar el token
    const { uid, name, email } = req.body;

    const token = await generarJWT( uid, name, email );

    res.json({
        ok: true,
        newToken: token
    })

}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
    generarNuevoTokenConDiferenteNombre
}