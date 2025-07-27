import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import { setLogging } from '../utils/logger.js';

export const data = new SlashCommandBuilder()
  .setName('togglelogging')
  .setDescription('Enable or disable logging for this server.')
  .addBooleanOption(opt =>
    opt.setName('enabled')
      .setDescription('True to enable, false to disable')
      .setRequired(true)
  )
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function execute(interaction) {
  const enabled = interaction.options.getBoolean('enabled');
  setLogging(interaction.guildId, enabled);

  await interaction.reply({
    content: `📓 Logging is now **${enabled ? 'enabled' : 'disabled'}**.`,
    ephemeral: true
  });
}
