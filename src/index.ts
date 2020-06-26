import './config/env';

import express from 'express';

import routes from './api';
import logger from './utils/logger';

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
