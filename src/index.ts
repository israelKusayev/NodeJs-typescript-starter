import express from 'express';
import logger from './utils/logger';
import routes from './api';
import './config/env';

const app = express();
routes(app);

const port = process.env.PORT || 4000;

// Start Express server.
const server = app.listen(port, () =>
  logger.info(
    `###########################################################
      🛡️  Server listening on port: ${port} in ${process.env.NODE_ENV} mode 🛡️ 
      ###########################################################`
  )
);

export default server;
