import { Router } from 'express';
import { authRouter } from './auth-routes';
import { userRouter } from './user-routes';

export const router = Router();

router.use('/api/auth', authRouter);
router.use('/api', userRouter);
