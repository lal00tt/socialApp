const { Router } = require('express')
const router = Router()

const Usuarios = require('../Modelos/Usuarios') 

router.get('/', (req, res) => {
    res.send('Modulo de usurios')
})

router.post('/login', async (req, res) => {
    const data = req.body 

    const usuario = await Usuarios.findOne({ nickname: data.nickname, password: data.password })
    
    if (!usuario) res.status(500).send('No existe una cuenta con esta informacion')
    else res.send(usuario)
    
})

router.post('/registro', async (req, res) => {
    const data = req.body

    console.log(data)
    if (!data) {
        res.status(500).send('Data vacia')
    }else{
        const existUsuario = await Usuarios.findOne({ nickname: data.nickname })
        if (existUsuario) res.status(500).send('El usuario ya existe')
        else{
            try{
                const user = new Usuarios(data)
                await user.save()
                console.log('Usuario registrado')
                res.send('👍')
            }catch (error){
                console.log(error)
                res.status(500).send(error)
            }
        }
    }
})

module.exports = router