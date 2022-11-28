const {Router} = require('express')
const {getAux} = require('./../controllers/jauxiliar.controller')
const router = Router()
router.route('/')
    .get(getAux)
module.exports = router