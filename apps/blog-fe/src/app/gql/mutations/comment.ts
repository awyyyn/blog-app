import gql from 'graphql-tag';

export const ADD_COMMENT = gql`
  mutation CreateComment($commentInput: commentInput) {
    createComment(commentInput: $commentInput) {
      id
      comment
      user {
        firstname
        lastname
      }
    }
  }
`;
