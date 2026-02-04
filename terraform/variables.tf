variable "hcloud_token" {
  description = "Hetzner Cloud API Token"
  type        = string
  sensitive   = true
}

variable "ssh_public_key_path" {
  description = "Path to SSH public key"
  type        = string
  default     = "~/.ssh/id_rsa.pub"
}

variable "server_type" {
  description = "Hetzner server type"
  type        = string
  default     = "cx22"  # 2 vCPU, 4GB RAM, 40GB SSD - €5.83/month
}

variable "location" {
  description = "Server location"
  type        = string
  default     = "nbg1"  # Nuremberg, Germany (closest to Philippines is fsn1)
}

variable "wordpress_api_url" {
  description = "WordPress API URL"
  type        = string
}

variable "openai_api_key" {
  description = "OpenAI API Key"
  type        = string
  sensitive   = true
}

variable "openclaw_api_key" {
  description = "OpenClaw API Key (https://openclaw.ai) for Moltbot"
  type        = string
  sensitive   = true
}

variable "openclaw_api_url" {
  description = "OpenClaw API URL"
  type        = string
  default     = "https://api.openclaw.ai"
}

variable "stripe_publishable_key" {
  description = "Stripe Publishable Key"
  type        = string
  default     = ""
}

variable "site_url" {
  description = "Site URL"
  type        = string
}

variable "site_name" {
  description = "Site Name"
  type        = string
  default     = "AI Blog Platform"
}

variable "site_description" {
  description = "Site Description"
  type        = string
  default     = "AI-powered blog platform"
}
