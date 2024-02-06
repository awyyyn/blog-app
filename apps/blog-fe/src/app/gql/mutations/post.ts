import gql from 'graphql-tag';

export const UNSAVE_POST = gql`
  mutation UnsavePost($userId: ID!, $postId: ID!) {
    unsavePost(userId: $userId, postId: $postId) {
      status
      message
    }
  }
`;

export const SAVE_POST = gql`
  mutation SavePost($postId: ID!, $userId: ID!) {
    savePost(postId: $postId, userId: $userId) {
      id
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($postInput: postInput) {
    createPost(postInput: $postInput) {
      id
      description
    }
  }
`;

export const UNLIKE_POST = gql`
  mutation UnlikePost($postId: ID!, $userId: ID!) {
    unlikePost(userId: $userId, postId: $postId) {
      status
      message
    }
  }
`;

export const LIKE_POST = gql`
  mutation LikePost($likePostInput: likePostInput) {
    likePost(likePostInput: $likePostInput) {
      id
    }
  }
`;
