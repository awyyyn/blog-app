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
    # #like comment
    # likeComment(userId: ID!): Comment
  }

  input likePostInput {
    userId: ID!
    postId: ID!
  }

  type Subscription {
    postCreated: Post
    commentAdded(postId: ID!): Comment!
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

    liked_by: [PostLikes]
  }

  type Comment {
    id: ID!
    comment: String!
    post: Post
    user: User
  }
`;
