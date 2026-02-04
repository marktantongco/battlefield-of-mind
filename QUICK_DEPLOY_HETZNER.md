# 🚀 Quick Deploy to Hetzner (YOLO Mode)

## Prerequisites (5 minutes)

1. **Get Hetzner API Token**
   - Go to https://console.hetzner.cloud/
   - Projects → Your Project → Security → API Tokens
   - Generate new token → Copy it

2. **Get OpenClaw API Key (for Moltbot AI features)**
   - Go to https://openclaw.ai
   - Sign up and connect your chat app (WhatsApp/Telegram)
   - Get your API key from the dashboard

3. **Install Terraform** (if not installed)
   ```bash
   # macOS
   brew install terraform
   
   # Linux
   wget https://releases.hashicorp.com/terraform/1.6.0/terraform_1.6.0_linux_amd64.zip
   unzip terraform_1.6.0_linux_amd64.zip
   sudo mv terraform /usr/local/bin/
   ```

## Deploy in 3 Commands

```bash
# 1. Configure your deployment
cp terraform/terraform.tfvars.example terraform/terraform.tfvars
nano terraform/terraform.tfvars  # Edit with your API keys

# 2. Make deploy script executable
chmod +x scripts/deploy-hetzner.sh

# 3. Deploy! 🚀
./scripts/deploy-hetzner.sh
```

## What Gets Deployed

✅ Hetzner Cloud Server (CX22 - €5.83/month)
✅ Docker + Docker Compose
✅ Nginx reverse proxy
✅ Your Next.js app
✅ Automatic SSL (after DNS setup)
✅ Firewall configured
✅ Auto-updates enabled

## After Deployment

1. **Note your server IP** (shown at end of deployment)
2. **Test your site**: `http://YOUR_IP`
3. **Point your domain** to the IP (A record)
4. **Enable SSL**:
   ```bash
   ssh root@YOUR_IP
   cd /root/app
   bash scripts/setup-ssl.sh yourdomain.com
   ```

## Useful Commands

```bash
# View logs
ssh root@YOUR_IP 'cd /root/app && docker compose logs -f'

# Restart services
ssh root@YOUR_IP 'cd /root/app && docker compose restart'

# Monitor system
ssh root@YOUR_IP 'bash /root/app/scripts/monitor.sh'

# Update app
ssh root@YOUR_IP 'bash /root/app/scripts/update.sh'

# Backup
ssh root@YOUR_IP 'bash /root/app/scripts/backup.sh'
```

## Cost

- **Server**: €5.83/month (CX22 - 2 vCPU, 4GB RAM)
- **Storage**: €0.50/month (10GB volume)
- **Total**: ~€6.33/month

## Troubleshooting

**Can't connect to server?**
```bash
# Check server status in Hetzner console
# Wait 2-3 minutes after deployment
```

**Site not loading?**
```bash
ssh root@YOUR_IP
docker compose ps  # Check if services are running
docker compose logs app  # Check logs
```

**Need help?**
See full guide: `HETZNER_DEPLOYMENT.md`

---

**That's it! Your OpenClaw Moltbot is live! 🎉**
