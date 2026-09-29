const express = require("express");
const {ApolloServer}=require('@apollo/server');
const { expressMiddleware } = require("@as-integrations/express5");
const typeDefs = require("./graphql/schema");
const resolver = require("./graphql/resolver");
const app = express();
const server=new ApolloServer({
    typeDefs:typeDefs,
    resolvers:resolver
})
const serverStart=async()=>{
  await   server.start()
  app.use('/graphql',express.json(),
expressMiddleware(server))
    app.listen(4000, () => {
  console.log("Server running on port 4000");
});
}
serverStart()