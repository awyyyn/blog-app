export const SUBSCRIBE_COMMENT = gql`
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
`;
