const cors = require('cors');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 4000);
app.use(cors());
app.use(express.json());
app.use('/api/medics', require('./routes/medics'));
app.use('/api/sedes', require('./routes/sedes.routes'));
app.use('/api/reservas', require('./routes/reservas.routes'))
app.use('/api/nurses', require('./routes/nurses.routes'))
app.use('/api/auxiliares', require('./routes/auxs.routes'))
module.exports = app;
