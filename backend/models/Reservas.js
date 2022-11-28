const {Schema, model, now} = require('mongoose');
//modelo de reserva de horas
const Reservas = new Schema({
    fecha: {
        type: String,
    },
    hora: {
        type: String,
    },
    rutSostenedor: String,
    rutPaciente: String,
    especialidad: {
        type: String,
        default: 'fonoaudiologia'
    },
    codSede: {
        type: String,
        default: 'edd_sb'
    },
});

module.exports = model('reservas', Reservas);