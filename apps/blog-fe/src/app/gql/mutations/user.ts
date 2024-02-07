import { gql } from '../../gql-types';

export const REMOVE_FOLLOWED_USER = gql(/* GraphQL */ `
  mutation RemoveFollowedUser($userId: ID!, $unfollowUserId: ID!) {
    removeFollowedUser(userId: $userId, unfollowUserId: $unfollowUserId) {
      message
      status
    }
  }
`);

export const FOLLOW_USER = gql(/* GraphQL */ `
  mutation FollowUser($userId: ID!, $followId: ID!) {
    followUser(userId: $userId, followId: $followId) {
      status
      message
    }
  }
`);

export const REMOVE_FOLLOWER = gql(/* GraphQL */ `
  mutation RemoveFollowerUser($userId: ID!, $followerUserId: ID!) {
    removeFollowerUser(userId: $userId, followerUserId: $followerUserId) {
      status
      message
    }
  }
`);
