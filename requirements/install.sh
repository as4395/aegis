#!/bin/bash
# Minimal install script for Ubuntu/Debian systems (optional script intended for fresh servers

set -e

echo "[*] Updating system..."
sudo apt update && sudo apt upgrade -y

echo "[*] Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs git

echo "[*] Cloning Aegis repo..."
git clone https://github.com/as4395/aegis.git
cd aegis

echo "[*] Installing dependencies..."
npm install

echo "[*] Setup complete. Please copy and edit .env:"
cp requirements/env.example .env
echo "[!] Edit .env and then run 'npm run dev' to start the bot."
