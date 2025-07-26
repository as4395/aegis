import crypto from 'crypto';

// In-memory map of serverId => key
const sessionKeys = new Map();

// Generate a 32-byte (256-bit) random key
function generateKey() {
  return crypto.randomBytes(32);
}

// Get or generate a session key for this guild
export function getSessionKey(guildId) {
  if (!sessionKeys.has(guildId)) {
    sessionKeys.set(guildId, generateKey());
  }
  return sessionKeys.get(guildId);
}

// Manual key rotation
export function rotateKey(guildId) {
  const newKey = generateKey();
  sessionKeys.set(guildId, newKey);
  return newKey;
}
