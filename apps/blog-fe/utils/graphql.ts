import { ApolloClient, InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';

// export const httpLink = createHttpLink({})

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getPostsWithPagination: offsetLimitPagination(),
          // {
          //   keyArgs: false,
          //   merge(existing = [], incoming) {
          //     return [...existing, ...incoming];
          //   },
          // },
        },
      },
    },
  }),
});
