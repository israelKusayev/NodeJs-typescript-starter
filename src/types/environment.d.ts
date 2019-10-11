// When you add some a new key to .env file,
// you also need to update this file to get better intellisense.

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PORT?: string;
    SECRET: string;
  }
}
