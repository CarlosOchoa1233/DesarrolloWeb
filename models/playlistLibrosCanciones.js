//Tabla intermedia
const Sequelize = require('sequelize');
const PlaylistLibroCancion = (sequelize)=>{
    sequelize.define('playlistLibroCancion',{
        idPLC:{
            type: Sequelize.INTEGER, //Varchar(30)
            allowNull: false,
            primaryKey: true 
        },
        fecha:Sequelize.STRING
    })
}
module.exports = PlaylistLibroCancion