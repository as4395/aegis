// Basic in-memory session store
const sessionMap = new Map();

export const getSession = (guildId) => {
  if (!sessionMap.has(guildId)) {
    sessionMap.set(guildId, { createdAt: Date.now(), keys: {} });
  }
  return sessionMap.get(guildId);
};

export const setSession = (guildId, data) => {
  sessionMap.set(guildId, { ...data, updatedAt: Date.now() });
};
