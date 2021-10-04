function aplicarRelaciones(sequelize){
    console.log(sequelize.models)
    const Videojuego = sequelize.models.videojuego
    const Consola = sequelize.models.consola
    const consolaVideojuego = sequelize.models.consolaVideojuego

    Videojuego.belongsToMany(Consola,{through:consolaVideojuego});
    Consola.belongsToMany(Videojuego,{through:consolaVideojuego});
}

module.exports = {aplicarRelaciones}