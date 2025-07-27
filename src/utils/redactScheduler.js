import { setTimeout } from 'node:timers/promises';

// Auto-delete a message after N seconds
export async function scheduleRedaction(message, delaySec = 60) {
  try {
    await setTimeout(delaySec * 1000);
    await message.delete();
  } catch (err) {
    console.warn('[!] Failed to auto-redact message:', err.message);
  }
}
