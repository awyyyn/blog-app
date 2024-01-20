import { Router } from 'express';

export const userRouter = Router();

userRouter.get('/profile');

userRouter.post('/sign-up');
userRouter.post('/sign-in');
