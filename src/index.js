import { client } from './client.js';
import { registerHandlers } from './handlers/interactionHandler.js';
import { onReady } from './handlers/readyHandler.js';
import { setupMessageRedaction } from './handlers/messageHandler.js';
import dotenv from 'dotenv';

dotenv.config();

client.once('ready', onReady);
client.on('interactionCreate', registerHandlers);

// Set up real-time message redaction
setupMessageRedaction(client);

client.login(process.env.DISCORD_TOKEN);
