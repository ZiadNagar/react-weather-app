const WeatherDisplay = ({
  weatherImage,
  weatherType,
  temperature,
  currentDate,
}) => {
  return (
    <>
      <div className="weather">
        <img src={weatherImage} alt="weather" />
        <div className="weather-type">{weatherType}</div>
        <div className="temp">{temperature}</div>
      </div>
      <div className="weather-date">
        <p>{currentDate}</p>
      </div>
    </>
  );
};

export default WeatherDisplay;
