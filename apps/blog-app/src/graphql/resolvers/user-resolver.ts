import { prisma } from '../../prisma';
import { UserInput } from '../../../types/user';
import { GraphQLError } from 'graphql';
// import { makeExecutableSchema } from '@graphql-tools/schema';

export const createUserResolver = async (_, { userInput }: UserInput) => {
  const { email, firstname, lastname, username } = userInput;
  const data = await prisma.user.create({
    data: {
      email,
      firstname,
      lastname,
      username,
    },
  });

  return data;
};

export const getUserResolver = async () => {
  try {
    const users = await prisma.user.findMany({
      include: {
        following: true,
        followedBy: true,
        liked_posts: true,
        saved_post: true,
      },
    });
    console.log(users);
    return users;
  } catch (error) {
    console.log(error);
    throw new GraphQLError(error.message);
  }
};

export const getLikedPostsByUserResolver = async (
  _,
  { userId }: { userId: string }
) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        liked_posts: true,
        _count: {
          select: {
            // comments,
            // following,
            liked_posts: true,
            // followedBy,
            // Post,
            // save_post
          },
        },
      },
    });
    return user.liked_posts;
  } catch (error) {
    console.log(error.message);
    throw new GraphQLError(error);
  }
};

export const searchUserResolver = async (_, { query }: { query: string }) => {
  try {
    const result = await prisma.user.findMany({
      where: {
        OR: [
          {
            firstname: {
              startsWith: query,
            },
          },
          {
            lastname: {
              startsWith: query,
            },
          },
          {
            email: {
              startsWith: query,
            },
          },
          {
            username: {
              startsWith: query,
            },
          },
          {
            Post: {
              some: {
                title: {
                  startsWith: query,
                },
              },
            },
          },
        ],
      },
      include: {
        saved_post: true,
        _count: true,
      },
    });

    return {
      data: result,
      count: result.length,
    };
  } catch (error) {
    throw new GraphQLError(error);
  }
};

export const followUserResolver = async (
  _,
  { userId, followId }: { userId: string; followId: string }
) => {
  try {
    // const data = await prisma.user.update
    const data = await prisma.user.update({
      data: {
        following: {
          connect: {
            id: followId,
          },
        },
      },
      include: {
        following: true,
        followedBy: true,
      },
      where: {
        id: userId,
      },
    });
    return data;
  } catch (error) {
    throw new GraphQLError(error);
  }
};

export const getNotFollowedUserResolver = async (
  _,
  { userId }: { userId: string }
) => {
  try {
    const users = await prisma.user.findMany({
      where: {
        id: {
          not: userId,
        },
        followedBy: {
          none: {
            id: {
              equals: userId,
            },
          },
        },
      },
      include: {
        _count: true,
      },
    });

    return users;
  } catch (error) {
    throw new GraphQLError(error);
  }
};
