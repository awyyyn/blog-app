import { withFilter } from 'graphql-subscriptions';
import pubsub from '../pubsub';

export const postSubscriptionResolver = {
  subscribe: withFilter(
    () => pubsub.asyncIterator('POST_LIKED'),
    (payload, variable) => {
      return payload.postLiked.postId === variable.postId;
    }
  ),
};
