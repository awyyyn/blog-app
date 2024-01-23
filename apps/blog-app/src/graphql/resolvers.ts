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
import pubsub from './pubsub';
import { commentSubscriptionResolver } from './resolvers/comment-subscription-resolver';

export const resolvers = {
  Query: {
    getUsers: getUserResolver,
    getPosts: getPostsResolver,
    getCommentsByPostId: getCommentsByPostIdResolver,
    getPostById: getPostByIdResolver,
    searchUsers: searchUsersResolver,
    getPostsWithPagination: getPostsWithPaginationResolver,
  },

  Subscription: {
    postCreated: {
      subscribe: () => pubsub.asyncIterator(['POST_CREATED']),
    },
    commentAdded: commentSubscriptionResolver,
  },

  Mutation: {
    createUser: createUserResolver,
    createPost: createPostResolver,
    createComment: createCommentResolver,
  },
};
