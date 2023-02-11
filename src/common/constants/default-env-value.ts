import { name } from '../../../package.json';
import { config } from 'dotenv';

config();

export const DEFAULT_ENV_VALUES = {
  DEFAULT: {
    NAME: name,
    ENV: process.env.NODE_ENV || 'dev',
    HOST: process.env.HOST || 'localhost',
    PORT: Number(process.env.PORT || 3000),
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
    BODY_LIMIT: Number(process.env.BODY_LIMIT || 10240),
    SERVER_KEEP_ALIVE_TIMEOUT: Number(
      process.env.SERVER_KEEP_ALIVE_TIMEOUT || 120000,
    ),
    POSTGRES_PORT: Number(process.env.POSTGRES_PORT || 5432),
    DATABASE_NAME: process.env.DATABASE_NAME || 'kraken',
    POSTGRES_USERNAME: process.env.POSTGRES_USERNAME || 'postgres',
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'postgres',
    POSTGRES_HOST: process.env.POSTGRES_HOST || 'localhost',
    SWAGGER_ENABLED:
      (process.env.SWAGGER_ENABLED || 'false').trim().toLowerCase() === 'true',
    API_KEY: process.env.API_KEY || 'EltgJ5G8m44IzwE6UN2Y4B4NjPW77Zk6FJK3lL23',
  },
};
