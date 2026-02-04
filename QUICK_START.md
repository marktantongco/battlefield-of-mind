# ⚡ Quick Start Guide (5 Minutes)

Get your AI blog running in 5 minutes!

## Step 1: Clone & Install (2 min)

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-blog-platform.git
cd ai-blog-platform

# Install dependencies
npm install
```

## Step 2: Configure Environment (2 min)

```bash
# Copy environment template
cp .env.example .env
```

Edit `.env` with minimal setup:

```env
# Use public WordPress demo (or your own)
NEXT_PUBLIC_WORDPRESS_API_URL=https://demo.wp-api.org/wp-json/wp/v2

# Optional: Add your OpenAI key later
OPENAI_API_KEY=sk-your-key-here

# Site info
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=My AI Blog
NEXT_PUBLIC_SITE_DESCRIPTION=My awesome AI-powered blog
```

## Step 3: Run (1 min)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## What You Get Out of the Box

✅ **Homepage with blog posts** from WordPress
✅ **AI Tools page** at `/ai-tools` (needs OpenAI key)
✅ **Responsive design** with dark mode
✅ **SEO optimized** with meta tags
✅ **Monetization widgets** ready to configure

---

## Next Steps

### 1. Set Up Your Own WordPress (5 min)
- Create free account at [WordPress.com](https://wordpress.com)
- Get your API URL: `https://yourname.wordpress.com/wp-json/wp/v2`
- Update `.env`

### 2. Enable AI Features (5 min)
- Get OpenAI API key from [OpenAI](https://platform.openai.com/api-keys)
- Add to `.env`
- Test at `/ai-tools`

### 3. Deploy to GitHub Pages (10 min)
- Follow [SETUP_GUIDE.md](./SETUP_GUIDE.md#github-pages-deployment)
- Push to GitHub
- Enable GitHub Actions
- Your site goes live!

---

## Troubleshooting

**Posts not showing?**
```bash
# Test WordPress API
curl https://demo.wp-api.org/wp-json/wp/v2/posts
```

**Build errors?**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

**Need help?**
- Check [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- Open an [issue](https://github.com/yourusername/ai-blog-platform/issues)

---

**That's it! You're ready to blog with AI 🚀**
