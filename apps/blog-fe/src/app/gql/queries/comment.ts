import gql from 'graphql-tag';

export const GET_COMMENTS = gql`
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
`;
