import { Request, Response } from 'express';
import logger from '../../utils/logger';
import { NextFunction } from 'connect';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function(err: any, req: Request, res: Response, next: NextFunction) {
  logger.error('Exception caught in error middleware - ', err);
  res.status(500).json({ msg: 'Something failed' });
}
