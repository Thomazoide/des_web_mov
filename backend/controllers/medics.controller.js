const Medics = require('./../models/Medics')
const medicsCtrl = {}

medicsCtrl.getMedics = async (req, res) => {
    const medicos = await Medics.find()
    res.json(medicos)
}

medicsCtrl.getmedic = async (req, res) => {
    const medics = await Medics.find()
    let medic = null
    console.log(Medics.findById(req.params.rut))
    const rut = req.params.rut
    for(let objeto of medics){
        if(rut == objeto.rut){
            medic = objeto
        }
    }
    res.json(medic)
}
medicsCtrl.crearMedic = async (req, res) => {
    const {tipo, nombre, rut, email, cell, pass} = req.body
    const nuevoMed = new Medics(tipo, nombre, rut, email, cell, pass)
    await nuevoMed.save()
    res.json({msg: 'nota guardada'})
}
medicsCtrl.mutarMedic = (req, res) => res.json()
medicsCtrl.borrarMedic = (req, res) => res.json()
module.exports = medicsCtrl