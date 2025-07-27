const loggingMap = new Map();

export function shouldLog(guildId) {
  return loggingMap.get(guildId) === true;
}

export function setLogging(guildId, enabled) {
  loggingMap.set(guildId, enabled);
}

export function log(guildId, msg) {
  if (shouldLog(guildId)) {
    console.log(`[${guildId}] ${msg}`);
  }
}
