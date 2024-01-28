import {
  createUserResolver,
  getUserResolver,
  getLikedPostByUserResolver,
  searchUserResolver,
} from './resolvers/user-resolver';
import {
  getPostsResolver,
  createPostResolver,
  getPostByIdResolver,
  getPostsWithPaginationResolver,
  likePostResolver,
  getTotalLikesByPostIdResolver,
  getLikedPostByPostIdResolver,
  unlikePostResolver,
} from './resolvers/post-resolver';
import {
  createCommentResolver,
  getCommentsByPostIdResolver,
} from './resolvers/comment-resolver';
import pubsub from './pubsub';
import { commentSubscriptionResolver } from './resolvers/comment-subscription-resolver';
import { postSubscriptionResolver } from './resolvers/post-subscription-resolver';

export const resolvers = {
  Query: {
    getUsers: getUserResolver,
    getPosts: getPostsResolver,
    getCommentsByPostId: getCommentsByPostIdResolver,
    getPostById: getPostByIdResolver,
    getPostsWithPagination: getPostsWithPaginationResolver,
    getLikedPostByUser: getLikedPostByUserResolver,
    getTotalLikesByPostId: getTotalLikesByPostIdResolver,
    getLikedPostByPostId: getLikedPostByPostIdResolver,
    searchUser: searchUserResolver,
  },

  Subscription: {
    postCreated: {
      subscribe: () => pubsub.asyncIterator(['POST_CREATED']),
    },
    commentAdded: commentSubscriptionResolver,
    postLiked: postSubscriptionResolver,
  },

  Mutation: {
    createUser: createUserResolver,
    createPost: createPostResolver,
    createComment: createCommentResolver,
    likePost: likePostResolver,
    unlikePost: unlikePostResolver,
  },
};
