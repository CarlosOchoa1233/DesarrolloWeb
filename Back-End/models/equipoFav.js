const Sequelize = require('sequelize');
const EquipoFav = (sequelize)=>{
    sequelize.define('equipoFav', {
        nombre:{
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        }
    })
}
module.exports = EquipoFav