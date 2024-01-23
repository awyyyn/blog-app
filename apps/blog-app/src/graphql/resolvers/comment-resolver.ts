import { GraphQLError } from 'graphql';
import { prisma } from '../../prisma';

type CommentInput = {
  commentInput: {
    postId: string;
    userId: string;
    comment: string;
  };
};

export const createCommentResolver = async (
  _,
  { commentInput }: CommentInput
) => {
  try {
    console.log(commentInput);
    const commentData = await prisma.comment.create({
      data: {
        comment: commentInput.comment,
        userId: commentInput.userId,
        postId: commentInput.postId,
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
