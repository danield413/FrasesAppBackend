/*
    Rutas de Usuarios -> Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { crearUsuario, loginUsuario, revalidarToken, generarNuevoTokenConDiferenteNombre } = require('../controllers/authControllers');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validarJWT');

//Crear nuevo usuario
router.post(
    '/new-user', 
    [   //middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El correo electrónico es obligatorio').isEmail(),
        check('password', 'La contraseña debe de ser de 8 caracteres').isLength({ min: 8 }),
        validarCampos
    ], 
    crearUsuario 
);

//Iniciar sesión de usuario
router.post(
    '/',
    [ //middlewares
        check('email', 'El correo electrónico es obligatorio').isEmail(),
        check('password', 'La contraseña debe de ser de 6 caracteres').isLength({ min: 8 }),
        validarCampos
    ], 
    loginUsuario 
);

//Renovar JWT de usuario
router.get('/renew', validarJWT , revalidarToken );

//Renovar JWT de usuario al cambiar el nombre, con un nuevo nombre especificamente
router.post('/renew-change-name', validarJWT , generarNuevoTokenConDiferenteNombre );

module.exports = router;