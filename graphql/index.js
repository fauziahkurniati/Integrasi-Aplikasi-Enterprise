const { ApolloServer, gql } = require('apollo-server');
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({port: 4001}).then(({ url }) => {
    console.log(`Server running at ${url}`);
  });


