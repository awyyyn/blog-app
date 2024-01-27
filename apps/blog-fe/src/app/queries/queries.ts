import gql from 'graphql-tag';

/* export const GET_POSTS = gql`
  query GetPostsWithPagination( ) {
    getPosts {
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
`; */

export const GET_POSTS_WITH_PAGINATION = gql`
  query GetPostsWithPagination($offset: Int, $limit: Int, $userId: ID) {
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
      title
      author {
        firstname
        lastname
        username
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
      _count {
        comments
        liked_by
      }
      createdAt
      updatedAt
    }
    getLikedPostByPostId(postId: $id) {
      exists
      liked_post_id
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

export const UNLIKE_POST = gql`
  mutation UnlikePost($postId: ID!, $userId: ID!) {
    unlikePost(userId: $userId, postId: $postId) {
      success
    }
  }
`;

export const SUBSCRIBE_POST_LIKE = gql`
  subscription PostLiked($postId: ID!) {
    postLiked(postId: $postId) {
      postId
      type
    }
  }
`;
