export const redactSensitive = (text) => {
  const patterns = [
    /\b(?:\d{1,3}\.){3}\d{1,3}\b/g,         // IP addresses
    /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, // Emails
    /discord(?:\.gg|app\.com\/invite)\/\w+/g, // Discord invite links
    /\b[a-zA-Z0-9-_]{24}\.[\w-]{6}\.[\w-]{27}\b/g // Discord tokens
  ];

  let output = text;
  for (const regex of patterns) {
    output = output.replace(regex, '[REDACTED]');
  }
  return output;
};
