/*
    Rutas de CRUD Phrases -> Phrases
    host + /api/phrases
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { crearFrase, leerFrases, actualizarFrase, eliminarFrase } = require('../controllers/phrasesController');
const router = Router();
const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validarJWT');

//todas las rutas pasan por la validacion del JWT
router.use( validarJWT );

//Crear nueva frase
router.post(
    '/create',
    [
        check('phrase', 'No puedes guardar una frase vacía').not().isEmpty(),
        check('date', 'Se debe especificar la fecha').custom( isDate ),
        validarCampos
    ],
    crearFrase
)

//Leer todas las frases
router.get(
    '/get',
    leerFrases
)

//Actualizar una frase
router.put(
    '/put/:id',
    [
        check('phrase', 'No puedes guardar una frase vacía').not().isEmpty(),
        check('date', 'Se debe especificar la fecha').custom( isDate ),
        validarCampos
    ],
    actualizarFrase
)

//Eliminar una frase
router.delete(
    '/delete/:id',
    eliminarFrase
)



module.exports = router;