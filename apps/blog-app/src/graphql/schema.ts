import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    getUsers: String
  }

  type Mutation {
    createUser(
      firstname: String
      lastname: String
      username: String
      email: String
      password: String
    ): User
  }

  type User {
    _id: String
    firstname: String
    lastname: String
    username: String
    email: String
    password: String
  }
`;
