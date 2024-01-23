import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    getUsers: [User]
    getPosts: [Post]
    getCommentsByPostId(postId: String): [Comment]
    getPostById(id: String): Post
    searchUsers(query: String!): [User]
    getPostsWithPagination(offset: Int, limit: Int): [Post]
  }

  type Mutation {
    #creates a user
    createUser(userInput: userInput): User!
    #creates a post
    createPost(postInput: postInput): Post!
    #creates a comment
    createComment(commentInput: commentInput): Comment!
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
    authorId: String
    description: String
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
  }

  type Post {
    id: ID!
    description: String
    author: User
    comments: [Comment]
    likes: Int
    title: String!
    createdAt: String!
    updatedAt: String!
  }

  type Comment {
    id: ID!
    comment: String!
    post: Post
    user: User
  }
`;
