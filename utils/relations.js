function aplicarRelaciones(sequelize){
    console.log(sequelize.models)
    const Equipo = sequelize.models.equipo
    const Jugador = sequelize.models.jugador
    const EquipoFav = sequelize.models.equipoFav
    const JugadorFav = sequelize.models.jugadorFav
    
    Equipo.hasOne(Jugador);
    Equipo.hasOne(EquipoFav);
    Jugador.hasOne(JugadorFav);
}

module.exports = {aplicarRelaciones}