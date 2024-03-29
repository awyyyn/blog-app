import { gql } from '../../gql-types';

export const SEARCH_USER = gql(/* GraphQL */ `
  query Query($query: String) {
    searchUser(query: $query) {
      data {
        firstname
        lastname
        id
        username
        profile
      }
      count
    }
  }
`);

export const GET_NOT_FOLLOWED_USERS = gql(/* GraphQL */ `
  query GetNotFollowedUser($userId: ID!) {
    getNotFollowedUser(userId: $userId) {
      id
      lastname
      firstname
      username
      profile
      _count {
        following
        followedBy
      }
    }
  }
`);

export const GET_MOST_TALKED_POSTS = gql(/* GraphQL */ `
  query GetMostTalkedPosts {
    getMostTalkedPosts {
      id
      author {
        firstname
        lastname
      }

      title
      createdAt
      description
    }
  }
`);
