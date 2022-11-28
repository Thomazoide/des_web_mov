const { Schema, Types } = require('mongoose')
const Reservas = require('./../models/Reservas')
const reservasCtrl = {}
reservasCtrl.getReservas = async (req, res) => {
    const reservas = await Reservas.find()
    res.json(reservas)
}

reservasCtrl.guardarReserva = async (req, res) => {
    const {fecha, hora, rutSostenedor, rutPaciente, especialidad, codSede } = req.body
    console.log(req.body)
    const nuevaReserva = new Reservas({fecha, hora, rutSostenedor, rutPaciente, especialidad, codSede})
    await nuevaReserva.save()
    res.json({msg: 'hora reservada'})
}

module.exports = reservasCtrl