import winston from 'winston';

const logFolder = 'logs';

const options: winston.LoggerOptions = {
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
      level: process.env.NODE_ENV === 'production' ? 'error' : 'debug'
    }),

    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //

    new winston.transports.File({ filename: logFolder + '/error.log', level: 'error' }),
    new winston.transports.File({ filename: logFolder + '/combined.log' })
  ],
  exceptionHandlers: [new winston.transports.File({ filename: logFolder + '/exceptions.log' })]
};

const logger = winston.createLogger(options);

if (process.env.NODE_ENV !== 'production') {
  logger.debug('Logging initialized at debug level');
}

process.on('unhandledRejection', ex => {
  console.log('WE GOT AN UNCAUGHT REJECTION');

  throw ex;
});

process.on('uncaughtException', () => {
  console.log('WE GOT AN UNCAUGHT EXCEPTION');
});

export default logger;
