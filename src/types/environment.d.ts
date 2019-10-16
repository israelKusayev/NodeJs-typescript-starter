// When you add some a new key to .env file,
// you also need to update this file to get better intellisense.

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PORT?: string;
    ACCESS_TOKEN_SECRET_KEY: string;
    REFRESH_TOKEN_SECRET_KEY: string;
    ACCESS_TOKEN_EXPIRES_IN: string;
    REFRESH_TOKEN_EXPIRES_IN: string;
  }
}
