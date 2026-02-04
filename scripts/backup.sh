#!/bin/bash
set -e

# Backup script for OpenClaw Moltbot deployment

BACKUP_DIR="/backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="openclaw_moltbot_backup_${TIMESTAMP}.tar.gz"

echo "💾 Creating Backup"
echo "=================="
echo ""

# Create backup directory
mkdir -p $BACKUP_DIR

cd /root/app 2>/dev/null || cd .

# Backup application data and configuration
echo "📦 Backing up application..."
tar -czf ${BACKUP_DIR}/${BACKUP_FILE} \
    --exclude='node_modules' \
    --exclude='.next' \
    --exclude='.git' \
    .env \
    docker-compose.yml \
    nginx.conf \
    ssl/

echo "✅ Backup created: ${BACKUP_DIR}/${BACKUP_FILE}"
echo ""

# Keep only last 7 backups
echo "🧹 Cleaning old backups (keeping last 7)..."
cd $BACKUP_DIR
ls -t openclaw_moltbot_backup_*.tar.gz | tail -n +8 | xargs -r rm

echo ""
echo "📊 Available backups:"
ls -lh $BACKUP_DIR/openclaw_moltbot_backup_*.tar.gz 2>/dev/null || echo "No backups found"
echo ""
