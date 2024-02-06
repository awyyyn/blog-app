import gql from 'graphql-tag';

export const SEARCH_USER = gql`
  query Query($query: String) {
    searchUser(query: $query) {
      data {
        firstname
        lastname
        id
        username
        profile
      }
      count
    }
  }
`;
