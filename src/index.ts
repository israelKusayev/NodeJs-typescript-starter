import express from 'express';

const app = express();

const port = process.env.PORT || 4000;

/**
 * Start Express server.
 */
const server = app.listen(port, () => console.info('listening on http://localhost:' + port));

export default server;
