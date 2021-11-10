const Sequelize = require('sequelize');
const Jugador = (sequelize)=>{
    sequelize.define('jugador', {
        nombre:{
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        posicion: Sequelize.STRING,
        numero: Sequelize.INTEGER,
        año: Sequelize.INTEGER
    })
}
module.exports = Jugador