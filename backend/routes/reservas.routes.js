const {Router} = require('express')
const {getReservas, guardarReserva} = require('./../controllers/reservas.controller')

const router = Router()
router.route('/')
    .get(getReservas)
    .post(guardarReserva)
module.exports = router