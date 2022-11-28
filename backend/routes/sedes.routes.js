const {Router} = require('express')
const {getSedes} = require('./../controllers/sedes.controller')

const router = Router()
router.route('/')
    .get(getSedes)
module.exports = router