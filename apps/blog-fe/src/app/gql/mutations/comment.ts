import { gql } from '../../gql-types';

export const ADD_COMMENT = gql(/* GraphQL */ `
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
`);
