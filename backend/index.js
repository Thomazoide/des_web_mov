require('dotenv').config()
const app = require('./app')
const {connectDB} = require('./db')
const {ApolloServer} = require('apollo-server-express')
const {typeDefs} = require('./typedefs')
const {resolvers} = require('./resolvers')

connectDB()

async function main(){
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({app})
    await app.listen(app.get('port'))
    console.log('\nServidor en puerto: ', app.get('port'))
}

main()
