import { useState, useEffect } from "react";

const useWeatherData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const api_key = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const fetchDefaultWeather = async () => {
      setLoading(true);

      // Try to get user's current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            // Success: Use user's coordinates
            const { latitude, longitude } = position.coords;
            try {
              const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=Metric&appid=${api_key}`;
              const res = await fetch(url);
              const defaultData = await res.json();
              setData(defaultData);
            } catch {
              // Fallback to Alexandria if API fails
              await fetchFallbackWeather();
            }
            setLoading(false);
          },
          async () => {
            // Error or permission denied: Use fallback location
            await fetchFallbackWeather();
            setLoading(false);
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 300000, // 5 minutes
          }
        );
      } else {
        // Geolocation not supported: Use fallback location
        await fetchFallbackWeather();
        setLoading(false);
      }
    };

    const fetchFallbackWeather = async () => {
      try {
        const defaultLocation = "Alexandria"; // Fallback location
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=Metric&appid=${api_key}`;
        const res = await fetch(url);
        const defaultData = await res.json();
        setData(defaultData);
      } catch {
        setData({ notFound: true });
      }
    };

    fetchDefaultWeather();
  }, [api_key]);

  const fetchSuggestions = async (query) => {
    if (query.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
      return;
    }

    try {
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${api_key}`;
      const res = await fetch(url);
      const suggestionData = await res.json();

      const formattedSuggestions = suggestionData.map((item) => ({
        name: item.name,
        country: item.country,
        state: item.state,
        lat: item.lat,
        lon: item.lon,
        displayName: `${item.name}${item.state ? `, ${item.state}` : ""}, ${
          item.country
        }`,
      }));

      setSuggestions(formattedSuggestions);
      setShowSuggestions(true);
      setSelectedSuggestionIndex(-1);
    } catch {
      setSuggestions([]);
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
    }
  };

  const searchWeatherByCoords = async (lat, lon) => {
    setLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=Metric&appid=${api_key}`;
      const res = await fetch(url);
      const weatherData = await res.json();

      if (weatherData.cod !== 200) {
        setData({ notFound: true });
      } else {
        setData(weatherData);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setData({ notFound: true });
    }
    setLoading(false);
  };

  const searchWeatherByLocation = async (location) => {
    setLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`;
      const res = await fetch(url);
      const searchData = await res.json();

      if (searchData.cod !== 200) {
        setData({ notFound: true });
      } else {
        setData(searchData);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setData({ notFound: true });
    }
    setLoading(false);
  };

  return {
    data,
    loading,
    suggestions,
    showSuggestions,
    selectedSuggestionIndex,
    setShowSuggestions,
    setSelectedSuggestionIndex,
    setSuggestions,
    fetchSuggestions,
    searchWeatherByCoords,
    searchWeatherByLocation,
  };
};

export default useWeatherData;
