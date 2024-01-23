import { GraphQLError } from 'graphql';
import { prisma } from '../../prisma';
import { CommentInput } from '@blog-app/shared';

export const createCommentResolver = async (
  _,
  { comment, postId, userId }: CommentInput
) => {
  try {
    const commentData = await prisma.comment.create({
      data: {
        comment,
        userId,
        postId,
      },
      include: {
        post: true,
      },
    });

    return commentData;
  } catch (error) {
    throw new GraphQLError(error);
  }
};

export const getCommentsByPostIdResolver = async (
  _,
  { postId }: { postId: string }
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
    });

    return comments;
  } catch (error) {
    throw new GraphQLError(error);
  }
};
