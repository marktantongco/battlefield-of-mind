terraform {
  required_providers {
    hcloud = {
      source  = "hetznercloud/hcloud"
      version = "~> 1.45"
    }
  }
}

provider "hcloud" {
  token = var.hcloud_token
}

# SSH Key
resource "hcloud_ssh_key" "default" {
  name       = "openclaw-moltbot-key"
  public_key = file(var.ssh_public_key_path)
}

# Firewall
resource "hcloud_firewall" "web" {
  name = "web-firewall"

  rule {
    direction = "in"
    protocol  = "tcp"
    port      = "22"
    source_ips = [
      "0.0.0.0/0",
      "::/0"
    ]
  }

  rule {
    direction = "in"
    protocol  = "tcp"
    port      = "80"
    source_ips = [
      "0.0.0.0/0",
      "::/0"
    ]
  }

  rule {
    direction = "in"
    protocol  = "tcp"
    port      = "443"
    source_ips = [
      "0.0.0.0/0",
      "::/0"
    ]
  }

  rule {
    direction = "in"
    protocol  = "icmp"
    source_ips = [
      "0.0.0.0/0",
      "::/0"
    ]
  }
}

# Server
resource "hcloud_server" "openclaw_moltbot" {
  name        = "openclaw-moltbot-server"
  server_type = var.server_type
  image       = "ubuntu-22.04"
  location    = var.location
  ssh_keys    = [hcloud_ssh_key.default.id]
  firewall_ids = [hcloud_firewall.web.id]

  user_data = templatefile("${path.module}/cloud-init.yaml", {
    docker_compose = file("${path.module}/../docker-compose.yml")
    nginx_conf     = file("${path.module}/../nginx.conf")
    env_vars       = {
      WORDPRESS_API_URL           = var.wordpress_api_url
      OPENAI_API_KEY             = var.openai_api_key
      OPENCLAW_API_KEY           = var.openclaw_api_key
      OPENCLAW_API_URL           = var.openclaw_api_url
      STRIPE_PUBLISHABLE_KEY     = var.stripe_publishable_key
      SITE_URL                   = var.site_url
      SITE_NAME                  = var.site_name
      SITE_DESCRIPTION           = var.site_description
    }
  })

  labels = {
    environment = "production"
    service     = "openclaw-moltbot"
  }
}

# Volume for persistent data
resource "hcloud_volume" "storage" {
  name      = "openclaw-moltbot-storage"
  size      = 10
  server_id = hcloud_server.openclaw_moltbot.id
  automount = true
  format    = "ext4"
}

output "server_ip" {
  value       = hcloud_server.openclaw_moltbot.ipv4_address
  description = "The public IP address of the server"
}

output "server_name" {
  value       = hcloud_server.openclaw_moltbot.name
  description = "The name of the server"
}
