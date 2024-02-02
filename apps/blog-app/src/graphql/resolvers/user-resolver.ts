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
      },
    });
    console.log(users);
    return users;
  } catch (error) {
    console.log(error);
    throw new GraphQLError(error.message);
  }
};

export const getLikedPostByUserResolver = async (
  _,
  { userId }: { userId: string }
) => {
  try {
    const liked_posts = await prisma.postLikes.findMany({
      where: {
        user: { id: userId },
      },
      include: {
        post: true,
        user: true,
      },
    });
    return liked_posts;
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
    });

    console.log(result);

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
