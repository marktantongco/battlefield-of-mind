#!/bin/bash

# Monitoring script for OpenClaw Moltbot deployment

echo "🔍 OpenClaw Moltbot System Status"
echo "========================"
echo ""

# System info
echo "📊 System Resources:"
echo "-------------------"
df -h / | tail -1 | awk '{print "Disk: " $3 "/" $2 " (" $5 " used)"}'
free -h | grep Mem | awk '{print "RAM: " $3 "/" $2 " used"}'
echo "CPU Load: $(uptime | awk -F'load average:' '{print $2}')"
echo ""

# Docker status
echo "🐳 Docker Services:"
echo "------------------"
cd /root/app 2>/dev/null || cd .
docker compose ps
echo ""

# Recent logs
echo "📝 Recent Logs (last 20 lines):"
echo "-------------------------------"
docker compose logs --tail=20
echo ""

# Network status
echo "🌐 Network Status:"
echo "-----------------"
netstat -tuln | grep -E ':(80|443|3000)' || echo "No services listening on ports 80, 443, or 3000"
echo ""

# SSL certificate status
if [ -f "/root/app/ssl/fullchain.pem" ]; then
    echo "🔒 SSL Certificate:"
    echo "------------------"
    openssl x509 -in /root/app/ssl/fullchain.pem -noout -dates
    echo ""
fi

echo "✅ Monitoring complete"
