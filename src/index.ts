import express from 'express';
import logger from './utils/logger';
import routes from './api/routes';
import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
  // This error should crash whole process
  throw new Error(`⚠️  Couldn't find .env file  ⚠️`);
}

const app = express();

routes(app);

const port = process.env.PORT || 4000;

// Start Express server.
const server = app.listen(port, () => logger.info('listening on http://localhost:' + port));

export default server;
