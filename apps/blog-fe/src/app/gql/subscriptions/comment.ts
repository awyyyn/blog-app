import { gql } from '../../gql-types';

export const SUBSCRIBE_COMMENT = gql(/* GraphQL */ `
  subscription Subscription($postId: ID!) {
    commentAdded(postId: $postId) {
      id
      comment
      user {
        firstname
        lastname
        username
        profile
      }
    }
  }
`);
