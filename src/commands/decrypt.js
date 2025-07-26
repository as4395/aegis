import { decryptMessage } from '../crypto/aes.js';

export const decryptCommand = async (interaction) => {
  const input = interaction.options.getString('encrypted');

  if (!input) {
    return interaction.reply({
      content: 'No input provided.',
      ephemeral: true,
    });
  }

  try {
    const decrypted = decryptMessage(input);
    await interaction.reply({
      content: `Decrypted message:\n\`${decrypted}\``,
      ephemeral: true,
    });
  } catch (error) {
    await interaction.reply({
      content: 'Decryption failed. Invalid input or key.',
      ephemeral: true,
    });
  }
};
