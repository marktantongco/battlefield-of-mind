# 🤖 OpenClaw Moltbot on Hetzner Cloud

This directory contains everything you need to deploy your AI-powered blog platform on Hetzner Cloud with Claude (OpenClaw Moltbot) integration.

## 📂 What's Included

```
.
├── Dockerfile                    # Docker container configuration
├── docker-compose.yml            # Multi-container orchestration
├── nginx.conf                    # Nginx reverse proxy config
├── .dockerignore                 # Docker build exclusions
├── terraform/                    # Infrastructure as Code
│   ├── main.tf                  # Main Terraform configuration
│   ├── variables.tf             # Variable definitions
│   ├── cloud-init.yaml          # Server initialization script
│   └── terraform.tfvars.example # Example configuration
├── scripts/                      # Deployment & management scripts
│   ├── deploy-hetzner.sh        # One-command deployment
│   ├── setup-ssl.sh             # SSL certificate setup
│   ├── monitor.sh               # System monitoring
│   ├── update.sh                # Update deployment
│   └── backup.sh                # Backup script
└── docs/
    ├── HETZNER_DEPLOYMENT.md    # Comprehensive deployment guide
    └── QUICK_DEPLOY_HETZNER.md # Quick start guide
```

## 🚀 Quick Start

See [QUICK_DEPLOY_HETZNER.md](QUICK_DEPLOY_HETZNER.md) for the fastest way to deploy.

## 📚 Documentation

- **[QUICK_DEPLOY_HETZNER.md](QUICK_DEPLOY_HETZNER.md)** - 5-minute deployment guide
- **[HETZNER_DEPLOYMENT.md](HETZNER_DEPLOYMENT.md)** - Complete deployment documentation
- **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** - General deployment checklist

## 🎯 Why Hetzner?

- ✅ **Cost-effective**: Starting at €5.83/month
- ✅ **European data centers**: GDPR compliant
- ✅ **Fast deployment**: From zero to production in 10 minutes
- ✅ **Excellent performance**: NVMe SSDs, AMD EPYC CPUs
- ✅ **Simple pricing**: No hidden costs
- ✅ **Great support**: Responsive and helpful

## 🔑 Prerequisites

1. Hetzner Cloud account + API token
2. OpenClaw API key from https://openclaw.ai (for Moltbot AI features)
3. Terraform installed locally
4. SSH key pair
5. (Optional) Domain name

## 💰 Pricing

| Server Type | vCPU | RAM | Storage | Price/month |
|-------------|------|-----|---------|-------------|
| CX22 ⭐     | 2    | 4GB | 40GB    | €5.83       |
| CX32        | 4    | 8GB | 80GB    | €11.66      |
| CX42        | 8    | 16GB| 160GB   | €23.31      |

**Recommended**: CX22 for starting out, upgrade as needed.

## 🌟 Features

### Infrastructure
- Automated server provisioning with Terraform
- Docker containerization
- Nginx reverse proxy with caching
- Automatic SSL with Let's Encrypt
- UFW firewall configuration
- Rate limiting and DDoS protection

### Application
- Next.js optimized for production
- Claude AI integration (OpenClaw Moltbot)
- OpenAI integration (optional)
- WordPress headless CMS support
- Image optimization
- SEO optimized
- Monetization ready (Stripe, affiliates)

### Management
- One-command deployment
- Automated backups
- System monitoring scripts
- Easy updates via Git pull
- Log aggregation
- Health checks

## 🔒 Security

- SSH key authentication only (no passwords)
- Firewall enabled by default
- Rate limiting on all endpoints
- SSL/TLS encryption
- Docker security best practices
- Non-root containers
- Regular security updates

## 📊 Monitoring

Built-in monitoring script shows:
- System resources (CPU, RAM, Disk)
- Docker service status
- Application logs
- Network status
- SSL certificate expiry

Run: `ssh root@YOUR_IP 'bash /root/app/scripts/monitor.sh'`

## 🔄 Updates

Update your deployment with one command:

```bash
ssh root@YOUR_IP 'bash /root/app/scripts/update.sh'
```

This will:
1. Pull latest code from Git
2. Pull latest Docker images
3. Rebuild and restart services
4. Clean up old images

## 💾 Backups

Automated backups include:
- Environment configuration
- Docker Compose files
- Nginx configuration
- SSL certificates

Backups are stored in `/backups` and kept for 7 days.

Manual backup:
```bash
ssh root@YOUR_IP 'bash /root/app/scripts/backup.sh'
```

## 🆘 Support

### Common Issues

**Deployment fails**
- Check Hetzner API token is valid
- Verify all required variables in terraform.tfvars
- Ensure SSH key exists at specified path

**Application won't start**
- Check Docker logs: `docker compose logs`
- Verify environment variables are set
- Ensure sufficient disk space

**SSL setup fails**
- Confirm DNS is pointing to server IP
- Wait for DNS propagation (up to 30 minutes)
- Check port 80 is accessible

### Getting Help

1. Check logs: `docker compose logs`
2. Run monitor script: `bash scripts/monitor.sh`
3. Review [HETZNER_DEPLOYMENT.md](HETZNER_DEPLOYMENT.md)
4. Create GitHub issue with logs

## 🎓 Learn More

- [Hetzner Cloud Docs](https://docs.hetzner.com/cloud/)
- [Terraform Docs](https://www.terraform.io/docs)
- [Docker Docs](https://docs.docker.com/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

## 📝 License

MIT License - see LICENSE file for details

---

**Ready to deploy? Start with [QUICK_DEPLOY_HETZNER.md](QUICK_DEPLOY_HETZNER.md)! 🚀**
