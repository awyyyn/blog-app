import gql from 'graphql-tag';

export const GET_POST = gql`
  query GetPostById($postId: ID!, $userId: ID) {
    getPostById(id: $postId, userId: $userId) {
      author {
        firstname
        lastname
        username
        profile
      }
      createdAt
      title
      id
      liked
      description
      _count {
        comments
        liked_by
      }
    }
  }
`;

export const GET_POSTS_WITH_PAGINATION = gql`
  query GetPostsWithPagination($offset: Int, $limit: Int, $userId: ID!) {
    getPostsWithPagination(offset: $offset, limit: $limit, userId: $userId) {
      _count {
        liked_by
        comments
      }
      id
      liked
      description
      updatedAt
      createdAt
      saved
      title
      author {
        profile
        firstname
        lastname
        username
      }
    }
  }
`;

export const SAVED_POST = gql`
  query SavedPostsByUser($userId: ID!) {
    savedPostsByUser(userId: $userId) {
      description
      title
      id
      _count {
        comments
        liked_by
      }
      author {
        username
        profile
        firstname
        lastname
      }
      createdAt
      liked
    }
  }
`;
