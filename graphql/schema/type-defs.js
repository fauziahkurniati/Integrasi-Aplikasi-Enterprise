const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        name: String!
        username: String!
        age: Int!
        alamat: String!
        notelp: String!
        
    }

    type Query {
        users: [User!]!
    }
`;

module.exports = { typeDefs };