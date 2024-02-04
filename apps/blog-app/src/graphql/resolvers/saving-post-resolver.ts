import { GraphQLError } from 'graphql';
import { prisma } from '../../prisma';

export const savePostResolver = async (
  _,
  { postId, userId }: { userId: string; postId: string }
) => {
  try {
    const user = await prisma.user.update({
      data: {
        saved_post: {
          connect: {
            id: postId,
          },
        },
      },
      include: {
        saved_post: true,
      },
      where: {
        id: userId,
      },
    });

    return user.saved_post;
  } catch (error) {
    throw new GraphQLError(error);
  }
};

export const unsavePostResolver = async (
  _,
  { postId, userId }: { userId: string; postId: string }
) => {
  try {
    const data = await prisma.user.update({
      data: {
        saved_post: {
          disconnect: {
            id: postId,
          },
        },
      },
      include: {
        saved_post: true,
      },
      where: {
        id: userId,
      },
    });
    console.log(data.saved_post_ids);
    return {
      status: 200,
      message: 'Post Deleted',
    };
  } catch (error) {
    throw new GraphQLError(error);
  }
};

export const savedPostsByUser = async (_, { userId }: { userId: string }) => {
  try {
    const data = await prisma.user.findUnique({
      include: {
        saved_post: {
          include: {
            author: true,
            _count: true,
            liked_by: true,
          },
        },
        // _count: true,
      },
      where: {
        id: userId,
      },
    });

    const results = data.saved_post.map((post) => {
      const liked = post.liked_by_ids.includes(userId);
      return {
        ...post,
        liked,
      };
    });

    return results;
  } catch (error) {
    throw new GraphQLError(error);
  }
};
