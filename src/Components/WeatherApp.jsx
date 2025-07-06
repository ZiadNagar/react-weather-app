import loadingGif from "../assets/images/loading.gif";
import { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherDisplay from "./WeatherDisplay";
import WeatherData from "./WeatherData";
import LoadingSpinner from "./LoadingSpinner";
import NotFound from "./NotFound";
import useWeatherData from "../hooks/useWeatherData";
import useFormattedDate from "../hooks/useFormattedDate";
import { weatherImages, backgroundImages } from "../constants/weatherConstants";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const {
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
  } = useWeatherData();

  const formattedDate = useFormattedDate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    fetchSuggestions(value);
  };

  const handleSuggestionClick = async (suggestion) => {
    setLocation(suggestion.displayName);
    setShowSuggestions(false);
    setSuggestions([]);
    await searchWeatherByCoords(suggestion.lat, suggestion.lon);
    setLocation("");
  };

  const search = async () => {
    if (location.trim() !== "") {
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
      await searchWeatherByLocation(location);
      setLocation("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (
        showSuggestions &&
        selectedSuggestionIndex >= 0 &&
        selectedSuggestionIndex < suggestions.length
      ) {
        handleSuggestionClick(suggestions[selectedSuggestionIndex]);
      } else {
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
    setTimeout(() => {
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
    }, 200);
  };

  const weatherImage = data.weather
    ? weatherImages[data.weather[0].main]
    : null;
  const backgroundImage = data.weather
    ? backgroundImages[data.weather[0].main]
    : "linear-gradient(to right, #f3b07c, #fcd283)";

  const locationDisplay = data.notFound
    ? "No location found"
    : data.name && data.sys
    ? `${data.name}, ${data.sys.country}`
    : "Loading...";

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
        <SearchBar
          location={location}
          onLocationChange={handleInputChange}
          onSearch={search}
          suggestions={suggestions}
          showSuggestions={showSuggestions}
          selectedSuggestionIndex={selectedSuggestionIndex}
          onSuggestionClick={handleSuggestionClick}
          onKeyDown={handleKeyDown}
          onInputFocus={handleInputFocus}
          onInputBlur={handleInputBlur}
          locationDisplay={locationDisplay}
        />
        {loading ? (
          <LoadingSpinner loadingGif={loadingGif} />
        ) : data.notFound ? (
          <NotFound />
        ) : (
          <>
            <WeatherDisplay
              weatherImage={weatherImage}
              weatherType={data.weather ? data.weather[0].main : null}
              temperature={data.main ? `${Math.floor(data.main.temp)}°` : null}
              currentDate={formattedDate}
            />
            <WeatherData
              humidity={data.main ? data.main.humidity : null}
              windSpeed={data.wind ? data.wind.speed : null}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
