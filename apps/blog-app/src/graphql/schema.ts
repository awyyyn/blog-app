import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    getUsers: [User]
    getPosts: [Post]
    getCommentsByPostId(postId: String, offset: Int): [Comment]
    getPostById(id: String): Post
    searchUsers(query: String!): [User]
    getPostsWithPagination(offset: Int, limit: Int): [Post]
    getLikedPostByUser(userId: ID!): [PostLikes]
    getTotalLikesByPostId(postId: ID!): PostLikes
    getLikedPostByPostId(postId: String): LikedPostResult
  }

  type LikedPostResult {
    exists: Boolean
    liked_post_id: ID
  }

  type Mutation {
    #creates a user
    createUser(userInput: userInput): User!
    #creates a post
    createPost(postInput: postInput): Post!
    #creates a comment
    createComment(commentInput: commentInput): Comment!
    #like post
    likePost(likePostInput: likePostInput): PostLikes
    unlikePost(id: ID!): DeleteResult
    # #like comment
    # likeComment(userId: ID!): Comment
  }

  type DeleteResult {
    success: Boolean
  }

  input likePostInput {
    userId: ID!
    postId: ID!
  }

  type Subscription {
    postCreated: Post
    commentAdded(postId: ID!): Comment!
    postLiked(postId: ID!): postLiked
  }

  type postLiked {
    type: Type
    postId: ID!
  }

  enum Type {
    LIKE
    UNLIKE
  }

  input userInput {
    firstname: String!
    lastname: String!
    username: String!
    email: String!
  }

  input postInput {
    description: String!
    userId: String!
    title: String!
  }

  input commentInput {
    userId: String
    postId: String
    comment: String
  }

  type PostLikes {
    id: ID!
    user: User
    post: Post
  }

  type User {
    id: ID
    firstname: String!
    lastname: String!
    username: String!
    email: String!
    profile: String
    createdAt: String!
    updatedAt: String!

    liked_posts: [PostLikes]
    comments: [Comment]
    _count: Count
  }

  type Post {
    id: ID!
    description: String
    author: User
    likes: Int
    title: String!
    createdAt: String!
    updatedAt: String!

    comments: [Comment]
    _count: Count
    liked_by: [PostLikes]
  }

  type Comment {
    id: ID!
    comment: String!
    post: Post
    _count: Count
    user: User
  }

  type Count {
    comments: Int
    liked_by: Int
    liked_posts: Int
  }
`;
