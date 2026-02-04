# ✅ Deployment Checklist

Use this checklist before deploying your AI blog platform to production.

## Pre-Deployment

### 1. Environment Variables
- [ ] WordPress API URL configured
- [ ] OpenAI API key added
- [ ] Stripe keys (test mode for testing)
- [ ] Site URL updated
- [ ] Site name and description set

### 2. Content Ready
- [ ] At least 3 blog posts in WordPress
- [ ] Featured images added to posts
- [ ] Categories created
- [ ] Tags added
- [ ] About page content

### 3. Configuration
- [ ] Update `next.config.js` with correct basePath
- [ ] Customize colors in `tailwind.config.ts`
- [ ] Update social links in Footer
- [ ] Add your logo/favicon
- [ ] Update site.webmanifest

### 4. Testing
- [ ] Test homepage loads
- [ ] Test blog post pages
- [ ] Test AI tools (if API key added)
- [ ] Test responsive design (mobile/tablet/desktop)
- [ ] Test dark mode
- [ ] Run `npm run build` successfully

## GitHub Setup

### 5. Repository
- [ ] Create GitHub repository
- [ ] Push code to main branch
- [ ] Enable GitHub Pages in Settings
- [ ] Select "GitHub Actions" as source

### 6. Secrets Configuration
Add these secrets in Settings → Secrets → Actions:
- [ ] `WORDPRESS_API_URL`
- [ ] `OPENAI_API_KEY`
- [ ] `STRIPE_PUBLISHABLE_KEY`
- [ ] `SITE_URL`
- [ ] `SITE_NAME`
- [ ] `SITE_DESCRIPTION`

### 7. First Deployment
- [ ] Push to main branch
- [ ] Check Actions tab for build progress
- [ ] Wait for deployment (2-5 minutes)
- [ ] Visit your GitHub Pages URL

## Post-Deployment

### 8. Verification
- [ ] Site loads correctly
- [ ] Blog posts display
- [ ] Images load properly
- [ ] Links work
- [ ] AI tools functional (if configured)
- [ ] Mobile responsive
- [ ] Dark mode works

### 9. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster
- [ ] Verify robots.txt accessible
- [ ] Test Open Graph tags (use opengraph.xyz)
- [ ] Test Twitter Cards (use cards-dev.twitter.com)

### 10. Analytics (Optional)
- [ ] Add Google Analytics
- [ ] Add Facebook Pixel
- [ ] Set up Google Search Console
- [ ] Configure Bing Webmaster Tools

### 11. Monetization Setup
- [ ] Test donation widget
- [ ] Add affiliate IDs
- [ ] Test affiliate links
- [ ] Verify disclosure notices

### 12. Performance
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Test Core Web Vitals
- [ ] Check mobile performance
- [ ] Verify image optimization

## Go Live

### 13. Final Steps
- [ ] Switch Stripe to live mode (when ready)
- [ ] Update social media profiles
- [ ] Announce launch
- [ ] Share first post
- [ ] Monitor analytics

## Maintenance

### 14. Regular Tasks
- [ ] Weekly: Check for broken links
- [ ] Monthly: Update dependencies (`npm update`)
- [ ] Monthly: Review analytics
- [ ] Quarterly: Update content
- [ ] As needed: Respond to issues

---

**Ready to deploy? Start checking boxes! ☑️**
