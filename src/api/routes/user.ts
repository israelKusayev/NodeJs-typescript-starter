import bcrypt from 'bcryptjs';
import express from 'express';

import { userManager } from '../../managers';
import * as jwtService from '../../services/jwtService';

const router = express.Router();

/**
 * POST /api/user/login
 * Public
 * Login with username and password
 */
router.post('/login', async function (req, res) {
  const { email, password }: { email: string; password: string } = req.body;

  // Simple validation
  if (!email || !password) return res.status(400).json({ msg: 'all fields are required' });
  [];
  // Check for existing user
  const user = await userManager.getUserByEmail(email);
  if (!user) return res.status(400).json({ msg: 'user does not exist' });

  // Validate password
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ msg: 'invalid password' });

  // Create tokens
  const [accessToken, refreshToken] = jwtService.generateAuthTokens(user);

  res.status(200).json({ accessToken, refreshToken });
});

/**
 * POST /api/user/register
 * Public
 * Creates new user and return tokens
 */
router.post('/register', async (req, res) => {
  const { email, password }: { email: string; password: string } = req.body;

  // Simple validation
  if (!email || !password) return res.status(400).json({ msg: 'all fields are required' });

  // Check for existing user
  const user = await userManager.getUserByEmail(email);
  if (user) return res.status(400).json({ msg: 'user already registered' });

  userManager.create({ email, password });

  // Create tokens
  const [accessToken, refreshToken] = jwtService.generateAuthTokens(user);

  res.status(200).json({ accessToken, refreshToken });
});

export default router;
