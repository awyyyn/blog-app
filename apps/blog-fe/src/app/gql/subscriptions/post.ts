import gql from 'graphql-tag';

export const SUBSCRIBE_POST_LIKE = gql`
  subscription PostLiked($postId: ID!) {
    postLiked(postId: $postId) {
      postId
      type
    }
  }
`;
