import { prisma } from '../../prisma';
import { User } from '../../../types/user';

export const createUserResolver = async (_, args: Omit<User, '_id'>) => {
  const data = await prisma.user.create({
    data: {
      ...args,
    },
  });

  return data;
};
