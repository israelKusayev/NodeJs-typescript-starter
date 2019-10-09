import express from 'express';
import logger from './utils/logger';

const app = express();

const port = process.env.PORT || 4000;

/**
 * Start Express server.
 */
const server = app.listen(port, () => logger.info('listening on http://localhost:' + port));

export default server;
