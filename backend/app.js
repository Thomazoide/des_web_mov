const cors = require('cors')
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 4000)
app.use(cors())
app.use(express.json())
app.use('/api/medics', require('./routes/medics'))
module.exports = app
