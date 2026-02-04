#!/bin/bash
set -e

echo "🚀 OpenClaw Moltbot Prerequisites Setup"
echo "=============================="
echo ""

# Function to check if running in a container/cloud environment
is_cloud_env() {
    if [ -f "/.dockerenv" ] || [ -n "$KUBERNETES_SERVICE_HOST" ] || grep -q docker /proc/1/cgroup 2>/dev/null; then
        return 0
    fi
    return 1
}

# 1. Check/Install Terraform
echo "1️⃣  Checking Terraform..."
if command -v terraform &> /dev/null; then
    echo "   ✅ Terraform already installed: $(terraform version -json | grep -o '"terraform_version":"[^"]*' | cut -d'"' -f4)"
else
    echo "   ⚠️  Terraform not installed"
    echo ""
    echo "   📥 Installing Terraform..."
    
    # Detect OS and architecture
    OS=$(uname -s | tr '[:upper:]' '[:lower:]')
    ARCH=$(uname -m)
    
    if [ "$ARCH" = "x86_64" ]; then
        ARCH="amd64"
    elif [ "$ARCH" = "aarch64" ] || [ "$ARCH" = "arm64" ]; then
        ARCH="arm64"
    fi
    
    TF_VERSION="1.7.0"
    TF_URL="https://releases.hashicorp.com/terraform/${TF_VERSION}/terraform_${TF_VERSION}_${OS}_${ARCH}.zip"
    
    echo "   Downloading: $TF_URL"
    curl -sL "$TF_URL" -o /tmp/terraform.zip
    
    if command -v unzip &> /dev/null; then
        unzip -q /tmp/terraform.zip -d /tmp/
        chmod +x /tmp/terraform
        
        # Try to move to /usr/local/bin, fallback to ~/.local/bin
        if sudo mv /tmp/terraform /usr/local/bin/ 2>/dev/null; then
            echo "   ✅ Terraform installed to /usr/local/bin/terraform"
        else
            mkdir -p ~/.local/bin
            mv /tmp/terraform ~/.local/bin/
            echo "   ✅ Terraform installed to ~/.local/bin/terraform"
            echo "   ⚠️  Add ~/.local/bin to your PATH:"
            echo "      export PATH=\$PATH:~/.local/bin"
            export PATH=$PATH:~/.local/bin
        fi
    else
        echo "   ❌ unzip not found. Please install unzip and run again."
        exit 1
    fi
    
    rm -f /tmp/terraform.zip
fi
echo ""

# 2. Check/Generate SSH Key
echo "2️⃣  Checking SSH Key..."
if [ -f "$HOME/.ssh/id_rsa.pub" ]; then
    echo "   ✅ SSH key found: ~/.ssh/id_rsa.pub"
    ssh-keygen -lf ~/.ssh/id_rsa.pub | awk '{print "   Fingerprint: " $2}'
elif [ -f "$HOME/.ssh/id_ed25519.pub" ]; then
    echo "   ✅ SSH key found: ~/.ssh/id_ed25519.pub"
    ssh-keygen -lf ~/.ssh/id_ed25519.pub | awk '{print "   Fingerprint: " $2}'
    # Update terraform.tfvars to use ed25519 key
    if [ -f "terraform/terraform.tfvars" ]; then
        sed -i 's|~/.ssh/id_rsa.pub|~/.ssh/id_ed25519.pub|g' terraform/terraform.tfvars
    fi
else
    if is_cloud_env; then
        echo "   ⚠️  Running in cloud environment, generating SSH key..."
        mkdir -p ~/.ssh
        ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa -N "" -C "openclaw-moltbot-deployment"
        echo "   ✅ SSH key generated: ~/.ssh/id_rsa.pub"
    else
        echo "   ⚠️  No SSH key found"
        read -p "   Generate SSH key now? (y/n): " generate
        if [ "$generate" = "y" ]; then
            mkdir -p ~/.ssh
            ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa -C "openclaw-moltbot-deployment"
            echo "   ✅ SSH key generated"
        else
            echo "   ℹ️  Generate manually: ssh-keygen -t rsa -b 4096 -C 'your@email.com'"
        fi
    fi
fi
echo ""

# 3. Display configuration guide
echo "3️⃣  Configuration Required"
echo "   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "   📝 Edit terraform/terraform.tfvars with your API keys:"
echo ""
echo "   Required:"
echo "   • Hetzner API Token → https://console.hetzner.cloud/"
echo "   • OpenClaw API Key → https://openclaw.ai"
echo "   • OpenAI API Key → https://platform.openai.com/ (optional)"
echo "   • WordPress API URL (if using WordPress)"
echo ""
echo "   Optional:"
echo "   • Stripe Keys → https://dashboard.stripe.com/"
echo ""

if ! is_cloud_env; then
    read -p "   Open terraform.tfvars for editing now? (y/n): " edit
    if [ "$edit" = "y" ]; then
        if command -v nano &> /dev/null; then
            nano terraform/terraform.tfvars
        elif command -v vim &> /dev/null; then
            vim terraform/terraform.tfvars
        elif command -v vi &> /dev/null; then
            vi terraform/terraform.tfvars
        else
            echo "   ℹ️  Please edit terraform/terraform.tfvars manually"
        fi
    fi
fi

echo ""
echo "✅ Prerequisites Setup Complete!"
echo ""
echo "Next steps:"
echo "  1. Edit terraform/terraform.tfvars with your API keys"
echo "  2. Run: ./scripts/deploy-hetzner.sh"
echo ""
