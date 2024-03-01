import { Response, Request, NextFunction } from "express";
import dotenv from 'dotenv';
dotenv.config();

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  // Get the Authorization header from the request
  const authHeader = (req.headers.authorization || req.headers.Authorization) as string;
  // console.log('authHeader', authHeader);

  // Check if Authorization header exists and starts with 'Basic '
  if (authHeader && authHeader.startsWith('Basic ')) {
    // Extract the base64-encoded token from the Authorization header
    const token = authHeader.split(' ')[1];
    // console.log('token', token);

    // Decode the base64-encoded token
    const decodedToken = Buffer.from(token, 'base64').toString('ascii');
    // console.log('decodedToken', decodedToken);

    // Check if the decoded token matches the   expected secret token
    if (decodedToken === process.env.AUTH_TOKEN) {
      // Token is valid, continue to the next middleware
      return next();
    }
  }

  // Token is invalid or not provided, send 401 Unauthorized response
  res.set('WWW-Authenticate', 'Basic realm="Authentication Required"');
  return res.sendStatus(401);
}