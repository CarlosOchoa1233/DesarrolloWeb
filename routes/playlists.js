const express = require("express")
const plController = require('../controllers/playlists')
const router = express.Router()

//Agregar
router.post('/agregarCancion',plController.postAgregarCancion)
router.post('/agregarLibro',plController.postAgregarLibro)
router.post('/agregarPlaylist',plController.postAgregarPlaylist)
router.post('/agregarPlaylistLibroCancion',plController.postAgregarPlaylistLibroCancion)

//Obtener
router.get('/obtenerCanciones',plController.getObtenerCanciones)
router.get('/obtenerLibros',plController.getObtenerLibros)
router.get('/obtenerPlaylists',plController.getObtenerPlaylist)
router.get('/obtenerPlaylistLibroCanciones',plController.getObtenerPlaylistLibroCancion)

//Borrar
router.post('/borrarCancion',plController.postBorrarCancion)
router.post('/borrarLibro',plController.postBorrarLibro)
router.post('/borrarPlaylist',plController.postAgregarPlaylist)
router.post('/borrarPlaylistLibroCancion',plController.postBorrarPlaylistLibroCancion)

//Actualizar

router.post('/actualizarCancion',plController.postActualizarCancion)
router.post('/actualizarLibro',plController.postActualizarLibro)
router.post('/actualizarPlaylist',plController.postActualizarPlaylist)


module.exports = router