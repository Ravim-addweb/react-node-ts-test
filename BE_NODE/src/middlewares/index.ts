import { Response, Request, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = (req.headers.authorization || req.headers.Authorization) as string;

  if (authHeader && authHeader.startsWith('Basic ')) {
    const token = authHeader.split(' ')[1];
    const decodedToken = Buffer.from(token, 'base64').toString('ascii');

    if (decodedToken === process.env.AUTH_TOKEN) {
      return next();
    }
  }

  res.set('WWW-Authenticate', 'Basic realm="Authentication Required"');
  return res.sendStatus(401);
};
