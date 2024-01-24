import { prisma } from '../../prisma';
import { UserInput } from '../../../types/user';
import { GraphQLError } from 'graphql';

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
    const users = await prisma.user.findMany();
    console.log(users);
    return users;
  } catch (error) {
    console.log(error);
    throw new GraphQLError(error.message);
  }
};

export const searchUsersResolver = async (_, { query }: { query: string }) => {
  try {
    const user = prisma.user.findMany({
      where: {
        OR: [
          {
            email: { contains: query },
          },
          {
            username: { contains: query },
          },
          {
            firstname: { contains: query },
          },
          {
            lastname: { contains: query },
          },
        ],
      },
    });

    return user;
  } catch (error) {
    throw new GraphQLError(error);
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
