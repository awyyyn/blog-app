import { gql } from '../../gql-types';

export const UNSAVE_POST = gql(/* GraphQL */ `
  mutation UnsavePost($userId: ID!, $postId: ID!) {
    unsavePost(userId: $userId, postId: $postId) {
      status
      message
    }
  }
`);

export const SAVE_POST = gql(/* GraphQL */ `
  mutation SavePost($postId: ID!, $userId: ID!) {
    savePost(postId: $postId, userId: $userId) {
      id
    }
  }
`);

export const CREATE_POST = gql(/* GraphQL */ `
  mutation CreatePost($postInput: postInput) {
    createPost(postInput: $postInput) {
      id
      description
    }
  }
`);

export const UNLIKE_POST = gql(/* GraphQL */ `
  mutation UnlikePost($postId: ID!, $userId: ID!) {
    unlikePost(userId: $userId, postId: $postId) {
      status
      message
    }
  }
`);

export const LIKE_POST = gql(/* GraphQL */ `
  mutation LikePost($likePostInput: likePostInput) {
    likePost(likePostInput: $likePostInput) {
      id
    }
  }
`);
