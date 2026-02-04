# 🚀 AI-Powered Blog Platform

A modern, lightweight blog platform combining **WordPress** (headless CMS), **GitHub Pages** (hosting), **AI integration**, and **smart monetization** - specifically designed for Philippine creators.

![AI Blog Platform](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

## ✨ Features

### 🎨 Core Features
- ✅ **Headless WordPress CMS** - Easy content management with WordPress.com free tier
- ✅ **Static Site Generation** - Lightning-fast performance with Next.js SSG
- ✅ **GitHub Pages Hosting** - Free, reliable hosting with automatic deployments
- ✅ **Responsive Design** - Beautiful UI with Tailwind CSS + ShadCN UI components
- ✅ **Dark Mode Support** - Automatic theme switching

### 🤖 AI-Powered Tools
- ✅ **Content Idea Generator** - AI suggests blog topics based on keywords and trends
- ✅ **SEO Optimizer** - Auto-generate SEO-optimized titles, meta descriptions, and keywords
- ✅ **Auto-Tagging** - Intelligent content categorization
- ✅ **EN/FIL Translator** - Seamless English-Filipino translation
- ✅ **Content Summarizer** - Generate social media snippets

### 💰 Monetization Layer
- ✅ **Donation Widget** - Stripe integration for one-time donations
- ✅ **Affiliate Links** - Support for Amazon PH, Lazada, Shopee
- ✅ **Sponsored Content** - Built-in disclosure and labeling
- ✅ **Newsletter Signup** - Email list building for paid newsletters

### 🔍 SEO & Performance
- ✅ **Automatic Sitemap** - Dynamic sitemap.xml generation
- ✅ **Robots.txt** - Search engine optimization
- ✅ **JSON-LD Structured Data** - Rich snippets for better search visibility
- ✅ **Open Graph Tags** - Perfect social media previews
- ✅ **Core Web Vitals Optimized** - Fast loading, lazy images, prefetching
- ✅ **PWA Support** - Progressive Web App capabilities

## 🛠️ Tech Stack

```javascript
{
  frontend: "Next.js 14 + React 18 + TypeScript",
  styling: "Tailwind CSS + ShadCN UI",
  cms: "WordPress.com (Headless)",
  hosting: "GitHub Pages",
  ai: "OpenAI GPT-4",
  payments: "Stripe",
  deployment: "GitHub Actions"
}
```

## 📦 Installation

### Prerequisites
- Node.js 20+ 
- npm or yarn
- WordPress.com account (free tier)
- OpenAI API key
- Stripe account (for donations)

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ai-blog-platform.git
cd ai-blog-platform
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
```

Edit `.env` with your credentials:
```env
# WordPress Configuration
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-site.wordpress.com/wp-json/wp/v2

# OpenAI API
OPENAI_API_KEY=your-openai-api-key

# Stripe (for donations)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-key
STRIPE_SECRET_KEY=your-stripe-secret

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourusername.github.io/repo-name
NEXT_PUBLIC_SITE_NAME=Your Blog Name
NEXT_PUBLIC_SITE_DESCRIPTION=Your blog description
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment to GitHub Pages

### 1. Configure Repository Settings

1. Go to your GitHub repository
2. Navigate to **Settings → Pages**
3. Under "Build and deployment", select **GitHub Actions** as the source

### 2. Add Secrets

Go to **Settings → Secrets and variables → Actions** and add:

- `WORDPRESS_API_URL`
- `OPENAI_API_KEY`
- `STRIPE_PUBLISHABLE_KEY`
- `SITE_URL`
- `SITE_NAME`
- `SITE_DESCRIPTION`

### 3. Deploy

```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

GitHub Actions will automatically build and deploy to GitHub Pages!

## 📚 Usage Guide

### Setting Up WordPress as Headless CMS

1. Create a free account at [WordPress.com](https://wordpress.com)
2. Create posts with featured images, categories, and tags
3. Copy your site's REST API URL: `https://your-site.wordpress.com/wp-json/wp/v2`
4. Add it to your `.env` file

### Using AI Writing Tools

Navigate to `/ai-tools` to access:

- **Content Idea Generator**: Enter topics/keywords → Get 3 blog ideas with outlines
- **SEO Optimizer**: Paste content → Get optimized titles, descriptions, keywords
- **Translator**: Translate between English and Filipino

### Monetization Setup

#### Donations (Stripe)
1. Create a [Stripe](https://stripe.com) account
2. Get your publishable key and secret key
3. Add to `.env` file
4. The `DonationWidget` component handles the rest

#### Affiliate Links
Use the `AffiliateLink` component:

```tsx
<AffiliateLink
  link={{
    url: "https://affiliate-url.com",
    platform: "lazada",
    productName: "Product Name",
    price: "₱999",
    imageUrl: "/product-image.jpg"
  }}
/>
```

#### Sponsored Posts
Add to your post:

```tsx
<SponsoredBadge
  sponsorship={{
    isSponsored: true,
    sponsorName: "Company Name",
    sponsorLogo: "/sponsor-logo.png",
    disclosureText: "Custom disclosure..."
  }}
/>
```

## 🎨 Customization

### Branding
Edit colors in `tailwind.config.ts`:
```ts
colors: {
  primary: {
    DEFAULT: "hsl(221.2 83.2% 53.3%)", // Your brand color
    foreground: "hsl(210 40% 98%)",
  },
}
```

### SEO Configuration
Update `src/lib/seo-config.ts` with your site details.

### Adding Pages
Create new pages in `src/app/`:
```
src/app/
  ├── about/
  │   └── page.tsx
  ├── contact/
  │   └── page.tsx
```

## 📊 Performance

This platform is optimized for Core Web Vitals:

- ⚡ **LCP (Largest Contentful Paint)**: < 2.5s
- 🎯 **FID (First Input Delay)**: < 100ms
- 📐 **CLS (Cumulative Layout Shift)**: < 0.1

Features:
- Static site generation
- Image optimization with Next.js Image
- Lazy loading
- Prefetching on hover
- Service Worker support

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

MIT License - feel free to use for personal or commercial projects!

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for AI SDK
- ShadCN for beautiful UI components
- Philippine tech community for inspiration

## 💬 Support

- 📧 Email: your-email@example.com
- 💬 Twitter: [@yourusername](https://twitter.com/yourusername)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/ai-blog-platform/issues)

## 🗺️ Roadmap

- [ ] Comment system integration
- [ ] Advanced analytics dashboard
- [ ] Email newsletter automation
- [ ] Multi-language support (beyond EN/FIL)
- [ ] WordPress plugin for easier integration
- [ ] Mobile app (React Native)

---

Made with ❤️ in the Philippines 🇵🇭

**Star ⭐ this repo if you find it helpful!**
