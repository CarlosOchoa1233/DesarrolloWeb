const express = require("express")
const sequelize = require('./utils/database')
const vjRoutes = require('./routes/videojuegos')
const app = express();

app.use('/videojuegos',vjRoutes);

sequelize.sync()
    .then(
        app.listen(8080,()=>{
            console.log("Servidor online en el puerto 8080")
        })
    )
    .catch(err=>console.log(err))