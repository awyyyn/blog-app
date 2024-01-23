import { User } from './user';

export interface Comment {
  id: string;
  comment: string;
  likes: string;
  user: User;
}
