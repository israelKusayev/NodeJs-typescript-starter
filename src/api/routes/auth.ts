import express from 'express';
import { userService } from '../../services';
const router = express.Router();

/**
 * POST /api/auth/login
 * Public
 * Login with username and password
 */
router.post('/login', async function(req, res) {
  const { email, password }: { email: string; password: string } = req.body;

  // Simple validation
  if (!email || !password) return res.status(400).json({ msg: 'all fields are required' });

  // Check for existing user
  const user = await userService.getUserByEmail(email);
  if (!user) return res.status(400).json({ msg: 'username does not exist' });

  //   // Validate password
  //   const valid = await user.comparePassword(password);
  //   if (!valid) return res.status(400).json({ msg: 'invalid password' });

  //   // Create token
  //   const tokens = await user.generateAuthTokens();
  return res.json({ msg: 'hii' });
  //   return res.status(200).json({ accessToken: tokens[0], refreshToken: tokens[1] });
});

export default router;
