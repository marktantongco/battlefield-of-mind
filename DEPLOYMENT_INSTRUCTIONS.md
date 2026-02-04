# Deployment Instructions

## GitHub Repository
✅ Repository created: https://github.com/marktantongco/battlefield-of-mind

## Deploy to Vercel

### Option 1: Via Vercel Dashboard (Recommended)
1. Visit https://vercel.com/new
2. Import your GitHub repository: `marktantongco/battlefield-of-mind`
3. Configure project:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
4. Click "Deploy"

### Option 2: Via Vercel CLI
```bash
vercel login
vercel --prod
```

## Access Your App
- Main site: `yourdomain.vercel.app`
- Battlefield page: `yourdomain.vercel.app/battlefield`

## Environment Variables (if needed)
Add any required environment variables in Vercel dashboard under Settings > Environment Variables.

## Post-Deployment
The app includes:
- ✅ Next.js 14 with App Router
- ✅ Framer Motion animations
- ✅ Tailwind CSS styling
- ✅ Interactive battlefield/mind recovery journey at `/battlefield`
