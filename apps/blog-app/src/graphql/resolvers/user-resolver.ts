import { prisma } from '../../prisma';
import { User } from '../../../types/user';
import { GraphQLError } from 'graphql';

export const createUserResolver = async (
  _,
  { email, firstname, lastname, username }: Omit<User, 'id'>
) => {
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
