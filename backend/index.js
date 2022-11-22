require('dotenv').config()
const app = require('./app')
const {connectDB} = require('./db')

connectDB()

async function main(){
    await app.listen(app.get('port'))
    console.log('\nServidor en puerto: ', app.get('port'))
}

main()