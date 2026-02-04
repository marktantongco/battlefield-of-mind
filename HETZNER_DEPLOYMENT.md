# 🤖 OpenClaw Moltbot Hetzner Cloud Deployment Guide

Complete guide for deploying your AI-powered blog platform on Hetzner Cloud with Claude (OpenClaw Moltbot) integration.

## 📋 Prerequisites

1. **Hetzner Cloud Account**
   - Sign up at https://www.hetzner.com/cloud
   - Generate API token in Cloud Console → Security → API Tokens

2. **Local Requirements**
   - Terraform installed: `brew install terraform` (Mac) or download from terraform.io
   - SSH key pair: `ssh-keygen -t rsa -b 4096` if you don't have one
   - Git installed

3. **API Keys Required**
   - Hetzner Cloud API token
   - OpenClaw API key: https://openclaw.ai (for Moltbot AI features)
   - OpenAI API key (optional): https://platform.openai.com/
   - WordPress site URL (if using headless WordPress)

## 🚀 Quick Start (YOLO Mode)

```bash
# 1. Clone your repository
git clone https://github.com/yourusername/ai-blog-platform.git
cd ai-blog-platform

# 2. Configure Terraform
cp terraform/terraform.tfvars.example terraform/terraform.tfvars
nano terraform/terraform.tfvars  # Edit with your values

# 3. Deploy everything
chmod +x scripts/deploy-hetzner.sh
./scripts/deploy-hetzner.sh
```

## 📝 Detailed Setup

### Step 1: Configure terraform.tfvars

Edit `terraform/terraform.tfvars`:

```hcl
# Hetzner Cloud API Token (from Hetzner Console)
hcloud_token = "your-hetzner-api-token"

# Server Configuration
server_type = "cx22"      # €5.83/month - 2 vCPU, 4GB RAM, 40GB SSD
location    = "fsn1"      # Germany (closest to Europe/Asia)

# Your SSH public key path
ssh_public_key_path = "~/.ssh/id_rsa.pub"

# Application Configuration
wordpress_api_url = "https://your-wordpress-site.com/wp-json"
openai_api_key    = "sk-..."              # OpenAI API key (optional)
openclaw_api_key  = "your-openclaw-key"   # OpenClaw API key (required for AI features)
openclaw_api_url  = "https://api.openclaw.ai"  # OpenClaw API endpoint

# Site Configuration
site_url         = "http://your-ip-or-domain.com"
site_name        = "My AI Blog"
site_description = "AI-powered content platform with OpenClaw Moltbot"

# Optional: Monetization
stripe_publishable_key = "pk_test_..."
```

### Step 2: Deploy Infrastructure

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

This creates:
- ✅ Hetzner Cloud server (CX22 or your choice)
- ✅ Firewall rules (SSH, HTTP, HTTPS)
- ✅ 10GB volume for persistent storage
- ✅ Automated Docker deployment
- ✅ Nginx reverse proxy
- ✅ Auto-updates via cron

### Step 3: Get Server IP

```bash
terraform output server_ip
# Note this IP address
```

### Step 4: Update next.config.js

Update `next.config.js` to enable standalone mode for Docker:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // ... rest of config
}
```

### Step 5: Setup SSL (After DNS Configuration)

```bash
# SSH into your server
ssh root@YOUR_SERVER_IP

