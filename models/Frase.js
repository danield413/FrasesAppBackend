const { Schema, model } = require('mongoose');

//foranea
//En mongoose se crea en la tabla (documento de mongo) foranea un campo del schema
//que tome el tipo de id de mongo y que haga referencia a la tabla primaria en este caso (Usuario)
const FraseSchema = new Schema({

    phrase: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
})

module.exports = model( 'Frase', FraseSchema );