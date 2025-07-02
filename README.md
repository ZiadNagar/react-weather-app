# ⛅ React Weather App

A modern, responsive weather application built with React and Vite that provides real-time weather information with intelligent location search and auto-detection capabilities.

## ✨ Features

- **🌍 Auto-Location Detection**: Automatically detects user's current location for instant weather data
- **🔍 Smart Search**: Intelligent location search with autocomplete suggestions
- **⌨️ Keyboard Navigation**: Full keyboard support with arrow keys, Enter, and Escape
- **📱 Responsive Design**: Beautiful UI that works perfectly on desktop and mobile devices
- **🎨 Dynamic Backgrounds**: Weather-based gradient backgrounds that change with conditions
- **🌡️ Real-time Data**: Current temperature, humidity, and wind speed information
- **📅 Current Date**: Displays current day and date
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds

## 🚀 Live Demo

Check out the live demo: [React Weather App](https://github.com/ZiadNagar/react-weather-app)

## 🛠️ Technologies Used

- **React 19.1.0** - Modern React with hooks
- **Vite 7.0.0** - Fast build tool and development server
- **OpenWeatherMap API** - Weather data and geocoding services
- **CSS3** - Custom styling with gradients and animations
- **Font Awesome** - Icons for UI elements
- **ESLint** - Code linting and formatting

## 🎯 Usage

### Auto-Location

- On first load, the app will request your location permission
- If granted, it displays weather for your current location
- If denied, it falls back to Alexandria as the default location

### Manual Search

- Type any city name in the search bar
- Select from autocomplete suggestions using mouse or keyboard
- Use arrow keys to navigate suggestions
- Press Enter to select highlighted suggestion
- Press Escape to close suggestions

### Keyboard Shortcuts

- **↑/↓ Arrow Keys**: Navigate through suggestions
- **Enter**: Select highlighted suggestion or search
- **Escape**: Close suggestions dropdown

## 📁 Project Structure

```
react-weather-app/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── sunny.png
│   │       ├── cloudy.png
│   │       ├── rainy.png
│   │       ├── snowy.png
│   │       └── loading.gif
│   ├── Components/
│   │   ├── WeatherApp.jsx
│   │   └── WeatherApp.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Supported Weather Conditions

The app displays different themes based on weather conditions:

- **☀️ Clear**: Warm golden gradient
- **☁️ Clouds**: Cool blue-cyan gradient
- **🌧️ Rain**: Bright blue gradient
- **❄️ Snow**: Light blue to white gradient
- **🌫️ Haze/Mist**: Soft blue-cyan gradient

## 🚀 Deployment

This app can be deployed on various platforms. Here are instructions for popular deployment services:

### Vercel (Recommended)

1. **Fork or clone this repository**
2. **Sign up for [Vercel](https://vercel.com/)**
3. **Import your repository**
   - Go to Vercel dashboard
   - Click "New Project"
   - Import from GitHub
4. **Add environment variable**
   - In project settings, go to "Environment Variables"
   - Add: `VITE_WEATHER_API_KEY` = `your_openweathermap_api_key`
5. **Deploy**
   - Vercel will automatically build and deploy your app

### Netlify

1. **Fork this repository to your GitHub**
2. **Sign up for [Netlify](https://netlify.com/)**
3. **Create new site from Git**
   - Choose your repository
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Add environment variable**
   - Go to Site settings → Environment variables
   - Add: `VITE_WEATHER_API_KEY` = `your_openweathermap_api_key`
5. **Deploy**

### GitHub Pages (with GitHub Actions)

1. **Add GitHub Secrets**
   - Go to your repository settings
   - Navigate to "Secrets and variables" → "Actions"
   - Add repository secret: `VITE_WEATHER_API_KEY` = `your_api_key`

2. **Create GitHub Actions workflow**
   - Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      env:
        VITE_WEATHER_API_KEY: ${{ secrets.VITE_WEATHER_API_KEY }}
        
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created by action)

### Railway

1. **Sign up for [Railway](https://railway.app/)**
2. **Deploy from GitHub**
   - Connect your GitHub account
   - Select your repository
3. **Add environment variable**
   - In your project dashboard
   - Go to Variables tab
   - Add: `VITE_WEATHER_API_KEY` = `your_api_key`
4. **Configure build**
   - Railway auto-detects Vite projects
   - Build command: `npm run build`
   - Start command: `npx serve dist`

### Environment Variables Security

⚠️ **Important Security Notes:**
- Never commit your API key to the repository
- Always use environment variables for sensitive data
- The `.env` file is already in `.gitignore` to prevent accidental commits
- For production deployments, set environment variables in your hosting platform's dashboard

## 📱 Responsive Design

- **Desktop**: Full-featured layout with hover effects
- **Tablet**: Optimized spacing and touch targets
- **Mobile**: Compact layout with easy thumb navigation

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ziad Nagar**
- GitHub: [@ZiadNagar](https://github.com/ZiadNagar)
- Repository: [react-weather-app](https://github.com/ZiadNagar/react-weather-app)

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Font Awesome](https://fontawesome.com/) for the beautiful icons
- [Vite](https://vitejs.dev/) for the amazing build tool
- [React](https://reactjs.org/) for the powerful UI library

---

Made with ❤️ and React
