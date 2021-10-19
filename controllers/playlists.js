const path = require('path')
const Cancion = require('../utils/database').models.cancion
const Libro = require('../utils/database').models.libro
const Playlist = require('../utils/database').models.playlist
const PlaylistLibroCancion = require('../utils/database').models.playlistLibroCancion

exports.postAgregarCancion = (req,res)=>{
    console.log(req.body)
    Cancion.create(req.body)
        .then(ca=>{
            console.log("Registro Existoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
}

exports.postAgregarLibro = (req,res)=>{
    console.log(req.body)
    Libro.create(req.body)
        .then(li=>{
            console.log("Registro Existoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
}

exports.postAgregarPlaylist = (req,res)=>{
    console.log(req.body)
    Playlist.create(req.body)
        .then(pl=>{
            console.log("Registro Existoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
}

exports.postAgregarPlaylistLibroCancion = (req,res)=>{
    console.log(req.body)
    PlaylistLibroCancion.create(req.body)
        .then(plcl=>{
            console.log("Registro Exitoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
}

exports.getObtenerCanciones = (req,res)=>{
    Cancion.findAll()
        .then(canciones =>{
            console.log(canciones)
            res.json(canciones)
        })
        .catch(err=>console.log(err))
}

exports.getObtenerLibros = (req,res)=>{
    Libro.findAll()
        .then(libros =>{
            console.log(libros)
            res.json(libros)
        })
        .catch(err=>console.log(err))
}

exports.getObtenerPlaylist = (req,res)=>{
    Playlist.findAll()
        .then(playlists =>{
            console.log(playlists)
            res.json(playlists)
        })
        .catch(err=>console.log(err))
}

exports.getObtenerPlaylistLibroCancion = (req,res)=>{
    PlaylistLibroCancion.findAll()
        .then(plc =>{
            console.log(plc)
            res.json(plc)
        })
        .catch(err=>console.log(err))
}

exports.postBorrarCancion = (req,res)=>{
    console.log(req.body)
    Cancion.destroy({
       where:{
           id: req.body.id
       } 
    })
    .then(() =>{
        console.log("Cancion eliminada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postBorrarLibro = (req,res)=>{
    console.log(req.body)
    Libro.destroy({
       where:{
           id: req.body.id
       } 
    })
    .then(() =>{
        console.log("Libro eliminado")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postBorrarLibro = (req,res)=>{
    console.log(req.body)
    Libro.destroy({
       where:{
           id: req.body.id
       } 
    })
    .then(() =>{
        console.log("Libro eliminado")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postBorrarPlaylist = (req,res)=>{
    console.log(req.body)
    Playlist.destroy({
       where:{
           id: req.body.id
       } 
    })
    .then(() =>{
        console.log("Playlist eliminada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postBorrarPlaylistLibroCancion = (req,res)=>{
    console.log(req.body)
    PlaylistLibroCancion.destroy({
       where:{
           id: req.body.id
       } 
    })
    .then(() =>{
        console.log("PLC eliminada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarCancion = (req,res)=>{
    console.log(req.body)
    Cancion.update({
        autor:req.body.autor
    },{
      where:{
          id: req.body.id
      }  
    })
    .then(() =>{
        console.log("Cancion actualizada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarLibro = (req,res)=>{
    console.log(req.body)
    Libro.update({
        año:req.body.año
    },{
      where:{
          id: req.body.id
      }  
    })
    .then(() =>{
        console.log("Libro actualizado")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarPlaylist = (req,res)=>{
    console.log(req.body)
    Playlist.update({
        nombre:req.body.nombre
    },{
      where:{
          id: req.body.id
      }  
    })
    .then(() =>{
        console.log("Playlist actualizada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarPlaylist = (req,res)=>{
    console.log(req.body)
    Playlist.update({
        nombre:req.body.nombre
    },{
      where:{
          id: req.body.id
      }  
    })
    .then(() =>{
        console.log("Playlist actualizada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}