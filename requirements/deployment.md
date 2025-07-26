# Aegis Deployment Guide

This guide outlines the secure deployment of Aegis, a self-hosted privacy-first Discord bot.

---

## 1. Prerequisites

- Node.js v18 or later
- npm (bundled with Node.js)
- A secure, updated Linux server (Ubuntu 22.04+ recommended)
- A Discord Bot Token and Client ID from the Discord Developer Portal

---

## 2. Setup Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/as4395/aegis.git
cd aegis
```

### Step 2: Install Dependencies

```bash
npm intstall
```

### Step 3: Configure Environment Variables

Copy the example template:

```bash
cp requirements/env.example .env
```

Then edit `.env` with your token and IDs.
> Make sure `.env` is never committed to version control.

## 3. Secure the Host Machine

- Run system updates:

```bash
chmod 600 .env
sudo apt update && sudo apt upgrade
```

- Ensure the firewall is enabled:

```bash
sudo ufw allow OpenSSH
sudo ufw enable
```

- Create a separate Linux user (optional but recommended):

```bash
sudo adduser aegis
sudo usermod -aG sudo aegis
```

- Lock file permissions:

```bash
chmod 600 .env
```

## 4. Running the Bot

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm run build && npm start
```

## 5. Recommended Hardening Steps

- Install `fail2ban` for SSH protection.

- Set up automatic security updates (`unattended-upgrades`).

- Use a reverse proxy or secure tunnel (e.g., ProtonVPN) if planning to expose web components later.

- Avoid deploying this bot in shared hosting environments.

## 6. Logs and Monitoring

- No logs are written by default unless explicitly enabled. You can redirect output:

```bash
npm run start >> logs/aegis.log 2>&1
```
Avoid this if strict privacy is required.

## 7. Optional (Systemd Service)

Create a service at `/etc/systemd/system/aegis.service`:

```bash
[Unit]
Description=Aegis Discord Privacy Bot
After=network.target

[Service]
Type=simple
User=aegis
WorkingDirectory=/home/aegis/aegis
ExecStart=/usr/bin/npm start
Restart=always
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```
Then
```bash
sudo systemctl daemon-reexec
sudo systemctl enable aegis
sudo systemctl start aegis
```



