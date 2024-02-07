import { gql } from '../../gql-types';

export const SUBSCRIBE_POST_LIKE = gql(/* GraphQL */ `
  subscription PostLiked($postId: ID!) {
    postLiked(postId: $postId) {
      postId
      type
    }
  }
`);
