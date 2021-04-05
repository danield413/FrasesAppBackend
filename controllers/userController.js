const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const Frase = require('../models/Frase');

const obtenerInfoFrasesUsuario = async ( req, res = response ) => {

    //se toma el id del usuario por parámetro
    const uid = req.params.id;

    //Se buscan todas las frases del usuario + su información completa
    const frases = await Frase.find({ user: uid })
                                .populate('user', ['name', 'email'])
    
    res.json({
        ok: true,
        frases: frases
    })

}

const cambiarNombreUsuario = async ( req, res = response ) => {

    const { name } = req.body;
    const uid = req.params.id;
    
    try {
        //Se verifica si no existe
        const usuario = await Usuario.findById(uid);

        const email = usuario.email;

        
        if( !usuario ){
            return res.status(404).json({
                ok: false,
                msg: 'No existe una frase por ese id'
            })
        }

        //Se verifica el usuario
        if( usuario._id.toString() !== uid ){
            return res.status(401).json({
                ok: false,
                msg: 'No puedes editar el nombre de otro usuario'
            })
        }

        const nuevoUsuario = {
            _id: uid,
            name: name
        }
        //se actualiza
        const usuarioActualizado = await Usuario.findByIdAndUpdate( uid, nuevoUsuario, { new: true , useFindAndModify: false } );

        res.json({
            ok: true,
            msg: usuarioActualizado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Ups... habla con el administrador'
        })
    }

}

const cambiarContrasenaUsuario = async ( req, res = response ) => {

    const { password } = req.body;
    const uid = req.params.id;
    
    try {
        //Se verifica si no existe
        const usuario = await Usuario.findById(uid);

        const name = usuario.name;
        const email = usuario.email;

        
        if( !usuario ){
            return res.status(404).json({
                ok: false,
                msg: 'No existe una frase por ese id'
            })
        }

        //Se verifica el usuario
        if( usuario._id.toString() !== uid ){
            return res.status(401).json({
                ok: false,
                msg: 'No puedes editar la contraseña de otro usuario'
            })
        }

        const nuevoUsuario = {
            _id: uid,
            name: name,
            email: email,
            password: password
        }

        //Se encripta la contraseña
        const salt = bcrypt.genSaltSync();
        nuevoUsuario.password = bcrypt.hashSync( password, salt );

        //se actualiza
        await Usuario.findByIdAndUpdate( uid, nuevoUsuario, { new: true , useFindAndModify: false } );

        res.json({
            ok: true,
            msg: 'Contraseña actualizada'
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Ups... habla con el administrador'
        })
    }

}

const cargarNombreActualUsuario = async ( req, res = response ) =>{
    const uid = req.params.id;
    try {
        //se obtiene la información actual del usuario especificado
        const resp = await Usuario.findById(uid);
        const name = resp.name;
        res.json({
            ok: true,
            uid,
            name
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Ups... habla con el administrador'
        })
    }
}

const cargarInfoActualUsuario = async ( req, res = response ) =>{
    const uid = req.params.id;
    try {
        //se obtiene la información actual del usuario especificado
        const resp = await Usuario.findById(uid);
        const name = resp.name;
        
        const respPhrases = await Frase.find({ user: uid })
            .populate('user', 'name')
        
        res.json({
            ok:true,
            name,
            phrases: respPhrases
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Ups... habla con el administrador'
        })
    }
}

const guardarFraseUsuario = async ( req, res = response ) => {
    //userId, name y email
    const {uid} = req;
    //phraseId
    const {phraseId} = req.body;

    try {

        //se trae el usuario actual
        const usuarioActual = await Usuario.findById(uid);

        const nuevoUsuario = {
            ...usuarioActual,
        }

        //se evalua si hay frases guardadas repetidas
        let repetidas = [];
        nuevoUsuario._doc.savedPhrases.forEach( (phrase) => {
            if( phrase._id.toString() === phraseId.toString() ){
                repetidas.push(phrase._id)
            }
        })

        if( repetidas.length > 0 ){
            res.json({
                ok: false,
                msg: 'Ya has guardado esa frase'
            })
        }

        if( repetidas.length === 0 ) {
            //se agrega la fraseId al array y se actualiza la BD
            nuevoUsuario._doc.savedPhrases.push(phraseId);

            await Usuario.findByIdAndUpdate( uid, nuevoUsuario, { new: true , useFindAndModify: false } )

            res.json({
                ok:true,
                msg: 'Frase guardada'
            })
        }

    } catch (error) {
        console.log(error)
    }
    
}

const quitarGuardarFraseUsuario = async ( req, res = response ) => {
    //userId, name y email
    const {uid} = req;
    //phraseId
    const {phraseId} = req.body;

    try {

        //se trae el usuario actual
        const usuarioActual = await Usuario.findById(uid);

        const nuevoUsuario = {
            ...usuarioActual,
        }
        
        const result = nuevoUsuario._doc.savedPhrases.filter( phrase => phrase._id.toString() !== phraseId.toString()  );
        nuevoUsuario._doc.savedPhrases = result;

        await Usuario.findByIdAndUpdate( uid, nuevoUsuario, { new: true , useFindAndModify: false } )

        res.json({
            ok:true,
            msg: 'Frase removida de guardados'
        })

    } catch (error) {
        console.log(error)
    }
    
}

const obtenerFrasesGuardadas = async ( req, res = response ) => {

    const uid = req.params.uid;

    try {
        
        const resp = await Usuario.findById(uid)
        .populate('savedPhrases', ['phrase', 'date', 'user']).populate('user', ' name');

        res.json({
            ok: true,
            savedPhrases: resp.savedPhrases
        })

    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    obtenerInfoFrasesUsuario,
    cambiarNombreUsuario,
    cambiarContrasenaUsuario,
    cargarNombreActualUsuario,
    cargarInfoActualUsuario,
    guardarFraseUsuario,
    quitarGuardarFraseUsuario,
    obtenerFrasesGuardadas
}