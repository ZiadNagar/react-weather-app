# ⛅ React Weather App

A modern, responsive weather application built with React and Vite that provides real-time weather information with intelligent location search and auto-detection capabilities.

## ✨ Features

- **🌍 Auto-Location Detection**: Automatically detects user's current location for instant weather data
- **🔍 Smart Search**: Intelligent location search with autocomplete suggestions using OpenWeather Geocoding API
- **⌨️ Keyboard Navigation**: Full keyboard support with arrow keys, Enter, and Escape
- **📱 Responsive Design**: Beautiful UI that works perfectly on desktop and mobile devices
- **🎨 Dynamic Backgrounds**: Weather-based gradient backgrounds that change with conditions
- **🌡️ Real-time Data**: Current temperature, humidity, and wind speed information
- **📅 Current Date**: Displays current day and date
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🧩 Modular Architecture**: Clean component structure with custom hooks for better maintainability
- **🔧 Environment Variables**: Secure API key management with Vite environment variables
- **🎯 Error Handling**: Graceful error handling with fallback locations and user-friendly messages

## 🚀 Live Demo

Check out the live demo: [Weather App](https://zezo-weather-app.vercel.app/)

## � Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- OpenWeatherMap API key ([Get one here](https://openweathermap.org/api))

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-weather-app.git
   cd react-weather-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create environment file:

   ```bash
   cp .env.example .env
   ```

4. Add your OpenWeatherMap API key to `.env`:

   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## �🛠️ Technologies Used

- **React 19.1.0** - Modern React with hooks and functional components
- **Vite 7.0.0** - Fast build tool and development server
- **OpenWeatherMap API** - Weather data and geocoding services
- **CSS3** - Custom styling with gradients, animations, and responsive design
- **Font Awesome** - Icons for UI elements
- **ESLint** - Code linting and formatting
- **JavaScript ES6+** - Modern JavaScript features including async/await
- **Custom Hooks** - Reusable logic for weather data and date formatting
- **Component Architecture** - Modular design with separation of concerns

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

```text
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
│   │   ├── WeatherApp.jsx       # Main container component
│   │   ├── WeatherApp.css       # Styles for all components
│   │   ├── SearchBar.jsx        # Location search with suggestions
│   │   ├── WeatherDisplay.jsx   # Weather icon, type, and temperature
│   │   ├── WeatherData.jsx      # Humidity and wind information
│   │   ├── LoadingSpinner.jsx   # Loading state component
│   │   └── NotFound.jsx         # Error state component
│   ├── hooks/
│   │   ├── useWeatherData.js    # Weather API logic and state management
│   │   └── useFormattedDate.js  # Date formatting utilities
│   ├── constants/
│   │   └── weatherConstants.js  # Weather images and background mappings
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
├── vite.config.js
└── README.md
```

## �️ Component Architecture

### Core Components

- **`WeatherApp.jsx`** - Main container component that orchestrates all child components
- **`SearchBar.jsx`** - Handles location input, suggestions dropdown, and keyboard navigation
- **`WeatherDisplay.jsx`** - Displays weather icon, condition type, and temperature
- **`WeatherData.jsx`** - Shows humidity and wind speed information
- **`LoadingSpinner.jsx`** - Animated loading indicator during API calls
- **`NotFound.jsx`** - Error state component for invalid locations

### Custom Hooks

- **`useWeatherData.js`** - Manages all weather API calls, location detection, and state management
- **`useFormattedDate.js`** - Provides formatted date strings for display

### Constants

- **`weatherConstants.js`** - Centralized weather condition mappings for images and backgrounds

### Benefits of This Architecture

- **🔄 Separation of Concerns**: Each component has a single responsibility
- **♻️ Reusability**: Components can be easily reused or modified
- **🧪 Testability**: Individual components can be tested in isolation
- **🛠️ Maintainability**: Easy to debug and update specific functionality
- **📦 Scalability**: Simple to add new features or weather conditions

## �🎨 Supported Weather Conditions

The app displays different themes based on weather conditions:

- **☀️ Clear**: Warm golden gradient
- **☁️ Clouds**: Cool blue-cyan gradient
- **🌧️ Rain**: Bright blue gradient
- **❄️ Snow**: Light blue to white gradient
- **🌫️ Haze/Mist**: Soft blue-cyan gradient

## 🔧 Development Setup

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_WEATHER_API_KEY=your_openweather_api_key_here
```

### API Endpoints Used

- **Current Weather**: `https://api.openweathermap.org/data/2.5/weather`
- **Geocoding**: `https://api.openweathermap.org/geo/1.0/direct`

### Key Features Implementation

- **Location Detection**: Uses `navigator.geolocation` with high accuracy settings
- **Smart Caching**: Cached location data for 5 minutes to reduce API calls
- **Debounced Search**: Suggestions only trigger after 2+ characters to optimize performance
- **Keyboard Navigation**: Full accessibility with arrow keys and Enter/Escape
- **Error Boundaries**: Graceful handling of network errors and invalid locations

## 📱 Responsive Design

The app adapts to different screen sizes:

- **Desktop**: Full-featured layout with large weather display
- **Tablet**: Optimized spacing and touch-friendly controls
- **Mobile**: Compact design with easy-to-use search interface

## 🔒 Security Best Practices

- **Environment Variables**: API keys stored securely in `.env` files
- **Input Validation**: All user inputs are validated before API calls
- **Error Handling**: Comprehensive error catching prevents app crashes
- **Rate Limiting**: Smart API usage to avoid hitting rate limits
