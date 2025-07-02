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

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ZiadNagar/react-weather-app.git
   cd react-weather-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   - Create a `.env` file in the root directory
   - Get your API key from [OpenWeatherMap](https://openweathermap.org/api)
   - Add your API key to the `.env` file:

   ```env
   VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`

## 🌐 API Setup

This app uses the OpenWeatherMap API for weather data and geocoding:

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate your API key
4. Add it to your `.env` file as `VITE_WEATHER_API_KEY`

The app uses two API endpoints:

- **Current Weather API**: For real-time weather data
- **Geocoding API**: For location search and suggestions

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
