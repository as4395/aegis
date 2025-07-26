import dotenv from 'dotenv';
dotenv.config();

export const config = {
  token: process.env.DISCORD_TOKEN,
  clientId: process.env.CLIENT_ID,
  sessionSecret: process.env.SESSION_SECRET || 'default_fallback_secret',
  logLevel: process.env.LOG_LEVEL || 'info'
};
