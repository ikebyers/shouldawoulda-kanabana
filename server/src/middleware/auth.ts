import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface JwtPayload {
  username: string;
}

const JWTkey = process.env.JWT_SECRET_KEY || '';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // TODO: verify the token exists and add the user data to the request object
  const authHeader = req.headers.authorization;
  console.log("Authorization header received:", authHeader);

  const token = authHeader && authHeader.split(' ')[1];
  console.log("Extracted token:", token); 

  if (!token) {
    return res.status(401).json({ error: 'No token provided.'})
  }

  try {
  const decoded = jwt.verify(token, JWTkey) as JwtPayload;
    req.user = decoded
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid token' })
  }
  return res.status(401).json({ error: 'Authentication failed' })
};
