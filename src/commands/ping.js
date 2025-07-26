export const pingCommand = async (interaction) => {
  await interaction.reply({ content: 'Pong.', ephemeral: true });
};
