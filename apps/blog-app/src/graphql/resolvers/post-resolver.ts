import { GraphQLError } from 'graphql';
import { prisma } from '../../prisma';
import { PostInput } from '@blog-app/shared';
import pubsub from '../pubsub';

export const getPostsResolver = async () => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
        _count: true,
        // comments: true,
        liked_by: true,
      },
    });
    return posts;
  } catch (error) {
    throw new GraphQLError(error);
  }
};

export const createPostResolver = async (
  _,
  { postInput }: { postInput: PostInput }
) => {
  const { description, title, userId } = postInput;
  try {
    const post = await prisma.post.create({
      data: {
        author: {
          connect: { id: userId },
        },
        title,
        description,
      },
    });

    pubsub.publish('POST_CREATED', {
      postCreated: post,
    });

    return post;
  } catch (error) {
    throw new GraphQLError(error);
  }
};

export const getPostByIdResolver = async (
  _,
  { id, userId }: { id: string; userId: string }
) => {
  try {
    const post = await prisma.post.findFirst({
      where: { id },
      include: {
        author: true,
        comments: true,
        _count: true,
        liked_by: true,
      },
    });
    const liked = post.liked_by_ids.includes(userId);
    console.log(userId, liked);
    return {
      ...post,
      liked,
    };
  } catch (error) {
    throw new GraphQLError(error);
  }
};

export const getTotalLikesByPostIdResolver = async (
  _,
  { postId }: { postId: string }
) => {
  try {
    const total_likes = await prisma.post.findUnique({
      include: {
        _count: true,
      },
      where: {
        id: postId,
      },
    });
    return total_likes._count;
  } catch (error) {
    console.log(error.message);
    throw new GraphQLError(error);
  }
};

export const getPostsWithPaginationResolver = async (
  _,
  { limit, offset, userId }: { offset: number; limit: number; userId: string }
) => {
  try {
    let posts = await prisma.post.findMany({
      skip: offset,
      take: limit,
      include: {
        liked_by: {
          select: {
            id: true,
          },
        },
        _count: true,
        author: {
          include: {
            followedBy: true,
          },
        },
      },
      where: {
        author: {
          OR: [
            {
              followedByIDs: {
                has: userId,
              },
            },
            {
              followedBy: {
                every: {
                  id: userId,
                },
              },
            },
          ],
        },
      },
    });

    posts = posts.map((post) => {
      const liked = post.liked_by.find((i) => i.id === userId);
      const saved = post.saved_by_ids.includes(userId);

      return {
        ...post,
        liked: Boolean(liked),
        saved,
      };
    });
    return posts;
  } catch (error) {
    console.log(error.message);
    throw new GraphQLError(error);
  }
};
