import {
  createUserResolver,
  getUserResolver,
  getLikedPostByUserResolver,
  searchUserResolver,
  followUserResolver,
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
  savePostResolver,
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
    savePost: savePostResolver,
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
    followUser: followUserResolver,
  },
};
