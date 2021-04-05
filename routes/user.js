/*
    Rutas de Usuario -> CRUD 
    host + /api/user
    se separan de auth por funcionalidad
*/
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validarJWT');
const { 
    obtenerInfoFrasesUsuario, 
    cambiarNombreUsuario , 
    cambiarContrasenaUsuario, 
    cargarNombreActualUsuario,
    cargarInfoActualUsuario,
    guardarFraseUsuario,
    quitarGuardarFraseUsuario,
    obtenerFrasesGuardadas
} = require('../controllers/userController');

//todas las rutas pasan por la validacion del JWT
router.use( validarJWT );

//Leer frases del usuario especificado
router.get('/:id', obtenerInfoFrasesUsuario );

//Cambiar nombre de usuario
router.put('/change-name/:id', cambiarNombreUsuario);

//Actualizar contraseña de usuario
router.put(
    '/change-password/:id', [
    check('password', 'La contraseña debe de ser de 8 caracteres').isLength({ min: 8 }),
    validarCampos
    ] 
    ,cambiarContrasenaUsuario
)

//Leer el nombre actual del usuario 
router.get('/name/:id', cargarNombreActualUsuario)
//Leer el nombre actual del usuario 
router.get('/data/:id', cargarInfoActualUsuario)

//añadir frase guardada
router.put('/put-new-phrase', guardarFraseUsuario);
//quitar frase guardada
router.put('/put-phrase', quitarGuardarFraseUsuario);
//obtener frases guardadas
router.get('/get-saved-phrases/:uid', obtenerFrasesGuardadas);

module.exports = router;