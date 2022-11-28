const Auxiliar = require('./../models/JAuxiliar')
const auxCtrl = {}
auxCtrl.getAux = async (req, res) => {
    const auxs = await Auxiliar.find()
    res.json(auxs)
}
module.exports = auxCtrl