const Sequelize = require('sequelize');
const Playlist = (sequelize)=>{
    sequelize.define('playlist',{
        id:{
            type: Sequelize.INTEGER, //Varchar(30)
            allowNull: false,
            primaryKey: true 
        },
        nombre: Sequelize.STRING,
        creador: Sequelize.STRING
    })
}
module.exports = Playlist