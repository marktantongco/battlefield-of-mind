#!/bin/bash
set -e

# SSL Setup Script for Hetzner deployment
# Run this on the server after DNS is configured

echo "🔒 SSL Certificate Setup"
echo "========================"
echo ""

# Check if domain is provided
if [ -z "$1" ]; then
    echo "Usage: ./setup-ssl.sh yourdomain.com"
    exit 1
fi

DOMAIN=$1

echo "Setting up SSL for: $DOMAIN"
echo ""

# Install certbot
apt-get update
apt-get install -y certbot

# Stop nginx temporarily
cd /root/app
docker compose stop nginx

# Get certificate
certbot certonly --standalone \
    -d $DOMAIN \
    --non-interactive \
    --agree-tos \
    --email admin@$DOMAIN \
    --preferred-challenges http

# Create SSL directory
mkdir -p /root/app/ssl

# Copy certificates
cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem /root/app/ssl/
cp /etc/letsencrypt/live/$DOMAIN/privkey.pem /root/app/ssl/

# Update nginx configuration to enable HTTPS
sed -i 's/# return 301/return 301/' /root/app/nginx.conf
sed -i 's/# server {/server {/' /root/app/nginx.conf
sed -i 's/#     listen 443/    listen 443/' /root/app/nginx.conf
sed -i 's/#     server_name/    server_name/' /root/app/nginx.conf
sed -i 's/#     ssl_/    ssl_/' /root/app/nginx.conf
sed -i 's/#     location/    location/' /root/app/nginx.conf
sed -i 's/#     }/    }/' /root/app/nginx.conf
sed -i 's/# }/}/' /root/app/nginx.conf

# Update server_name
sed -i "s/server_name _;/server_name $DOMAIN;/" /root/app/nginx.conf

# Restart services
docker compose up -d

# Set up auto-renewal
echo "0 0 1 * * certbot renew --quiet && cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem /root/app/ssl/ && cp /etc/letsencrypt/live/$DOMAIN/privkey.pem /root/app/ssl/ && cd /root/app && docker compose restart nginx" | crontab -

echo ""
echo "✅ SSL certificate installed successfully!"
echo ""
echo "Your site is now available at:"
echo "  https://$DOMAIN"
echo ""
echo "Certificate auto-renewal is configured."
echo ""
