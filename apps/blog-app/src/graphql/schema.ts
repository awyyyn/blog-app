import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    getUsers: [User]
    getPosts: [Post]
    getCommentsByPostId(postId: String): [Comment]
    getPostById(id: String): Post
  }

  type Mutation {
    #creates a user
    createUser(
      firstname: String!
      lastname: String!
      username: String!
      email: String!
    ): User!
    #creates a post
    createPost(authorId: String, description: String): Post
    #creates a comment
    createComment(postId: String!, userId: String!, comment: String!): Comment!
  }

  type User {
    id: String
    firstname: String!
    lastname: String!
    username: String!
    email: String!
    # createdAt: String
    # updatedAt: String
  }

  type Post {
    id: String!
    description: String
    author: User
    comments: [Comment]
  }

  type Comment {
    id: String!
    comment: String!
    post: Post
    user: User
  }
`;
