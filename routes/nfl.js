const express = require("express")
const nflController = require('../controllers/nfl')
const router = express.Router()

router.post('/agregarEquipo',nflController.postAgregarEquipo)

module.exports = router