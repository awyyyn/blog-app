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

export const GET_COMMENTS = gql`
  query GetCommentsByPostId($postId: String, $offset: Int) {
    getCommentsByPostId(postId: $postId, offset: $offset) {
      id
      comment
      user {
        firstname
        lastname
        profile
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
        profile
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

export const SEARCH_USER = gql`
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
`;

export const CREATE_POST = gql`
  mutation CreatePost($postInput: postInput) {
    createPost(postInput: $postInput) {
      id
      description
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

export const UNSAVE_POST = gql`
  mutation UnsavePost($userId: ID!, $postId: ID!) {
    unsavePost(userId: $userId, postId: $postId) {
      message
      status
    }
  }
`;
