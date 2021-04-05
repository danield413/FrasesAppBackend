const { response } = require('express');
const Frase = require('../models/Frase');

const crearFrase = async ( req, res = response ) => {
    const frase = new Frase( req.body );

    try {
        // se añaden al Modelo Frase el uid y el name del usuario
        // (recordar que vienen del JWT y antes se válida con el middleware validarJWT)
        frase.user = req.uid;
        frase.name = req.name;
        
        //se guarda la frase en la coleccíón de MongoDB
        const fraseGuardada = await frase.save()

        res.json({
            ok: true,
            msg: fraseGuardada
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Ups... habla con el administrador'
        })
    }

}

const leerFrases = async ( req, res = response ) => {

    //Se buscan todas las frases y se "poblan" con datos de los otros documentos
    const frases = await Frase.find()
                                .populate('user', 'name')

    res.json({
        ok: true,
        msg: frases
    })
}

const actualizarFrase = async ( req, res = response ) => {
    //se toma el id de la frase por parámetro
    const fraseId = req.params.id;

    //se toma el uid del usuario por medio del JWT
    const uid = req.uid;

    try {
        //se busca el evento, si no existe 
        const frase = await Frase.findById( fraseId );
        delete frase.name;

        if( !frase ){
            return res.status(404).json({
                ok: false,
                msg: 'No existe una frase por ese id'
            })
        }
        //Se verifica que el usuario que quiere actualizar sea el creador de la frase
        if( frase.user.toString() !== uid ){
            return res.status(401).json({
                ok: false,
                msg: 'No puedes editar la frase de otro usuario'
            })
        }
        //Se arma la nueva frase
        const nuevaFrase = {
            ...req.body,
            user: uid
        }

        //Se actualiza la frase y se retorna la respuesta
        const fraseActualizada = await Frase.findByIdAndUpdate( fraseId, nuevaFrase, { new: true , useFindAndModify: false } );

        res.json({
            ok: true,
            msg: fraseActualizada
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Ups... habla con el administrador'
        })
    }
}

const eliminarFrase = async ( req, res = response ) => {
    //se toma el id de la frase por parámetro
    const fraseId = req.params.id;

    //se toma el uid del usuario por medio del JWT
    const uid = req.uid;

    try {
        //se busca el evento, si no existe 
        const frase = await Frase.findById( fraseId );

        if( !frase ){
            return res.status(404).json({
                ok: false,
                msg: 'No existe una frase por ese id'
            })
        }
        //Se verifica que el usuario que quiere actualizar sea el creador de la frase
        if( frase.user.toString() !== uid ){
            return res.status(401).json({
                ok: false,
                msg: 'No puedes eliminar la frase de otro usuario'
            })
        }

        //Se Elimina la frase y se retorna la respuesta
        await Frase.findByIdAndDelete( fraseId );
        res.json({
            ok: true,
            uid,
            phraseId: fraseId
        })
        

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Ups... habla con el administrador'
        })
    }

}

module.exports = {
    crearFrase,
    leerFrases,
    actualizarFrase,
    eliminarFrase
}