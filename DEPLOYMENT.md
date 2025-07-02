# Deployment Troubleshooting Guide

## Common Issues and Solutions

### 1. GitHub Pages Deployment

#### Issue: Workflow fails or doesn't trigger

**Solution:**

1. Check if GitHub Pages is enabled in repository settings
2. Ensure you have added the API key secret:
   - Go to Settings → Secrets and variables → Actions
   - Add secret: `VITE_WEATHER_API_KEY` = your OpenWeatherMap API key

#### Issue: Page shows 404 or blank screen

**Solution:**

1. **Check GitHub Pages Settings:**

   - Go to Settings → Pages
   - Source MUST be "GitHub Actions" (not "Deploy from a branch")
   - If it shows "Deploy from a branch", change it to "GitHub Actions"

2. **Verify API Key in GitHub Secrets:**

   - Go to Settings → Secrets and variables → Actions
   - Ensure `VITE_WEATHER_API_KEY` secret exists and has your OpenWeatherMap API key

3. **Check the deployment logs:**

   - Go to Actions tab in your repository
   - Click on the latest "Deploy to GitHub Pages" workflow
   - Check for any build or deployment errors

4. **Test locally first:**

   ```bash
   # Build and test locally
   npm run build
   npm run preview
   # Should work at http://localhost:4173/react-weather-app/
   ```

5. **Check browser console:**
   - Open developer tools (F12)
   - Look for JavaScript errors or failed network requests
   - Check if API key error message appears

#### Issue: API requests fail on deployed site

**Solution:**

1. Verify the environment variable is set correctly in GitHub Secrets
2. Check browser console for CORS or API key errors
3. Ensure your OpenWeatherMap API key is active

### 2. Manual Steps for GitHub Pages Setup

1. **Repository Settings:**

   - Go to your repository on GitHub
   - Click Settings → Pages
   - Source: GitHub Actions (not "Deploy from branch")

2. **Add API Key Secret:**

   - Settings → Secrets and variables → Actions
   - New repository secret
   - Name: `VITE_WEATHER_API_KEY`
   - Value: Your OpenWeatherMap API key

3. **Trigger Deployment:**
   - Push any change to main branch, or
   - Go to Actions tab → Deploy to GitHub Pages → Run workflow

### 3. Alternative Deployment Methods

#### Vercel (Recommended for simplicity)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variable in Vercel dashboard
```

#### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist

# Add environment variable in Netlify dashboard
```

#### Manual GitHub Pages deployment

```bash
# Build the project
npm run build

# Deploy using gh-pages
npm run deploy
```

### 4. Environment Variable Issues

#### Local Development

- Ensure `.env` file exists with `VITE_WEATHER_API_KEY=your_key`
- Restart development server after adding environment variables

#### Production Deployment

- Add environment variables in your hosting platform's dashboard
- Never commit API keys to the repository

### 5. Build Issues

#### Issue: Build fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Try building locally
npm run build
```

#### Issue: Vite base path problems

- Ensure `base: '/react-weather-app/'` in `vite.config.js` matches your repo name
- For custom domains, set `base: '/'`

## Quick Debug Commands

```bash
# Check if environment variable is loaded
echo $VITE_WEATHER_API_KEY

# Test build locally
npm run build
npm run preview

# Check for build errors
npm run build 2>&1 | grep -i error
```

## Need Help?

1. Check the Actions tab in your GitHub repository for detailed error logs
2. Verify all environment variables are set correctly
3. Test the build locally first with `npm run build`
4. Check browser console for runtime errors
