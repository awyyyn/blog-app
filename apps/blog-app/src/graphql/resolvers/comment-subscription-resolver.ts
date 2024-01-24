// import { subscribe } from "diagnostics_channel";

import { withFilter } from 'graphql-subscriptions';
import pubsub from '../pubsub';

export const commentSubscriptionResolver = {
  subscribe: withFilter(
    () => pubsub.asyncIterator('COMMENT_ADDED'),
    (payload, variables) => {
      return payload.commentAdded.post.id === variables.postId;
    }
  ),
};
