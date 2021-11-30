const path = require('path')
const Equipo = require('../utils/database').models.equipo
const Jugador = require('../utils/database').models.jugador
const EquipoFav = require('../utils/database').models.equipoFav
const JugadorFav = require('../utils/database').models.jugadorFav

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

exports.postAgregarJugador = (req,res)=>{
    console.log(req.body)
    Jugador.create(req.body)
        .then(py=>{
            console.log("Registro Existoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
}

exports.postAgregarJugadorFav = (req,res)=>{
    console.log(req.body)
    JugadorFav.create(req.body)
        .then(fav=>{
            console.log("Registro Existoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
}

exports.postAgregarEquipoFav = (req,res)=>{
    console.log(req.body)
    EquipoFav.create(req.body)
        .then(fav=>{
            console.log("Registro Existoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
}

exports.getObtenerDivision = (req,res)=>{
    console.log(req.body)
    Equipo.findAll({where:{division:req.body.division}})
        .then(div=>{
            console.log(div)
            res.json(div)
        })
        .catch(err=>console.log(err))
}

exports.getObtenerJugadorPos = (req,res)=>{
    console.log(req.body)
    Jugador.findAll({where:{posicion:req.body.posicion}})
        .then(pos=>{
            console.log(pos)
            res.json(pos)
        })
        .catch(err=>console.log(err))
}

exports.getObtenerJugadorEq = (req,res)=>{
    console.log(req.body)
    Jugador.findAll({where:{equipoNombre:req.body.equipoNombre}})
        .then(pos=>{
            console.log(pos)
            res.json(pos)
        })
        .catch(err=>console.log(err))
}

exports.postBorrarEquipoFav = (req,res)=>{
    console.log(req.body)
    EquipoFav.destroy({
        where:{
            nombre: req.body.nombre
        }
    })
    .then(() =>{
        console.log("Equipo eliminado")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postBorrarJugadorFav = (req,res)=>{
    console.log(req.body)
    JugadorFav.destroy({
        where:{
            nombre: req.body.nombre
        }
    })
    .then(() =>{
        console.log("Equipo eliminado")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarRecord = (req,res)=>{
    console.log(req.body)
    Equipo.update({
        record:req.body.record
    },{
      where:{
          nombre: req.body.nombre
      }  
    })
    .then(() =>{
        console.log("Record actualizado")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarEquipoJugador = (req,res)=>{
    console.log(req.body)
    Jugador.update({
        equipoNombre:req.body.equipoNombre
    },{
      where:{
          nombre: req.body.nombre
      }  
    })
    .then(() =>{
        console.log("Equipo actualizado")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarJugadorFav = (req,res)=>{
    console.log(req.body)
    JugadorFav.update({
        jugadorNombre:req.body.jugadorNombre
    },{
      where:{
          nombre: req.body.nombre
      }  
    })
    .then(() =>{
        console.log("Equipo actualizado")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}