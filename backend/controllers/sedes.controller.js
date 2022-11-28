const Sedes = require('./../models/Sedes')
const sedesCtrl = {}

sedesCtrl.getSedes = async (req, res) => {
    const sedes = await Sedes.find()
    res.json(sedes)
}

module.exports = sedesCtrl