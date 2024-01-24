import gql from 'graphql-tag';

export const GET_POSTS = gql`
  query GetPostsWithPagination($offset: Int, $limit: Int) {
    getPostsWithPagination(offset: $offset, limit: $limit) {
      id
      description
      likes
      createdAt
      updatedAt
      title
      author {
        id
        username
        firstname
        lastname
      }
    }
  }
`;

export const GET_COMMENTS = gql`
  query GetCommentsByPostId($postId: String, $offset: Int) {
    getCommentsByPostId(postId: $postId, offset: $offset) {
      id
      comment
      user {
        firstname
        lastname
      }
    }
  }
`;

export const ADD_COMMENT = gql`
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
`;

export const GET_POST = gql`
  query GetPostById($id: String!) {
    getPostById(id: $id) {
      id
      description
      title
      author {
        username
        firstname
        lastname
      }
      comments {
        id
      }
      liked_by {
        user {
          id
        }
      }
      createdAt
      updatedAt
    }
  }
`;

export const SUBSCRIBE_COMMENT = gql`
  subscription CommentAdded($postid: ID!) {
    commentAdded(postId: $postid) {
      id
      comment
      user {
        firstname
        lastname
      }
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
