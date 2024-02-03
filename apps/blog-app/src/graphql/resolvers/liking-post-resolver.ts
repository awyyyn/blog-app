import { GraphQLError } from 'graphql';
import pubsub from '../pubsub';
import { LikePostInput } from '@blog-app/shared';
import { prisma } from '../../prisma';

export const unlikePostResolver = async (
  _,
  { userId, postId }: { userId: string; postId: string }
) => {
  try {
    const post = await prisma.post.update({
      data: {
        liked_by: {
          disconnect: {
            id: userId,
          },
        },
      },
      where: {
        id: postId,
      },
    });

    pubsub.publish('POST_LIKED', {
      postLiked: {
        type: 'UNLIKE',
        postId: post.id,
      },
    });

    return {
      message: 'Post Unliked',
      status: 200,
    };
  } catch (error) {
    throw new GraphQLError(error);
  }
};

export const likePostResolver = async (
  _,
  { likePostInput }: { likePostInput: LikePostInput }
) => {
  try {
    // const post = await prisma.user.update({});
    const like_post = await prisma.post.update({
      data: {
        liked_by: {
          connect: {
            id: likePostInput.userId,
          },
        },
      },
      include: {
        liked_by: true,
      },
      where: {
        id: likePostInput.postId,
      },
    });

    pubsub.publish('POST_LIKED', {
      postLiked: {
        type: 'LIKE',
        postId: like_post.id,
      },
    });

    return like_post;
  } catch (error) {
    console.log(error.message);
    throw new GraphQLError(error);
  }
};
