const { Router } = require('express')
const router = Router()

const Publicacion = require('../Modelos/Publicaciones') 
const Usuarios = require('../Modelos/Usuarios') 

router.get('/', async (req, res) => {
    let publicaciones = await Publicacion.find().sort({created_at: -1})

    const usuarios = await Usuarios.find()

    const data = publicaciones.map(pub => {
        const result = usuarios.find( usuario => {
            return usuario._id == pub.idUsuario
        })

        let temObj = { publicacion: pub, usuario_info: { nickname: result.nickname, img: result.img }}
        return temObj
    })

    return res.send(data)
})
router.get('/:id', async (req, res) => {
    const id = req.params.id 
    if (!id) return res.send('Id es necesario')
    
    const publicaciones = await Publicacion.find({idUsuario:id})

    return res.send(publicaciones)
})

router.post('/crear', async (req, res) => {
    const data = req.body 
    if (!data.idUsuario || data.idUsuario == "") return res.status(500).send('Id es necesario')
    try {
        const publicacion = new Publicacion(data)
        await publicacion.save()

        return res.send('👍')
    } catch (error) {
        console.log(error.message)
        return res.status(500).send('Algo salio mal intenta de nuevo')
    }
})

router.put('/actualizar/:id', async (req, res) => {
    const id = req.params.id 
    const data = req.body 

    if (!id || id == "") return res.status(500).send('Id es necesario')

    try {
        const publicacion = await Publicacion.findByIdAndUpdate(id, data, { new: true })
        return res.send(publicacion)
        
    } catch (error) {
        console.log(error.message)
        return res.status(500).send('Algo salio mal intenta de nuevo')
    }
})

module.exports = router