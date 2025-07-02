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

Check out the live demo: [Weather App](https://zezo-weather-app.vercel.app/)

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
