# Deployment Guide

## Netlify Deployment

### Automatic Deployment (Recommended)

1. **Connect to GitHub:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select this repository

2. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: `18` (or higher)

3. **Environment Variables (Optional):**
   ```
   REACT_APP_API_URL=https://sign.mt
   REACT_APP_VERSION=1.0.0
   ```

### Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Drag and drop the `build` folder to Netlify
   - Or use Netlify CLI: `netlify deploy --prod --dir=build`

## Vercel Deployment

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

## GitHub Pages Deployment

1. **Add homepage to package.json:**
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```

2. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy scripts to package.json:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

## Troubleshooting

### "Page Not Found" Error

If you're getting "Page not found" errors on Netlify:

1. **Check the `_redirects` file** in the `public` folder:
   ```
   /*    /index.html   200
   ```

2. **Verify `netlify.toml` configuration:**
   ```toml
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Clear Netlify cache** and redeploy

### Build Failures

1. **Check Node version:** Ensure you're using Node 16+ or 18+
2. **Clear npm cache:** `npm cache clean --force`
3. **Delete node_modules and reinstall:** 
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### API Connection Issues

1. **Check CORS settings** on your API
2. **Verify API endpoints** are accessible
3. **Test API connection** using the built-in test component

## Environment Variables

Create a `.env` file for local development:

```env
REACT_APP_API_URL=https://sign.mt
REACT_APP_VERSION=1.0.0
REACT_APP_NAME=Sign Language Translate
REACT_APP_DESCRIPTION=Effortless Real-Time Sign Language Translation
```

## Performance Optimization

1. **Enable gzip compression** on your hosting provider
2. **Use CDN** for static assets
3. **Optimize images** before deployment
4. **Enable caching** for static files

## Security

1. **HTTPS only** - Ensure your site uses HTTPS
2. **Content Security Policy** - Add CSP headers
3. **API rate limiting** - Implement rate limiting for API calls
4. **Input validation** - Validate all user inputs 