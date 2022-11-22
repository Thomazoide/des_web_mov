const cors = require('cors')
const express = require('express');
const app = express();
const {ApolloServer} = require('apollo-server-express');
const {typeDefs} = require('./typedefs');
const {resolvers} = require('./resolvers');

//async function start(){
  //  const apolloServer = new ApolloServer({
    //    typeDefs,
      //  resolvers
    //});
    //await apolloServer.start();
    //apolloServer.applyMiddleware({app});
    //app.listen(4000, () => {
        //console.log("Servidor en puerto 4000");
    //})
    //app.use('/api/medics', require('./routes/medics'))
//}
//start();
app.set('port', process.env.PORT || 4000)
app.use(cors())
app.use(express.json())
app.use('/api/medics', require('./routes/medics'))
module.exports = app
