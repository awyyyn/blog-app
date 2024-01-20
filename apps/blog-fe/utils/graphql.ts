import { ApolloClient, InMemoryCache } from '@apollo/client';

// export const httpLink = createHttpLink({})

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});
