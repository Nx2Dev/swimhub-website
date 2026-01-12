# Swimhub Website - Deployment Guide

## 🚀 Quick Start

### Local Testing

The easiest way to test the website locally:

```bash
# Navigate to the project directory
cd swimhub-website

# Start a local web server
python3 -m http.server 8000

# Open in your browser
# Visit: http://localhost:8000
```

**Important:** Don't open `index.html` directly in the browser! Use a local server to ensure all assets load correctly and animations work properly.

## 🐳 Docker Deployment

### Build the Docker Image

```bash
docker build -t swimhub-website:latest .
```

### Run Locally with Docker

```bash
docker run -d -p 8080:80 --name swimhub swimhub-website:latest
```

Then visit: `http://localhost:8080`

### Stop and Remove Container

```bash
docker stop swimhub
docker rm swimhub
```

## ☁️ Railway Deployment

### Method 1: GitHub Integration (Recommended)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Swimhub website"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. Go to [Railway.app](https://railway.app)
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Railway will automatically detect the Dockerfile and deploy!

### Method 2: Railway CLI

1. Install Railway CLI:
   ```bash
   npm install -g @railway/cli
   ```

2. Login:
   ```bash
   railway login
   ```

3. Initialize and deploy:
   ```bash
   railway init
   railway up
   ```

4. Open your deployment:
   ```bash
   railway open
   ```

## 📝 What Gets Deployed

The Dockerfile includes:
- ✅ index.html (main HTML file)
- ✅ styles.css (all animations and modern design)
- ✅ script.js (interactive features)
- ✅ assets/ folder (logo, images, iPhone frame, app screenshots)
- ✅ nginx.conf (optimized web server configuration)

## 🎨 Key Features

- **iPhone Mockup**: Shows real app screenshot inside iPhone frame
- **Glassmorphism**: Modern frosted glass UI effects
- **Animations**: Scroll-triggered fade-ins, floating phone, 3D card tilts
- **Responsive**: Works on desktop, tablet, and mobile
- **Performance**: Optimized with caching and compression

## 🔍 Troubleshooting

### Images not loading?
- Make sure you're using a web server (not file://)
- Check that the assets folder is in the same directory as index.html

### Animations not working?
- Ensure JavaScript is enabled in your browser
- Use a modern browser (Chrome, Firefox, Safari, Edge)
- Check browser console for any errors

### Railway deployment fails?
- Verify Dockerfile is in the root directory
- Check that all files are committed to git
- Ensure railway.json is properly configured

## 📞 Support

For issues or questions:
- Check the browser console for errors
- Verify all assets are loading correctly
- Test with `python3 -m http.server` first before deploying

---

Made with 💙 for Greek swimmers
