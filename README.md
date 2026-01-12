# Swimhub Website

A modern, single-page landing website for Swimhub - the ultimate swimming companion app for swimmers in Greece.

## Features

- **Live Results**: Real-time race results and competition updates
- **Complete History**: Comprehensive swimming records and personal bests
- **Team Listings**: Explore swimming clubs throughout Greece
- **Swimhub Score**: FIFA-style ranking system for swimmers
- **Performance Tracking**: Detailed analytics and insights
- **Mobile First**: Optimized for mobile devices

## Color Palette

- Navy: `#000028`
- Cyan: `#00ddff`
- Light Cyan: `#deffff`
- White: `#ffffff`

## Project Structure

```
swimhub-website/
├── index.html          # Main HTML file with embedded CSS
├── nginx.conf          # Nginx configuration
├── Dockerfile          # Docker configuration for deployment
├── .dockerignore       # Docker ignore file
└── README.md           # This file
```

## Local Development

### Option 1: Simple HTTP Server (Recommended for testing)
To view the website with all features working correctly, use a local web server:

```bash
# Using Python 3
python3 -m http.server 8000

# Or using Python 2
python -m SimpleHTTPServer 8000
```

Then visit `http://localhost:8000` in your browser.

**Note:** Opening `index.html` directly in the browser (file://) may cause issues with loading assets and animations. Always use a local server for testing.

### Option 2: Docker (Production-like environment)

```bash
# Build the Docker image
docker build -t swimhub-website .

# Run the container
docker run -p 8080:80 swimhub-website
```

Then visit `http://localhost:8080` in your browser.

## Deployment to Railway

### Option 1: Deploy from GitHub (Recommended)

1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. Go to [Railway](https://railway.app)
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Railway will automatically detect the Dockerfile and deploy

### Option 2: Deploy with Railway CLI

1. Install Railway CLI:
   ```bash
   npm i -g @railway/cli
   ```

2. Login to Railway:
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

### Configuration

The application will automatically:
- Run on port 80 inside the container
- Railway will assign a public URL
- Serve the single-page application
- Handle routing for a SPA
- Include health check endpoint at `/health`

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Nginx**: High-performance web server
- **Docker**: Containerization
- **Railway**: Cloud deployment platform

## Features of the Implementation

### Design & Animations
- **Glassmorphism UI** - Frosted glass effects with backdrop blur
- **3D Phone Mockup** - Floating iPhone displaying the app with parallax animation
- **Scroll Animations** - Elements fade in as you scroll down the page
- **Gradient Text Effects** - Cyan to white gradient on headings
- **Hover Effects** - 3D card tilts and interactive elements
- **Parallax Background** - Hero section background moves with scroll
- **Animated Counters** - Statistics count up when they come into view
- **Cursor Glow** - Subtle cyan glow follows your mouse
- **Smooth Transitions** - All interactions have fluid animations

### Technical Features
- Fully responsive design (mobile, tablet, desktop)
- Separate CSS and JavaScript files for maintainability
- Modern gradient backgrounds with animated effects
- Optimized for performance with caching
- SEO-friendly semantic HTML structure
- Accessibility considerations
- Production-ready nginx configuration
- Lightweight Docker image using Alpine Linux (nginx:alpine)

### Content Sections
1. **Hero** - Swimming background with centered iPhone mockup showing the app
2. **Features** - 6 glassmorphism cards with animated icons
3. **Showcase** - Swimming pool image with animated statistics
4. **Swimhub Score** - FIFA-style ranking explanation with rotating gradient
5. **Quote** - Inspirational message with overlay effect
6. **CTA** - Download section for iOS and Android
7. **Footer** - Site navigation and branding

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

All rights reserved © Swimhub

## Contact

For questions or support, please contact the Swimhub team.
