import { pingCommand } from '../commands/ping.js';
import { secureSendCommand } from '../commands/secureSend.js';

export const registerHandlers = async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  switch (interaction.commandName) {
    case 'ping':
      await pingCommand(interaction);
      break;
    case 'securesend':
      await secureSendCommand(interaction);
      break;
    default:
      await interaction.reply({ content: 'Unknown command', ephemeral: true });
  }
};
