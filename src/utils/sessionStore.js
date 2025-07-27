import crypto from 'crypto';

const sessionKeys = new Map();

function generateKey() {
  return crypto.randomBytes(32); // AES-256
}

export function getSessionKey(guildId) {
  if (!sessionKeys.has(guildId)) {
    sessionKeys.set(guildId, generateKey());
  }
  return sessionKeys.get(guildId);
}

export function rotateKey(guildId) {
  const newKey = generateKey();
  sessionKeys.set(guildId, newKey);
  return newKey;
}
