# Hetzner Cloud Configuration
# IMPORTANT: Replace all placeholder values with your actual credentials

# Get your Hetzner API token from: https://console.hetzner.cloud/
# Projects → Your Project → Security → API Tokens → Generate API Token
hcloud_token = "REPLACE_WITH_YOUR_HETZNER_API_TOKEN"

# Server Configuration
server_type = "cx22"      # €5.83/month - 2 vCPU, 4GB RAM, 40GB SSD (recommended to start)
                          # Options: cx22, cx32 (€11.66), cx42 (€23.31)
location    = "fsn1"      # Falkenstein, Germany (good for global reach)
                          # Options: fsn1, nbg1 (Nuremberg), hel1 (Helsinki)

# SSH Configuration (auto-detected, change if needed)
ssh_public_key_path = "~/.ssh/id_rsa.pub"

# Application Configuration

# WordPress API URL - Your WordPress site's REST API endpoint
# Example: https://yourblog.wordpress.com/wp-json
wordpress_api_url = "https://your-wordpress-site.com/wp-json"

# OpenAI API Key - Get from https://platform.openai.com/api-keys
# Used for content generation, SEO optimization, etc.
openai_api_key = "sk-REPLACE_WITH_YOUR_OPENAI_KEY"

# OpenClaw API Key - Get from https://openclaw.ai
# Used for Claude AI (Moltbot) - content analysis, suggestions
openclaw_api_key = "REPLACE_WITH_YOUR_OPENCLAW_API_KEY"
openclaw_api_url = "https://api.openclaw.ai"  # Default OpenClaw API endpoint

# Site Configuration
site_url         = "http://YOUR_SERVER_IP_WILL_GO_HERE"  # Update after deployment
site_name        = "My AI Blog Platform"
site_description = "AI-powered content creation with OpenClaw Moltbot"

# Optional: Stripe for Monetization
# Get from https://dashboard.stripe.com/apikeys
# Start with test keys (pk_test_...), switch to live when ready
stripe_publishable_key = ""  # Optional: pk_test_... or pk_live_...
