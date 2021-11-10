const express = require("express")
const sequelize = require('./utils/database')
const nflRoutes = require('./routes/nfl')
const app = express();
app.use(express.json())

app.use('/nfl', nflRoutes);

app.get("/prueba",(req,res)=>{
    res.send("Prueba de servidor funcionando")
})

sequelize.sync()
    .then(
        app.listen(8080,()=>{
            console.log("Servidor online en el puerto 8080")
        })
    )
    .catch(err=>console.log(err))