import { REST, Routes, SlashCommandBuilder } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const commands = [
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong.'),

  new SlashCommandBuilder()
    .setName('securesend')
    .setDescription('Send an encrypted message')
    .addStringOption(opt =>
      opt
        .setName('message')
        .setDescription('The message to encrypt and send')
        .setRequired(true)
    )
].map(command => command.toJSON());

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
