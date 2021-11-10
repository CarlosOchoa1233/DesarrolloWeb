const Sequelize = require('sequelize');
const Equipo = (sequelize)=>{
    sequelize.define('equipo', {
        nombre:{
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        ciudad: Sequelize.STRING,
        division: Sequelize.STRING,
        record: Sequelize.STRING,
        superbowl: Sequelize.INTEGER
    })
}
module.exports = Equipo