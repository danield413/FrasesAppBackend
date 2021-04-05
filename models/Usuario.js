const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    savedPhrases: [{
        type: Schema.Types.ObjectId,
        ref: 'Frase',
        required: true
    }]

})

module.exports = model('Usuario', UsuarioSchema );