const express = require("express");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolver");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@as-integrations/express5");
const startServer=async()=>{
  const app = express();
const server = new ApolloServer(
 { typeDefs,
  resolvers}
)

 await server.start()
 app.use('/graphql',express.json(),expressMiddleware(server))

  app.listen(4000, () => {
  console.log("Server running on port 4000");
})
}
startServer()
