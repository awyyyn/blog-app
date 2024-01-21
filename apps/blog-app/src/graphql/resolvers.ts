import { createUserResolver } from './resolvers/user-resolver';

export const resolvers = {
  Query: {
    async getUsers() {
      return 'hello world';
    },
  },

  Mutation: {
    createUser: createUserResolver,
  },
};
