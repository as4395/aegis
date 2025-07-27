import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

import * as ping from './ping.js';
import * as decrypt from './decrypt.js';
import * as secureSend from './secureSend.js';
import * as rotateKey from './rotateKey.js';
import * as toggleLogging from './toggleLogging.js';

const commands = [
  ping.data,
  decrypt.data,
  secureSend.data,
  rotateKey.data,
  toggleLogging.data
].map(cmd => cmd.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log('[*] Registering slash commands...');
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );
    console.log('[+] Commands registered successfully.');
  } catch (error) {
    console.error('[!] Failed to register commands:', error);
  }
})();
