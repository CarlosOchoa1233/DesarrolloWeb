const Sequelize = require('sequelize');
const JugadorFav = (sequelize)=>{
    sequelize.define('jugadorFav', {
        nombre:{
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        }
    })
}
module.exports = JugadorFav