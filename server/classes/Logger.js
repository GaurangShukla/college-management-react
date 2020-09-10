import winston from "winston";
import chalk from "chalk";

/**
 * Adapter for logger
 */
class Logger {
  constructor() {
    const errorStackFormat = winston.format(err => {
      if (err.level == "error") {
        return Object.assign({}, err, {
          stack: err.stack,
          message: err.message
        });
      }
      return err;
    });

    this.logger = winston.createLogger({
      level: "info",
      format: winston.format.json(),
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            errorStackFormat(),
            winston.format.colorize(),
            winston.format.json(),
            winston.format.printf(
              info => `${info.timestamp} ${info.level}: ${info.message}`
            ),
            winston.format.simple()
          ),
          level: "info", // Local Dev to preview all logging events
          handleExceptions: true // Show exceptions in the console
        })
      ]
    });
  }

  trace(...args) {
    this.logger.trace(...args);
  }
  debug(...args) {
    this.logger.debug(...args);
  }
  info(...args) {
    this.logger.info(...args);
  }
  warn(...args) {
    this.logger.warn(...args);
  }
  error(...args) {
    this.logger.error(...args);
  }

  expressMiddleware(req, res, next) {
    console.log(
      new Date().toLocaleString() + chalk.green(` ${req.method} - ${req.url} `)
    );
    next();
  }
}

export default new Logger();
