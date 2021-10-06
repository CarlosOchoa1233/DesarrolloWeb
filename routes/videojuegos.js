const express = require("express")
const vjController = require('../controllers/videojuegos')
const router = express.Router()

//Agregar
router.post('/agregarVideojuego',vjController.postAgregarVideojuego)
router.post('/agregarConsola', vjController.postAgregarConsola)
router.post('/agregarConsolaVideojuego', vjController.postAgregarConsolaVideojuego)
//Obtener
router.get('/obtenerVideojuegos',vjController.getObtenerVideojuegos)
router.get('/obtenerConsolas', vjController.getObtenerConsola)
router.get('/obtenerConsolaVideojuegos', vjController.getObtenerConsolaVideojuego)
//Borrar
router.post('/borrarVideojuego',vjController.postBorrarVideojuego)
router.post('/borrarConsola',vjController.postBorrarConsola)
router.post('/borrarConsolaVideojuego',vjController.postBorrarConsolaVideojuego)
//Actualizar
router.post('/actualizarVideojuego',vjController.postActualizarVideojuego)
router.post('/actualizarConsola',vjController.postActualizarConsola)
router.post('/actualizarConsolaVideojuego',vjController.postActualizarConsolaVideojuego)


module.exports = router