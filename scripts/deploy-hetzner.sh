#!/bin/bash
set -e

# OpenClaw Moltbot Hetzner Deployment Script
# Usage: ./scripts/deploy-hetzner.sh

echo "🤖 OpenClaw Moltbot Hetzner Cloud Deployment"
echo "===================================="
echo ""

# Check requirements
command -v terraform >/dev/null 2>&1 || { echo "❌ Terraform is required but not installed. Aborting."; exit 1; }
command -v ssh >/dev/null 2>&1 || { echo "❌ SSH is required but not installed. Aborting."; exit 1; }

# Check if terraform.tfvars exists
if [ ! -f "terraform/terraform.tfvars" ]; then
    echo "⚠️  terraform.tfvars not found. Creating from example..."
    cp terraform/terraform.tfvars.example terraform/terraform.tfvars
    echo "📝 Please edit terraform/terraform.tfvars with your actual values"
    echo "   Required: hcloud_token, wordpress_api_url, openai_api_key, anthropic_api_key"
    exit 1
fi

# Initialize Terraform
echo "🔧 Initializing Terraform..."
cd terraform
terraform init

# Plan deployment
echo ""
echo "📋 Planning deployment..."
terraform plan -out=tfplan

# Confirm deployment
echo ""
read -p "🚀 Deploy to Hetzner Cloud? (yes/no): " confirm
if [ "$confirm" != "yes" ]; then
    echo "❌ Deployment cancelled"
    exit 0
fi

# Apply deployment
echo ""
echo "🚀 Deploying infrastructure..."
terraform apply tfplan

# Get server IP
SERVER_IP=$(terraform output -raw server_ip)
echo ""
echo "✅ Deployment complete!"
echo ""
echo "📍 Server IP: $SERVER_IP"
echo ""
echo "⏳ Waiting 60 seconds for server initialization..."
sleep 60

# Test connection
echo "🔌 Testing connection..."
ssh -o StrictHostKeyChecking=no root@$SERVER_IP "echo '✅ SSH connection successful'"

echo ""
echo "🎉 OpenClaw Moltbot is deployed and running!"
echo ""
echo "Next steps:"
echo "  1. Update DNS to point to: $SERVER_IP"
echo "  2. Set up SSL: ssh root@$SERVER_IP 'bash /root/app/scripts/setup-ssl.sh'"
echo "  3. Access your site: http://$SERVER_IP"
echo ""
echo "Useful commands:"
echo "  - SSH into server: ssh root@$SERVER_IP"
echo "  - View logs: ssh root@$SERVER_IP 'cd /root/app && docker compose logs -f'"
echo "  - Restart services: ssh root@$SERVER_IP 'cd /root/app && docker compose restart'"
echo ""
