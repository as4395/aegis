# Aegis
### Privacy-First Discord Bot

**Aegis** is a privacy-preserving, encrypted Discord bot that replaces Discord’s default surveillance model with a zero-trust, zero-logging architecture. It implements end-to-end encryption, ephemeral messaging, anti-tracking features, and on-server user data protection.

Designed to address the structural privacy failures of Discord, Aegis encrypts messages, anonymizes users, eliminates logs, and empowers server admins with strict data controls. All features are opt-out only and hardened by default.

---

## Objectives

- Replace Discord’s unencrypted messaging with default end-to-end encrypted communication.
- Remove reliance on Discord for any form of message retention or metadata storage.
- Provide encrypted DM relays, user data masking, and ephemeral interactions.
- Operate exclusively from your own self-hosted server with no third-party calls or external telemetry.
- Encrypt sensitive user and configuration data **at rest** on the server hosting the bot.

---

## Core Capabilities

| Capability                      | Description                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| End-to-End Message Encryption    | AES-based encryption for all bot-mediated communication (server channels + DMs).|
| Encrypted DM Relay               | Secure point-to-point messaging via shared session keys.                    |
| On-Server User Data Encryption   | Sensitive identity/config data is encrypted even at rest.                  |
| Ephemeral Messaging              | Supports self-deleting messages and interactions.                          |
| Metadata Redaction               | Auto-removal of IPs, tokens, PII, Discord CDN links.                       |
| IP Grabber & Malicious Link Blocker | Filters outbound links against blocklists and regex heuristics.        |
| Anonymous ModMail                | Fully anonymized user-to-admin communication via encrypted relay.          |
| Per-Server Privacy Policy Engine | Admins can fine-tune encryption, retention, and moderation settings.       |
| Zero Logging                     | No command logs, user logs, or telemetry is ever written or stored.        |

---

## Technology Stack

- [Node.js](https://nodejs.org/en) v18+
- [discord.js](https://discord.js.org) v14
- Native `crypto` module (AES-256 encryption, optional RSA extensions)
- dotenv for environment isolation
- Custom encryption middleware and redaction logic

---

## Quickstart

### 1. Clone the Repository

```bash
git clone https://github.com/as4395/aegis.git
cd aegis
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Configure Environment Variables

Create a `.env` file:

```env
DISCORD_TOKEN=your-bot-token
CLIENT_ID=your-discord-client-id
```
> Ensure this file is never committed. It contains sensitive secrets.

## 4. Start the Bot (Development)

```bash
npm run dev
```

## 5. Start the Bot (Production)

```bash
npm run build && npm start
```

## Security Model

- End-to-end encryption is enabled by default for all bot-facilitated communication.
- Session keys are regenerated periodically and never stored long-term.
- All data at rest (such as temporary session states) is encrypted using AES-256.
- Logs, message content, and metadata are never retained.
- No external servers are contacted. No telemetry is sent.
