import { SlashCommandBuilder } from 'discord.js';
import { encrypt } from '../crypto/aes.js';
import { getSessionKey } from '../utils/sessionStore.js';
import { scheduleRedaction } from '../utils/redactScheduler.js';
import { log } from '../utils/logger.js';

export const data = new SlashCommandBuilder()
  .setName('securesend')
  .setDescription('Send an encrypted message')
  .addStringOption(opt =>
    opt.setName('message')
      .setDescription('The message to encrypt and send')
      .setRequired(true)
  )
  .addUserOption(opt =>
    opt.setName('recipient')
      .setDescription('User to send encrypted message to (optional)')
      .setRequired(false)
  );

export async function execute(interaction) {
  const message = interaction.options.getString('message');
  const recipient = interaction.options.getUser('recipient');
  const guildId = interaction.guildId;

  const key = getSessionKey(guildId);
  const encrypted = encrypt(message, key);

  const content = `🔐 **Encrypted Message:**\n\`${encrypted}\``;
  log(guildId, `Encrypted message sent: ${encrypted.slice(0, 16)}...`);

  try {
    if (recipient) {
      await recipient.send({ content });
      await interaction.reply({ content: `✅ Encrypted message sent to ${recipient.tag}.`, ephemeral: true });
    } else {
      const sent = await interaction.reply({ content, ephemeral: false, fetchReply: true });
      scheduleRedaction(sent, 60); // auto-redact after 60s
    }
  } catch (err) {
    console.error('[!] Failed to send encrypted message:', err);
    await interaction.reply({ content: '❌ Failed to send message. Check bot DM permissions.', ephemeral: true });
  }
}
