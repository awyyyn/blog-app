import { GraphQLError } from 'graphql';
import { prisma } from '../../prisma';

export const getPostsResolver = async () => {
  console.log('GET POSTS');
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
      },
    });
    return posts;
  } catch (error) {
    throw new GraphQLError(error);
  }
};

export const createPostResolver = async (
  _,
  {
    postInput,
  }: { postInput: { userId: string; description: string; title: string } }
) => {
  const { description, userId, title } = postInput;
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

    return post;
  } catch (error) {
    throw new GraphQLError(error);
  }
};

export const getPostByIdResolver = async (_, { id }: { id: string }) => {
  try {
    const post = await prisma.post.findFirst({
      where: { id },
      include: {
        author: true,
        comments: true,
      },
    });
    return post;
  } catch (error) {
    throw new GraphQLError(error);
  }
};

export const getPostsWithPaginationResolver = async (
  _,
  { limit, offset }: { offset: number; limit: number }
) => {
  try {
    console.log('S');
    const post = await prisma.post.findMany({
      skip: offset,
      take: limit,
      include: {
        author: true,
      },
    });
    return post;
  } catch (error) {
    throw new GraphQLError(error);
  }
};
