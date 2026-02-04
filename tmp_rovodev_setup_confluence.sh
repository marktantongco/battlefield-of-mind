#!/bin/bash
# Confluence/Atlassian Setup Script for Rovo Dev
# Run this after getting your API token and site URL

echo "🔧 Atlassian/Confluence Setup for Rovo Dev"
echo "==========================================="
echo ""

# Get user input
read -p "Enter your Atlassian site URL (e.g., yourname.atlassian.net): " SITE_URL
read -p "Enter your Atlassian email (0braindrain@gmail.com): " EMAIL
read -sp "Enter your Atlassian API token (paste it here): " API_TOKEN
echo ""

# Create global auth config
cat > ~/.config/acli/global_auth_config.yaml << EOF
profiles:
  default:
    type: basic
    email: ${EMAIL}
    api_token: ${API_TOKEN}
EOF

echo "✅ Created global_auth_config.yaml"

# Create Confluence config
cat > ~/.config/acli/confluence_config.yaml << EOF
default_profile: default
site_url: https://${SITE_URL}
EOF

echo "✅ Created confluence_config.yaml"

# Create Jira config (while we're at it)
cat > ~/.config/acli/jira_config.yaml << EOF
default_profile: default
site_url: https://${SITE_URL}
EOF

echo "✅ Created jira_config.yaml"

# Update global config
cat > ~/.config/acli/global_config.yaml << EOF
default_site_url: https://${SITE_URL}
EOF

echo "✅ Created global_config.yaml"

echo ""
echo "🎉 Configuration complete!"
echo ""
echo "Test your connection by running:"
echo "  acli confluence space list"
echo ""
echo "Or let Rovo Dev test it for you!"
