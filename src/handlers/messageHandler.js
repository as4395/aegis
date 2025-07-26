import { Events } from 'discord.js';
import { redactSensitive } from '../utils/redact.js';

export const setupMessageRedaction = (client) => {
  client.on(Events.MessageCreate, async (message) => {
    // Skip DMs, bot messages, and non-text
    if (!message.guild || message.author.bot || !message.content) return;

    const redacted = redactSensitive(message.content);
    if (redacted !== message.content) {
      try {
        await message.delete();
        await message.channel.send({
          content: `[REDACTED]: ${redacted}`,
        });
      } catch (err) {
        console.error('[!] Failed to redact message:', err);
      }
    }
  });
};
