const Sequelize = require('sequelize');
const consolaVideojuego = (sequelize)=>{
    sequelize.define('consolaVideojuego', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: Sequelize.STRING
    })
}
module.exports = consolaVideojuego