export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface GetUserArgs {
  start?: number;
  end?: number;
  all?: '*';
}
