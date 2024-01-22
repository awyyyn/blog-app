import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    getUsers: [User]
    getPosts: [Post]
    getCommentsByPostId(postId: String): [Comment]
    getPostById(id: String): Post
    searchUsers(query: String!): [User]
  }

  type Mutation {
    #creates a user
    createUser(userInput: userInput): User!
    #creates a post
    createPost(postInput: postInput): Post
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
    postId: String!
    userId: String!
    comment: String!
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
    # createdAt: String
    # updatedAt: String
  }

  type Post {
    id: ID!
    description: String
    author: User
    comments: [Comment]
    likes: Int
  }

  type Comment {
    id: ID!
    comment: String!
    post: Post
    user: User
  }
`;
