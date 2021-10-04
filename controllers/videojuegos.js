const path = require('path')
const sequelize = require('../utils/database')
const Videojuego = require('../utils/database').models.videojuego

exports.getAgregarVideojuego = (req,res)=>{
    res.send("Formulario")
} 

exports.postAgregarVideojuego = (req,res)=>{
    console.log(req.body);
    Videojuego.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso")
            resultado.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            resultado.json({estado: "error"})
        })
    //res.redirect('/videojuegos/confirmacionDatos')
}

exports.getConfirmacionDatos = (req,res)=>{
    res.send("Confirmacion")
} 

exports.getMostrarVideojuegos = (req,res)=>{
    res.send("Videojuegos")
} 

exports.getObtenerVideojuegos = (req, res)=>{
    Videojuego.findAll()
        .then(videojuego => {
            console.log(videojuego)
            res.json(videojuego)
        })
        .catch(err=>console.log(err))
}

exports.postBorrarVideojuego = (req,res)=>{
    console.log(req.body)
    Videojuego.destroy({
        where:{
            id: req.body.id
        }
    })
    .then(borrarVideojuego => {
        console.log("Videojuego eliminado")
        borrarVideojuego.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        resultado.json({estado: "error"})
    })
}

exports.postActualizarVideojuego = (req,res)=>{
    console.log(req.body)
    Videojuego.update({
        nombre:req.body.nombre
    },{
        where:{
            id:req.body.id
        }
    })
    .then(updateVideojuego => {
        console.log("Videojuego eliminado")
        updateVideojuego.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        updateVideojuego.json({estado: "error"})
    })
}