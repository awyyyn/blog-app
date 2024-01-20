import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    getUsers: String
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
