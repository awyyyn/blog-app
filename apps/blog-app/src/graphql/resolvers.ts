import { createUserResolver, getUserResolver } from './resolvers/user-resolver';

export const resolvers = {
  Query: {
    getUsers: getUserResolver,
  },

  Mutation: {
    createUser: createUserResolver,
  },
};
