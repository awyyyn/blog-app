import { ApolloServer } from '@apollo/server';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';
// import { } from '@'

export const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});
