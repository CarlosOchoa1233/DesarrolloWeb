const Sequelize = require('sequelize');
const Cancion = (sequelize)=>{
    sequelize.define('cancion', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: Sequelize.STRING,
        artista: Sequelize.STRING,
        año:Sequelize.INTEGER
    })
}
module.exports = Cancion