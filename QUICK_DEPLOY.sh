#!/bin/bash

echo "🚀 Battlefield of the Mind - Quick Deployment Script"
echo "════════════════════════════════════════════════════"
echo ""

# Check if vercel is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

echo "✅ Vercel CLI is ready"
echo ""
echo "🔐 Please login to Vercel..."
vercel login

echo ""
echo "🚀 Deploying to production..."
vercel --prod

echo ""
echo "✨ Deployment complete! Your app is live!"
echo ""
echo "📱 Next steps:"
echo "   1. Visit your deployment URL"
echo "   2. Test the /battlefield route"
echo "   3. Add Google Analytics ID in Vercel dashboard (optional)"
echo ""
