const Sequelize = require('sequelize');
const Libro = (sequelize)=>{
    sequelize.define('libro', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: Sequelize.STRING,
        autor: Sequelize.STRING,
        genero:Sequelize.STRING,
        año:Sequelize.INTEGER
    })
}
module.exports = Libro