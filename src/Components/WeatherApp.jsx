import sunny from "../assets/images/sunny.png";
import cloudy from "../assets/images/cloudy.png";
import rainy from "../assets/images/rainy.png";
import snowy from "../assets/images/snowy.png";
import loadingGif from "../assets/images/loading.gif";
import { useState, useEffect } from "react";

const WeatherApp = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
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
            } catch (error) {
              console.error(
                "Error fetching weather for current location:",
                error
              );
              // Fallback to Alexandria if API fails
              await fetchFallbackWeather();
            }
            setLoading(false);
          },
          async (error) => {
            // Error or permission denied: Use fallback location
            console.log("Geolocation error:", error.message);
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
        console.log("Geolocation is not supported by this browser.");
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
      } catch (error) {
        console.error("Error fetching fallback weather:", error);
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
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    fetchSuggestions(value);
  };

  const handleSuggestionClick = async (suggestion) => {
    setLocation(suggestion.displayName);
    setShowSuggestions(false);
    setSuggestions([]);

    setLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${suggestion.lat}&lon=${suggestion.lon}&units=Metric&appid=${api_key}`;
      const res = await fetch(url);
      const weatherData = await res.json();
      setData(weatherData);
      setLocation("");
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setData({ notFound: true });
    }
    setLoading(false);
  };

  const search = async () => {
    if (location.trim() !== "") {
      setLoading(true);
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`;
      const res = await fetch(url);
      const searchData = await res.json();
      if (searchData.cod !== 200) {
        setData({ notFound: true });
      } else {
        setData(searchData);
        setLocation("");
      }
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (
        showSuggestions &&
        selectedSuggestionIndex >= 0 &&
        selectedSuggestionIndex < suggestions.length
      ) {
        // Select the highlighted suggestion
        handleSuggestionClick(suggestions[selectedSuggestionIndex]);
      } else {
        // No suggestion selected, perform regular search
        search();
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (showSuggestions && suggestions.length > 0) {
        setSelectedSuggestionIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (showSuggestions && suggestions.length > 0) {
        setSelectedSuggestionIndex((prev) =>
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
      }
    }
  };

  const handleInputFocus = () => {
    if (suggestions.length > 0) {
      setShowSuggestions(true);
      setSelectedSuggestionIndex(-1);
    }
  };

  const handleInputBlur = () => {
    // Delay hiding suggestions to allow click on suggestion
    setTimeout(() => {
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
    }, 200);
  };

  const weatherImages = {
    Clear: sunny,
    Clouds: cloudy,
    Rain: rainy,
    Snow: snowy,
    Haze: cloudy,
    Mist: cloudy,
  };

  const weatherImage = data.weather
    ? weatherImages[data.weather[0].main]
    : null;

  const backgroundImages = {
    Clear: "linear-gradient(to right, #f3b07c, #fcd283)",
    Clouds: "linear-gradient(to right, #57d6d4, #71eeec)",
    Rain: "linear-gradient(to right, #5bc8fb, #80eaff)",
    Snow: "linear-gradient(to right, #aff2ff, #fff)",
    Haze: "linear-gradient(to right, #57d6d4, #71eeec)",
    Mist: "linear-gradient(to right, #57d6d4, #71eeec)",
  };

  const backgroundImage = data.weather
    ? backgroundImages[data.weather[0].main]
    : "linear-gradient(to right, #f3b07c, #fcd283)";

  const currentDate = new Date();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const dayOfMonth = currentDate.getDate();

  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;

  return (
    <div className="container" style={{ backgroundImage }}>
      <div
        className="weather-app"
        style={{
          backgroundImage:
            backgroundImage && backgroundImage.replace
              ? backgroundImage.replace("to right", "to top")
              : null,
        }}
      >
        <div className="search">
          <div className="search-top">
            <i className="fa-solid fa-location-dot"></i>
            <div className="location">
              {data.notFound
                ? "No location found"
                : data.name && data.sys
                ? `${data.name}, ${data.sys.country}`
                : "Loading..."}
            </div>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
            {showSuggestions && suggestions.length > 0 && (
              <div className="suggestions-dropdown">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className={`suggestion-item ${
                      index === selectedSuggestionIndex ? "selected" : ""
                    }`}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <i className="fa-solid fa-location-dot"></i>
                    <span>{suggestion.displayName}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {loading ? (
          <img className="loader" src={loadingGif} alt="loading" />
        ) : data.notFound ? (
          <div className="not-found">Not Found 😒</div>
        ) : (
          <>
            <div className="weather">
              <img src={weatherImage} alt="sunny" />
              <div className="weather-type">
                {data.weather ? data.weather[0].main : null}
              </div>
              <div className="temp">
                {data.main ? `${Math.floor(data.main.temp)}°` : null}
              </div>
            </div>
            <div className="weather-date">
              <p>{formattedDate}</p>
            </div>
            <div className="weather-data">
              <div className="humidity">
                <div className="data-name">Humidity</div>
                <i className="fa-solid fa-droplet"></i>
                <div className="data">
                  {data.main ? data.main.humidity : null}%
                </div>
              </div>
              <div className="wind">
                <div className="data-name">Wind</div>
                <i className="fa-solid fa-wind"></i>
                <div className="data">
                  {data.wind ? data.wind.speed : null} km/h
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
