#!/bin/bash

echo "[*] Starting Aegis Discord bot..."
if [ ! -f .env ]; then
  echo "[!] Missing .env file. Please create one using requirements/.env.example"
  exit 1
fi
