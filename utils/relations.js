function aplicarRelaciones(sequelize){
    console.log(sequelize.models)
    const Videojuego = sequelize.models.videojuego
    const Consola = sequelize.models.consola
    const consolaVideojuego = sequelize.models.consolaVideojuego
    const Cancion = sequelize.models.cancion
    const Libro = sequelize.models.libro
    const Playlist = sequelize.models.playlist
    const PlaylistLibroCancion = sequelize.models.playlistLibroCancion

    Videojuego.belongsToMany(Consola,{through:consolaVideojuego});
    Consola.belongsToMany(Videojuego,{through:consolaVideojuego});
    Cancion.belongsToMany(Playlist,{through:PlaylistLibroCancion});
    Libro.belongsToMany(Playlist,{through:PlaylistLibroCancion});
    Playlist.belongsToMany(Libro,{through:PlaylistLibroCancion});
    Playlist.belongsToMany(Cancion,{through:PlaylistLibroCancion});
}

module.exports = {aplicarRelaciones}