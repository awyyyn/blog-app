import { ApolloServer } from '@apollo/server';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';
// import { } from '@'

export const server = new ApolloServer({
  typeDefs,
  resolvers,
});
