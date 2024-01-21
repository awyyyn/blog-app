import { createUserResolver, getUserResolver } from './resolvers/user-resolver';
import {
  getPostsResolver,
  createPostResolver,
  getPostByIdResolver,
} from './resolvers/post-resolver';
import {
  createCommentResolver,
  getCommentsByPostIdResolver,
} from './resolvers/comment-resolver';

export const resolvers = {
  Query: {
    getUsers: getUserResolver,
    getPosts: getPostsResolver,
    getCommentsByPostId: getCommentsByPostIdResolver,
    getPostById: getPostByIdResolver,
  },

  Mutation: {
    createUser: createUserResolver,
    createPost: createPostResolver,
    createComment: createCommentResolver,
  },
};
