# Deployment Instructions for BoringSalesGrowth.com

## Prerequisites
- GitHub account
- Cloudflare account with BoringSalesGrowth.com domain

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `boring-sales-growth`
3. Make it public
4. Don't initialize with README (we already have code)
5. Create repository

## Step 2: Push Code to GitHub

```bash
# Add remote origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/boring-sales-growth.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Cloudflare Pages

1. Go to https://dash.cloudflare.com/
2. Navigate to "Workers & Pages" 
3. Click "Create application" → "Pages" → "Connect to Git"
4. Authorize GitHub and select `boring-sales-growth` repository
5. Configure build settings:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Environment variables: None needed yet

## Step 4: Configure Custom Domain

1. After deployment, go to your Pages project settings
2. Navigate to "Custom domains"
3. Add domain: `boringsalesgrowth.com`
4. Add domain: `www.boringsalesgrowth.com` 
5. Cloudflare will automatically configure DNS if domain is on Cloudflare

## Step 5: Environment Variables (if needed later)

For production secrets:
1. Go to Settings → Environment variables
2. Add production variables
3. Redeploy to apply changes

## Build Settings Summary

```
Framework preset: Next.js
Build command: npm run build
Build output directory: .next
Node version: 18 (or latest)
```

## Deployment URL Structure

- Production: https://boringsalesgrowth.com
- Preview: https://[branch].[project].pages.dev
- Direct: https://boring-sales-growth.pages.dev