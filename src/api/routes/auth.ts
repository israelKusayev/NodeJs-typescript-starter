import express from 'express';
import * as jwtService from '../../services/jwtService';
import { userManager } from '../../managers';

const router = express.Router();

/**
 * POST /api/auth/refreshToken
 * Public
 * return new access and refresh tokens
 */
router.post('/refreshToken', async (req, res) => {
  try {
    const decoded = jwtService.validateRefreshToken(req.body.refreshToken);

    if (!decoded) return res.status(401).end();
    const user = await userManager.getUserById(decoded.id);

    // Create tokens
    const [accessToken, refreshToken] = jwtService.generateAuthTokens(user);

    res.status(200).json({ accessToken, refreshToken });
  } catch {
    res.status(401).end();
  }
});

export default router;
