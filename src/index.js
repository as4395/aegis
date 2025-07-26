// Entry point for the bot
import { client } from './client.js';
import { registerHandlers } from './handlers/interactionHandler.js';
import { onReady } from './handlers/readyHandler.js';
import dotenv from 'dotenv';

dotenv.config();

client.once('ready', onReady);
client.on('interactionCreate', registerHandlers);

// Start bot
client.login(process.env.DISCORD_TOKEN);
