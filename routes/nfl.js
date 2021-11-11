const express = require("express")
const nflController = require('../controllers/nfl')
const router = express.Router()

//Agregar
router.post('/agregarEquipo',nflController.postAgregarEquipo)
router.post('/agregarJugador',nflController.postAgregarJugador)
router.post('/agregarEquipoFav',nflController.postAgregarEquipoFav)
router.post('/agregarJugadorFav',nflController.postAgregarJugadorFav)
//Obtener
router.get('/obtenerDivision',nflController.getObtenerDivision)
router.get('/obtenerJugadorPosicion',nflController.getObtenerJugadorPos)
router.get('/obtenerJugadorEquipo',nflController.getObtenerJugadorEq)
//Borrar
router.post('/borrarEquipoFav',nflController.postBorrarEquipoFav)
router.post('/borrarJugadorFav',nflController.postBorrarJugadorFav)
//Actualizar
router.post('/actualizarRecord',nflController.postActualizarRecord)

module.exports = router