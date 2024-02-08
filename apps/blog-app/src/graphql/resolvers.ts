import {
  createUserResolver,
  getUserResolver,
  searchUserResolver,
  followUserResolver,
  getLikedPostsByUserResolver,
  getNotFollowedUserResolver,
  removeFollowedUserResolver,
  removeFollowerUserResolver,
} from './resolvers/user-resolver';
import {
  getPostsResolver,
  createPostResolver,
  getPostByIdResolver,
  getPostsWithPaginationResolver,
  getTotalLikesByPostIdResolver,
  getMostTalkedPostsResolver,
} from './resolvers/post-resolver';
import {
  createCommentResolver,
  getCommentsByPostIdResolver,
} from './resolvers/comment-resolver';
import pubsub from './pubsub';
import { commentSubscriptionResolver } from './resolvers/comment-subscription-resolver';
// import { postSubscriptionResolver } from './resolvers/post-subscription-resolver';
import {
  savePostResolver,
  unsavePostResolver,
  savedPostsByUser,
} from './resolvers/saving-post-resolver';
import {
  likePostResolver,
  unlikePostResolver,
} from './resolvers/liking-post-resolver';
import { postSubscriptionResolver } from './resolvers/post-subscription-resolver';

export const resolvers = {
  Query: {
    getUsers: getUserResolver,
    getPosts: getPostsResolver,
    getCommentsByPostId: getCommentsByPostIdResolver,
    getPostById: getPostByIdResolver,
    getPostsWithPagination: getPostsWithPaginationResolver,
    getLikedPostsByUser: getLikedPostsByUserResolver,
    getTotalLikesByPostId: getTotalLikesByPostIdResolver,
    // getLikedPostByPostId: getLikedPostByPostIdResolver,
    searchUser: searchUserResolver,
    savedPostsByUser: savedPostsByUser,
    getNotFollowedUser: getNotFollowedUserResolver,
    getMostTalkedPosts: getMostTalkedPostsResolver,
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
    savePost: savePostResolver,
    unsavePost: unsavePostResolver,
    removeFollowedUser: removeFollowedUserResolver,
    removeFollowerUser: removeFollowerUserResolver,
  },
};
