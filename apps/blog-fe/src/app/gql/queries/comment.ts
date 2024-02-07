import { gql } from '../../gql-types';

export const GET_COMMENTS = gql(/* GraphQL */ `
  query GetCommentsByPostId($postId: ID!, $offset: Int) {
    getCommentsByPostId(postId: $postId, offset: $offset) {
      comment
      user {
        firstname
        lastname
        username
      }
      id
    }
  }
`);
