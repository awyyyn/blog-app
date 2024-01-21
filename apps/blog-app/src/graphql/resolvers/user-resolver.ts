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
