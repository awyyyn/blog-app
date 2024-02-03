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
      userId: ID!
    ): [paginationResult]
    getLikedPostsByUser(userId: ID!): [Post]
    getTotalLikesByPostId(postId: ID!): PostCountsArrayFields
    # getLikedPostByPostId(postId: String): Count
    searchUser(query: String): searchResult
    savedPostsByUser(userId: ID!): [Post]
  }

  type Mutation {
    #creates a user
    createUser(userInput: userInput): User!
    #creates a post
    createPost(postInput: postInput): Post!
    #creates a comment
    createComment(commentInput: commentInput): Comment!
    #like post
    likePost(likePostInput: likePostInput): Post
    unlikePost(userId: ID!, postId: ID!): DeleteResult
    # #like comment
    # likeComment(userId: ID!): Comment
    followUser(userId: ID!, followId: ID!): User
    savePost(userId: ID!, postId: ID!): [Post]
    unsavePost(userId: ID!, postId: ID!): DeleteResult
  }

  type Subscription {
    postCreated: Post
    commentAdded(postId: ID!): Comment!
    # postLiked(postId: ID!): postLiked
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
    _count: PostCountsArrayFields
    liked_by: [User]
    liked: Boolean

    saved: Boolean
  }

  type searchResult {
    data: [User]
    count: Int
  }

  type DeleteResult {
    status: Int
    message: String
  }

  input likePostInput {
    userId: ID!
    postId: ID!
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

  type User {
    id: ID
    firstname: String!
    lastname: String!
    username: String!
    email: String!
    profile: String
    createdAt: String!
    updatedAt: String!

    liked_posts: [Post]
    comments: [Comment]
    _count: UserCountsArrayFields

    saved_posts: [Post]

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
    _count: PostCountsArrayFields
    liked_by: [User]

    saved_by: [User]
  }

  type Comment {
    id: ID!
    comment: String!
    post: Post
    # _count: Count
    user: User
  }

  type UserCountsArrayFields {
    comments: Int
    following: Int
    followedBy: Int
    Post: Int
    save_post: Int
  }

  type PostCountsArrayFields {
    comments: Int
    liked_by: Int
    saved_by: Int
  }
`;
