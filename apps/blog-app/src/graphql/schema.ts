import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    getUsers: [User]
    getPosts: [Post]
    getCommentsByPostId(postId: String, offset: Int): [Comment]
    getPostById(id: String): Post
    getPostsWithPagination(
      offset: Int
      limit: Int
      userId: ID
    ): [paginationResult]
    getLikedPostByUser(userId: ID!): [PostLikes]
    getTotalLikesByPostId(postId: ID!): PostLikes
    getLikedPostByPostId(postId: String): LikedPostResult

    searchUser(query: String): searchResult
    savePost(userId: ID!, postId: ID!): savedPost
  }

  type LikedPostResult {
    exists: Boolean
    liked_post_id: ID
  }

  type savedPost {
    id: ID!
    user: User
    post: Post
  }

  type paginationResult {
    id: ID!
    description: String
    author: User
    title: String!
    createdAt: String!
    updatedAt: String!
    _count: Count
    liked_by: [PostLikes]
    liked: Boolean
  }

  type searchResult {
    data: [User]
    count: Int
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
    unlikePost(userId: ID!, postId: ID!): DeleteResult
    # #like comment
    # likeComment(userId: ID!): Comment
    followUser(userId: ID!, followId: ID!): User
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

    followedBy: [User]
    following: [User]
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
