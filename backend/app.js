const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./Routes/index')

    const corsOptions = {
    origin: '*',
    optionsStatusSuccess: 200
}

try{
    mongoose.connect(
        'mongodb://localhost:27017/socialApp',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        () => {
            console.log('Conexion satisfactoria de la base de datos')
        }
    )
}catch(e){
    console.log(e)
}

const app = express()

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(routes)

app.use('/', (req, res) => {
    res.send('Bienvenido a Api 1.0')
})

app.listen(3001,()=>{
    console.log('Servidor iniciado correctamente')
})