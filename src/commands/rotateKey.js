import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import { rotateKey } from '../utils/sessionStore.js';

export const data = new SlashCommandBuilder()
  .setName('rotatekey')
  .setDescription('Rotate the encryption key for this server.')
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  rotateKey(interaction.guildId);
  await interaction.reply({
    content: '🔐 Encryption key has been rotated for this server.',
    ephemeral: true
  });
}
