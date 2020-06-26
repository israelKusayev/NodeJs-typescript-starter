import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { getTokenFromHeader } from './../../utils/common';

// Authentication middleware
export default function (req: Request, res: Response, next: NextFunction) {
  const token = getTokenFromHeader(req);

  // Check for token
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY) as User;
    if (!decoded) return res.status(401).json({ msg: 'Token is not valid' });

    // Attach user to req.user
    req.user = { ...decoded };
    next();
  } catch {
    res.status(401).json({ msg: 'Token is not valid' });
  }
}
