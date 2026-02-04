# 🚀 Vercel Deployment Guide

## Quick Deploy (Recommended)

### Option 1: Via Vercel Dashboard
1. Visit **https://vercel.com/new**
2. Sign in with GitHub
3. Click "Import Git Repository"
4. Select `marktantongco/battlefield-of-mind`
5. Vercel will auto-detect Next.js settings
6. Click **Deploy** 

That's it! Vercel handles everything automatically.

### Option 2: Via Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Environment Variables Setup

After deploying, add these optional environment variables in Vercel dashboard:

1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add:

```env
# Google Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# App Configuration
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
NEXT_PUBLIC_APP_NAME=Battlefield of the Mind
```

## Features Deployed

✅ **Battlefield of Mind Interactive App** at `/battlefield`
✅ **Analytics Integration**
   - Google Analytics (with GA_MEASUREMENT_ID)
   - Vercel Analytics (auto-enabled)
✅ **SEO Optimization**
   - Meta tags
   - Open Graph tags
   - Twitter cards
✅ **Progress Saving**
   - Auto-save with localStorage
   - Session restoration
✅ **Performance Optimizations**
   - Code splitting
   - Lazy loading
   - Optimized animations

## Post-Deployment

### Test Your Deployment
Visit these URLs after deployment:
- Main site: `https://your-project.vercel.app`
- Battlefield app: `https://your-project.vercel.app/battlefield`

### Enable Analytics
1. **Google Analytics**: Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` env variable
2. **Vercel Analytics**: Automatically enabled (no config needed)

### Custom Domain (Optional)
1. Go to your project settings in Vercel
2. Navigate to **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify all dependencies are in package.json
- Ensure no TypeScript errors

### Environment Variables Not Working
- Variables starting with `NEXT_PUBLIC_` are exposed to browser
- Other variables are server-side only
- Redeploy after adding new variables

## Monitoring

- **Vercel Analytics**: View in project dashboard
- **Google Analytics**: Check GA dashboard for user behavior
- **Performance**: Monitor via Vercel's built-in metrics

## Support

Need help? Check:
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- GitHub Issues: https://github.com/marktantongco/battlefield-of-mind/issues

---

**Your app is ready to transform lives! 🎉**
