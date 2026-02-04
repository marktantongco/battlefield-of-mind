#!/bin/bash
set -e

# Update script for OpenClaw Moltbot deployment

echo "🔄 Updating OpenClaw Moltbot"
echo "==================="
echo ""

cd /root/app 2>/dev/null || cd .

# Pull latest changes
echo "📥 Pulling latest code..."
git pull

# Backup current environment
cp .env .env.backup

# Pull latest images
echo "🐳 Pulling Docker images..."
docker compose pull

# Rebuild and restart
echo "🔨 Rebuilding services..."
docker compose up -d --build

# Clean up old images
echo "🧹 Cleaning up..."
docker image prune -f

echo ""
echo "✅ Update complete!"
echo ""
echo "View logs: docker compose logs -f"
echo ""
