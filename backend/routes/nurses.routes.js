const {Router} = require('express')
const {getNurses} = require('./../controllers/nurses.controller')
const router = Router()
router.route('/')
    .get(getNurses)
module.exports = router