import { encryptMessage } from '../crypto/aes.js';

export const secureSendCommand = async (interaction) => {
  const content = interaction.options.getString('message');

  if (!content) {
    return interaction.reply({ content: 'No message provided.', ephemeral: true });
  }

  const encrypted = encryptMessage(content);

  await interaction.reply({
    content: `Encrypted message: \n\`${encrypted}\``,
    ephemeral: true
  });
};
