import { pingCommand } from '../commands/ping.js';
import { secureSendCommand } from '../commands/secureSend.js';
import { decryptCommand } from '../commands/decrypt.js';

export const registerHandlers = async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  switch (interaction.commandName) {
    case 'ping':
      return pingCommand(interaction);
    case 'securesend':
      return secureSendCommand(interaction);
    case 'decrypt':
      return decryptCommand(interaction);
    default:
      return interaction.reply({ content: 'Unknown command', ephemeral: true });
  }
};
