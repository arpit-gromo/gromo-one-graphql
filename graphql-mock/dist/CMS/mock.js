const { ApolloServer, gql, MockList } = require('apollo-server');
// Define your GraphQL schema
const typeDefs = gql `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users(count: Int): [User]
  }
`;
// Define resolvers with mock data
const resolvers = {
    Query: {
        users: (_, { count }) => new MockList(count || 5), // Generates a list of mock users
    },
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`Mock GraphQL server is running at ${url}`);
});