# Run SSL setup script
cd /root/app
bash scripts/setup-ssl.sh yourdomain.com
```

## 🔧 Server Management

### SSH Access
```bash
ssh root@YOUR_SERVER_IP
```

### View Logs
```bash
ssh root@YOUR_SERVER_IP
cd /root/app
docker compose logs -f        # Follow all logs
docker compose logs -f app    # Follow app logs only
```

### Restart Services
```bash
ssh root@YOUR_SERVER_IP
cd /root/app
docker compose restart        # Restart all
docker compose restart app    # Restart app only
```

### Update Deployment
```bash
ssh root@YOUR_SERVER_IP
bash /root/app/scripts/update.sh
```

### Monitor System
```bash
ssh root@YOUR_SERVER_IP
bash /root/app/scripts/monitor.sh
```

### Backup
```bash
ssh root@YOUR_SERVER_IP
bash /root/app/scripts/backup.sh
```

## 💰 Pricing

### Hetzner Cloud Costs
- **CX22** (recommended): €5.83/month - 2 vCPU, 4GB RAM, 40GB SSD
- **CX32**: €11.66/month - 4 vCPU, 8GB RAM, 80GB SSD  
- **CX42**: €23.31/month - 8 vCPU, 16GB RAM, 160GB SSD

### Additional Costs
- Volume storage: €0.05/GB/month (10GB = €0.50/month)
- Traffic: 20TB included, then €1.19/TB
- Backup: €0.60/month (20% of server cost)

**Total estimated: ~€6-7/month for basic setup**

## 🤖 OpenClaw Moltbot Integration

The platform integrates with **OpenClaw** (https://openclaw.ai) - an AI assistant platform powered by Claude that provides:

- **Content generation and optimization** - Create high-quality blog posts
- **SEO recommendations** - Improve search rankings
- **Translation services** - Multi-language support
- **Content ideation** - Generate post ideas and outlines
- **Smart automation** - Email management, calendar, and more

### Configure OpenClaw API

1. **Sign up at https://openclaw.ai**
   - Connect via WhatsApp, Telegram, or other chat apps
   - Get your API key from the dashboard

2. **Add to `terraform/terraform.tfvars`:**
   ```hcl
   openclaw_api_key = "your-openclaw-api-key"
   openclaw_api_url = "https://api.openclaw.ai"
   ```

3. **API Integration:**
   - The helper library is at `src/lib/openclaw.ts`
   - API routes in `src/app/api/ai/` use OpenClaw
   - All AI features automatically use OpenClaw's Claude integration

### OpenClaw Features Available:
- Content generation via chat interface
- Automated email and calendar management
- Flight check-ins and travel assistance
- Multi-platform access (WhatsApp, Telegram, web)
- Enterprise-grade Claude AI capabilities

## 🔒 Security Features

- ✅ UFW firewall configured
- ✅ SSH key authentication only
- ✅ Rate limiting (10 req/s general, 5 req/s API)
- ✅ SSL/TLS encryption (after setup)
- ✅ Docker container isolation
- ✅ Non-root user in containers
- ✅ Regular security updates via unattended-upgrades

## 🌍 DNS Configuration

After deployment, point your domain to the server:

```
A Record:  @ → YOUR_SERVER_IP
A Record:  www → YOUR_SERVER_IP
```

Wait for DNS propagation (5-30 minutes), then run SSL setup.

## 🔍 Troubleshooting

### Server not responding
```bash
# Check if server is running
ssh root@YOUR_SERVER_IP
systemctl status docker
docker compose ps
```

### Application not starting
```bash
# Check logs
docker compose logs app
# Restart
docker compose restart app
```

### SSL issues
```bash
# Verify certificate
openssl s_client -connect yourdomain.com:443
# Renew manually
certbot renew --force-renewal
```

### Out of disk space
```bash
# Clean Docker
docker system prune -a
# Check usage
df -h
```

## 📊 Monitoring

### Built-in Monitoring Script
```bash
ssh root@YOUR_SERVER_IP
bash /root/app/scripts/monitor.sh
```

Shows:
- System resources (CPU, RAM, Disk)
- Docker service status
- Recent logs
- Network connections
- SSL certificate expiry

### External Monitoring (Optional)

Consider setting up:
- **UptimeRobot**: Free uptime monitoring
- **Datadog**: Application performance monitoring
- **Sentry**: Error tracking
- **Plausible/Umami**: Privacy-friendly analytics

## 🚨 Disaster Recovery

### Restore from Backup
```bash
# List backups
ls -lh /backups/

# Restore
cd /root/app
tar -xzf /backups/openclaw_moltbot_backup_TIMESTAMP.tar.gz
docker compose up -d
```

### Complete Rebuild
```bash
# On your local machine
cd terraform
terraform destroy
terraform apply
```

## 📈 Scaling

### Vertical Scaling (More Power)
```bash
# Update terraform/terraform.tfvars
server_type = "cx32"  # Upgrade to 4 vCPU, 8GB RAM

# Apply changes
terraform apply
```

### Horizontal Scaling (Multiple Servers)
Consider:
- Hetzner Load Balancer (€5.83/month)
- Database separation (managed PostgreSQL)
- Redis for caching
- CDN (Cloudflare, BunnyCDN)

## 🎯 Production Checklist

- [ ] Domain configured and SSL enabled
- [ ] Environment variables set correctly
- [ ] Backups automated (cron job included)
- [ ] Monitoring set up
- [ ] Analytics installed
- [ ] WordPress API accessible
- [ ] API keys working (test AI features)
- [ ] Firewall rules verified
- [ ] DNS records propagated
- [ ] Site accessible via HTTPS

## 🆘 Support

### Hetzner Support
- Email: support@hetzner.com
- Docs: https://docs.hetzner.com/

### Project Issues
- Create issue on GitHub
- Check logs first: `docker compose logs`

## 🎉 Success!

Your OpenClaw Moltbot-powered blog platform is now running on Hetzner Cloud! 

**Next Steps:**
1. Create your first blog post in WordPress
2. Test AI features at `/ai-tools`
3. Configure monetization (Stripe, affiliates)
4. Share your content!

---

**Cost-effective, scalable, and AI-powered. Welcome to the future of blogging! 🚀**
