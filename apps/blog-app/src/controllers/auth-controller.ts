import { prisma } from '../prisma';
import { Request, Response } from 'express';

export const registerController = async (req: Request, res: Response) => {
  const { email, profile } = req.body;
  const username = String(email).split('@')[0];
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user === null) {
      const createdUser = await prisma.user.create({
        data: {
          email,
          firstname: '',
          lastname: '',
          profile,
          username,
        },
      });
      return res.status(201).json({ data: createdUser });
    }

    return res.status(200).json({ data: user });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
