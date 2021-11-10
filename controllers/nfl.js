const path = require('path')
const Equipo = require('../utils/database').models.equipo

exports.postAgregarEquipo = (req,res)=>{
    console.log(req.body)
    Equipo.create(req.body)
        .then(tm=>{
            console.log("Registro Existoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
}