export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}

export type UserInput = {
  userInput: Omit<User, 'id' | 'updatedAt' | 'createdAt'>;
};
