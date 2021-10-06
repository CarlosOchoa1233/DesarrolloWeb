const path = require('path')
const Videojuego = require('../utils/database').models.videojuego
const Consola = require('../utils/database').models.consola
const ConsolaVideojuego = require('../utils/database').models.consolaVideojuego

exports.postAgregarVideojuego = (req,res)=>{
    console.log(req.body)
    Videojuego.create(req.body)
        .then(vj=>{
            console.log("Registro Existoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
}

exports.postAgregarConsola = (req,res)=>{
    console.log(req.body)
    Consola.create(req.body)
        .then(cns=>{
            console.log("Registro Exitoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
}

exports.postAgregarConsolaVideojuego = (req,res)=>{
    console.log(req.body)
    ConsolaVideojuego.create(req.body)
        .then(csvj=>{
            console.log("Registro Exitoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
}

exports.getObtenerVideojuegos = (req,res)=>{
    Videojuego.findAll()
        .then(videojuegos =>{
            console.log(videojuegos)
            res.json(videojuegos)
        })
        .catch(err=>console.log(err))
}

exports.getObtenerConsola = (req,res)=>{
    Consola.findAll()
        .then(consolas =>{
            console.log(consolas)
            res.json(consolas)
        })
        .catch(err=>console.log(err))
}

exports.getObtenerConsolaVideojuego = (req,res)=>{
    ConsolaVideojuego.findAll()
        .then(consolaVideojuegos =>{
            console.log(consolaVideojuegos)
            res.json(consolaVideojuegos)
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
    .then(() =>{
        console.log("Videojuego eliminado")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postBorrarConsola = (req,res)=>{
    console.log(req.body)
    Consola.destroy({
        where:{
            id: req.body.id
        }
    })
    .then(() =>{
        console.log("Consola eliminada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postBorrarConsolaVideojuego = (req,res)=>{
    console.log(req.body)
    ConsolaVideojuego.destroy({
        where:{
            id: req.body.id
        }
    })
    .then(() =>{
        console.log("Consola-Videojuego eliminado")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarVideojuego = (req,res)=>{
    console.log(req.body)
    Videojuego.update({
        nombre:req.body.nombre
    },{
      where:{
          id: req.body.id
      }  
    })
    .then(() =>{
        console.log("Videojuego actualizado")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarConsola = (req,res)=>{
    consola.log(req.body)
    Consola.update({
        nombre:req.body.nombre
    },{
        where:{
            id: req.body.id
        }
    })
    .then(() =>{
        console.log("Consola actualizada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarConsolaVideojuego = (req,res)=>{
    consola.log(req.body)
    ConsolaVideojuego.update({
        nombre:req.body.nombre
    },{
        where:{
            id: req.body.id
        }
    })
    .then(() =>{
        console.log("Consola-Videojuego actualizado")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}
