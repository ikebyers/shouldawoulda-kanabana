import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();
const JWTkey = process.env.JWT_SECRET_KEY;

if (!JWTkey) {
  throw new Error('JWTkey is not defined in environment variables');
}

export const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user: User | null = await User.findOne({ where: { username } });
    console.log("User found:", user);

    // No user found error
    if (!user) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;
    }

    // Verify password
    const validPassword = await bcrypt.compare(password, user.password);
    console.log("Password valid:", validPassword);

    // Invalid password error
    if (!validPassword) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;
    }

    // Generate JWT token
    const token = jwt.sign({ username: user.username }, JWTkey, { expiresIn: '1h' });
    console.log("Generated JWT token:", token);

    // Send the token back to the client
    res.json({ token });
  } catch (error) {
    console.error("Error during login:", error);

    // Send a 500 Internal Server Error if something goes wrong
    res.status(500).json({ error: 'An error occurred while logging in' });
  }
};

router.post('/login', login);

export default router;