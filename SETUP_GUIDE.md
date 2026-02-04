# 📖 Complete Setup Guide

This comprehensive guide will walk you through setting up your AI-powered blog platform from scratch.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [WordPress Setup](#wordpress-setup)
3. [GitHub Repository Setup](#github-repository-setup)
4. [OpenAI API Setup](#openai-api-setup)
5. [Stripe Setup](#stripe-setup)
6. [Local Development](#local-development)
7. [GitHub Pages Deployment](#github-pages-deployment)
8. [Creating Your First Post](#creating-your-first-post)
9. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before starting, ensure you have:

- ✅ A GitHub account
- ✅ Node.js 20 or higher installed
- ✅ Git installed
- ✅ A text editor (VS Code recommended)
- ✅ Basic knowledge of Git and command line

Check your Node.js version:
```bash
node --version  # Should be v20 or higher
```

---

## WordPress Setup

### Step 1: Create WordPress.com Account

1. Go to [WordPress.com](https://wordpress.com)
2. Click "Start your website"
3. Choose the **Free** plan
4. Complete the signup process

### Step 2: Configure Your WordPress Site

1. **Choose a subdomain**: `yourname.wordpress.com`
2. **Set site language**: English or Filipino
3. **Skip the theme selection** (we're using headless mode)

### Step 3: Enable REST API

WordPress.com has the REST API enabled by default. Your API endpoint will be:
```
https://yourname.wordpress.com/wp-json/wp/v2
```

Test it by visiting:
```
https://yourname.wordpress.com/wp-json/wp/v2/posts
```

You should see a JSON response.

### Step 4: Create Sample Content

Create 2-3 blog posts with:
- Title
- Content
- Featured image
- Categories
- Tags

---

## GitHub Repository Setup

### Step 1: Fork or Clone

**Option A: Fork this repository**
1. Click "Fork" button on GitHub
2. Clone your fork:
```bash
git clone https://github.com/YOUR_USERNAME/ai-blog-platform.git
cd ai-blog-platform
```

**Option B: Create from scratch**
```bash
git clone https://github.com/yourusername/ai-blog-platform.git
cd ai-blog-platform
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages (Next.js, React, Tailwind, OpenAI SDK, etc.)

---

## OpenAI API Setup

### Step 1: Create OpenAI Account

1. Go to [OpenAI Platform](https://platform.openai.com)
2. Sign up or log in
3. Navigate to [API Keys](https://platform.openai.com/api-keys)

### Step 2: Generate API Key

1. Click "Create new secret key"
2. Name it: "AI Blog Platform"
3. **Copy the key immediately** (you won't see it again!)

### Step 3: Add Billing

1. Go to [Billing](https://platform.openai.com/account/billing)
2. Add a payment method
3. Set usage limits to avoid surprises (e.g., $10/month)

**Cost Estimate**: 
- Content generation: ~$0.02 per request
- Translation: ~$0.01 per request
- SEO optimization: ~$0.03 per request

Expected monthly cost for moderate use: **$5-15**

---

## Stripe Setup

### Step 1: Create Stripe Account

1. Go to [Stripe](https://stripe.com)
2. Click "Start now"
3. Complete business verification

**For Philippines**:
- Use your business or personal details
- Stripe supports Philippine accounts

### Step 2: Get API Keys

1. Go to [API Keys](https://dashboard.stripe.com/test/apikeys)
2. Copy **Publishable key** (starts with `pk_test_`)
3. Copy **Secret key** (starts with `sk_test_`)

### Step 3: Test Mode vs Live Mode

Start with **Test Mode** for development:
- Use test cards: `4242 4242 4242 4242`
- No real money is processed

Switch to **Live Mode** when ready to accept real donations.

---

## Local Development

### Step 1: Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env`:

```env
# WordPress
NEXT_PUBLIC_WORDPRESS_API_URL=https://yourname.wordpress.com/wp-json/wp/v2

# OpenAI
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx

# Site Info
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=My AI Blog
NEXT_PUBLIC_SITE_DESCRIPTION=AI-powered blog for Philippine creators
```

### Step 2: Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Step 3: Test Features

Test each feature:

✅ **Homepage loads** → Shows blog posts from WordPress  
✅ **AI Tools work** → Navigate to `/ai-tools`  
✅ **Translations work** → Try English ↔ Filipino  
✅ **Donations display** → Check donation widget  

---

## GitHub Pages Deployment

### Step 1: Update Configuration

Edit `next.config.js`:

```js
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',  // Add this if not using custom domain
  images: {
    unoptimized: true,
  },
}
```

### Step 2: Configure GitHub Repository

1. Go to your repository on GitHub
2. **Settings → Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**

### Step 3: Add GitHub Secrets

**Settings → Secrets and variables → Actions → New repository secret**

Add these secrets:

| Name | Value | Example |
|------|-------|---------|
| `WORDPRESS_API_URL` | Your WordPress API | `https://yourname.wordpress.com/wp-json/wp/v2` |
| `OPENAI_API_KEY` | OpenAI API key | `sk-proj-...` |
| `STRIPE_PUBLISHABLE_KEY` | Stripe public key | `pk_test_...` |
| `SITE_URL` | Your GitHub Pages URL | `https://username.github.io/repo-name` |
| `SITE_NAME` | Your blog name | `My AI Blog` |
| `SITE_DESCRIPTION` | Blog description | `AI-powered blog` |

### Step 4: Deploy

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

GitHub Actions will:
1. Build your site
2. Generate static files
3. Deploy to GitHub Pages

Check deployment progress: **Actions** tab on GitHub

### Step 5: Access Your Site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/REPO_NAME
```

⏱️ Initial deployment takes 2-5 minutes.

---

## Creating Your First Post

### In WordPress

1. Go to WordPress dashboard
2. **Posts → Add New**
3. Add:
   - Title: "My First AI-Enhanced Blog Post"
   - Content: Write your post
   - Featured Image: Upload an image
   - Categories: Add categories
   - Tags: Add tags
4. Click **Publish**

### See It Live

Your post will appear on your site after:
- **Local dev**: Refresh the page (with caching, may take 5 min)
- **GitHub Pages**: Next deployment or wait for cache to clear

### Test AI Features

1. Go to `/ai-tools` on your live site
2. Try generating content ideas
3. Use SEO optimizer on your post content
4. Translate between English and Filipino

---

## Troubleshooting

### WordPress API Issues

**Problem**: Posts not showing

**Solutions**:
```bash
# 1. Check API URL
curl https://yourname.wordpress.com/wp-json/wp/v2/posts

# 2. Verify CORS is enabled (WordPress.com enables it by default)

# 3. Check environment variable
echo $NEXT_PUBLIC_WORDPRESS_API_URL
```

### OpenAI API Errors

**Problem**: "Insufficient quota" error

**Solution**:
1. Go to [OpenAI Billing](https://platform.openai.com/account/billing)
2. Add credits
3. Check usage limits

### Build Failures

**Problem**: GitHub Actions deployment fails

**Solutions**:
1. Check **Actions** tab for error logs
2. Verify all secrets are set correctly
3. Ensure `next.config.js` has `output: 'export'`
4. Check Node.js version in workflow (should be 20)

### Images Not Loading

**Problem**: Images show broken on GitHub Pages

**Solution**:
```js
// next.config.js
module.exports = {
  images: {
    unoptimized: true,  // Required for static export
  },
}
```

### Donation Widget Not Working

**Problem**: Stripe errors

**Solution**:
1. Verify you're using **test mode** keys
2. Check keys are in environment variables
3. Use test card: `4242 4242 4242 4242`

---

## Next Steps

✅ Customize your design in `tailwind.config.ts`  
✅ Add more pages (About, Contact)  
✅ Set up Google Analytics  
✅ Connect custom domain  
✅ Enable newsletter integration  
✅ Add comment system (Disqus, Giscus)  

---

## Getting Help

- 📧 **Email**: your-email@example.com
- 💬 **GitHub Discussions**: [Discussions](https://github.com/yourusername/ai-blog-platform/discussions)
- 🐛 **Issues**: [Report a bug](https://github.com/yourusername/ai-blog-platform/issues)

---

**Congratulations! 🎉** Your AI-powered blog is now live!
