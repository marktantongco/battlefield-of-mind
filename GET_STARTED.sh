#!/bin/bash

# 🚀 AI Blog Platform - Quick Setup Script
# This script helps you get started quickly

echo "🎉 Welcome to AI Blog Platform Setup!"
echo "======================================"
echo ""

# Check Node.js
echo "📦 Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 20+ first."
    echo "Visit: https://nodejs.org"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "⚠️  Node.js version is too old. Please upgrade to v20+"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Install dependencies
echo "📥 Installing dependencies..."
npm install
echo "✅ Dependencies installed"
echo ""

# Setup environment
echo "⚙️  Setting up environment..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ Created .env file"
    echo ""
    echo "📝 IMPORTANT: Edit .env file with your credentials:"
    echo "   - WordPress API URL"
    echo "   - OpenAI API Key (optional for AI features)"
    echo "   - Stripe Keys (optional for donations)"
    echo ""
    read -p "Press Enter to continue after editing .env file..."
else
    echo "ℹ️  .env file already exists"
fi

echo ""
echo "🎉 Setup Complete!"
echo ""
echo "Next Steps:"
echo "1. Edit .env file with your credentials"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:3000"
echo ""
echo "📚 Documentation:"
echo "   - Quick Start: QUICK_START.md"
echo "   - Full Setup: SETUP_GUIDE.md"
echo "   - Monetization: MONETIZATION_GUIDE.md"
echo ""
echo "🚀 Ready to build something amazing!"
