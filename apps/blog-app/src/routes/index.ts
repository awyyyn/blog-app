import { Router } from 'express';
import { authRouter } from './auth-routes';

export const router = Router();

router.use('/api/auth', authRouter);
