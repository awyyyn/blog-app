import {
  createUserResolver,
  getUserResolver,
  searchUsersResolver,
} from './resolvers/user-resolver';
import {
  getPostsResolver,
  createPostResolver,
  getPostByIdResolver,
  getPostsWithPaginationResolver,
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
    searchUsers: searchUsersResolver,
    getPostsWithPagination: getPostsWithPaginationResolver,
  },

  Mutation: {
    createUser: createUserResolver,
    createPost: createPostResolver,
    createComment: createCommentResolver,
  },
};
