import pino from 'pino';
import { createDatetime } from './datetime-config';

export const createLogger = (context = {}) => {
  const logger = pino({
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    formatters: {
      level: (label: string) => ({ level: label }),
    },
    timestamp: () => `,"timestamp":"${createDatetime()}"`,
    base: {
      pid: process.pid,
    },
  });

  return logger.child({
    ...context,
  });
};
