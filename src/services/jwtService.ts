import jwt from 'jsonwebtoken';

export const generateAccessToken = (payload: string | Record<string, any>, options?: jwt.SignOptions) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
    ...options
  });
};

export const generateRefreshToken = (payload: string | Record<string, any>, options?: jwt.SignOptions) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET_KEY, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
    ...options
  });
};

export const generateAuthTokens = (user: any) => {
  delete user.password;

  // Create token
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken({ id: user.id });
  return [accessToken, refreshToken];
};

export const validateRefreshToken = (token: string): jwtPayload => {
  try {
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET_KEY) as jwtPayload;
  } catch (error) {
    return undefined;
  }
};

export type jwtPayload = {
  email: string;
  id: string;
};
