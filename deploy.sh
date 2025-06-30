#!/bin/bash
# This script ensures Cloudflare deploys the right files

echo "Building Next.js app..."
npm run pages:build

echo "Deploying to Cloudflare Workers..."
npx wrangler deploy .vercel/output/static/_worker.js/index.js --compatibility-date 2024-06-30 --name boring-sales-growth --assets .vercel/output/static --compatibility-flags nodejs_compat