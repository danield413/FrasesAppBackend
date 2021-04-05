const express = require('express');
const path = require('path');
//dotenv para usar variables de entorno 
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

//crear servidor de express
const app = express();

//Base de datos
dbConnection();
//CORS
app.use(cors());

//Directorio Público
app.use( express.static('public') );

//lectura y paseo del body
app.use( express.json() );

//****RUTAS****
//auth // crear, login, renew
app.use( '/api/auth', require('./routes/auth') );
//phrases: crear, leer, actualizar, borrar
app.use( '/api/phrases', require('./routes/phrases') );
//user: actualizar, borrar
app.use( '/api/user', require('./routes/user') );

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'), function(err) {
        if (err) {
        res.status(500).send(err)
        }
    })
})


// app.get('*', (req, res) => {    
//     res.sendFile(path.join(publicPath, 'index.html')), function(err) {             
//         if (err) {                 
//             res.status(500).send(err) 
//         }        
//     };
// });

// const publicPath = path.join(__dirname, '..', 'public');
// res.sendFile(path.join(publicPath, 'index.html'))



//Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor coriendo en puerto ${ process.env.PORT }`)
} )