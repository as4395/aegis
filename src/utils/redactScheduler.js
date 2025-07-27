import { setTimeout } from 'node:timers/promises';

// Redact a message after N seconds (e.g. 60)
export async function scheduleRedaction(message, delaySec = 60) {
  try {
    await setTimeout(delaySec * 1000);
    await message.delete();
  } catch (err) {
    console.warn('[!] Failed to auto-redact message:', err.message);
  }
}
