const { Router } = require('express')
const router = Router()

const usuariosRoutes = require('./usuarios')
const publicacinesRoutes = require('./publicaciones')

router.use('/usuarios',usuariosRoutes)
router.use('/publicaciones',publicacinesRoutes)

module.exports = router
