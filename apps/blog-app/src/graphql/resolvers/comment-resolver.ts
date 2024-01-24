import { GraphQLError } from 'graphql';
import { prisma } from '../../prisma';
import { CommentInput } from '@blog-app/shared';
import pubsub from '../pubsub';

export const createCommentResolver = async (
  _,
  { commentInput }: { commentInput: CommentInput }
) => {
  try {
    const { comment, postId, userId } = commentInput;
    const newComment = await prisma.comment.create({
      data: {
        comment,
        userId,
        postId,
      },
      include: {
        post: true,

        user: true,
      },
    });

    pubsub.publish('COMMENT_ADDED', {
      commentAdded: newComment,
    });

    return newComment;
  } catch (error) {
    throw new GraphQLError(error);
  }
};

export const getCommentsByPostIdResolver = async (
  _,
  { postId, offset }: { postId: string; offset: number }
) => {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        postId: postId,
      },
      include: {
        post: true,
        user: true,
      },
      skip: offset,
      orderBy: {
        createdAt: 'desc',
      },
      take: 10,
    });

    return comments;
  } catch (error) {
    throw new GraphQLError(error);
  }
};
