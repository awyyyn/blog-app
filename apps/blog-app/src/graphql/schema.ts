import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    getUsers: [User]
  }

  type Mutation {
    createUser(
      firstname: String!
      lastname: String!
      username: String!
      email: String!
    ): User!
  }

  type User {
    id: String
    firstname: String!
    lastname: String!
    username: String!
    email: String!
    # createdAt: String
    # updatedAt: String
  }
`;
