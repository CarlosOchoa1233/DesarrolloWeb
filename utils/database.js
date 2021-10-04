const Sequelize = require('sequelize');
const {aplicarRelaciones} = require('./relations')
const sequelize = new Sequelize('ChaJosBD','user1','root',{
    dialect: 'mysql',
    host:'localhost',
    define:{
        timestamps: false,
        freezeTableName: true
    }
})

const modelDefiners = [
    require('../models/videojuegos'),
    require('../models/consolas'),
    require('../models/consolaVideojuegos')
]

for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

aplicarRelaciones(sequelize)

module.exports = sequelize