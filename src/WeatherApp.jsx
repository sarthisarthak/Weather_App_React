import React from "react";
import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 29.05,
    tempMin: 29.05,
    tempMax: 29.05,
    humidity: 32,
    feelsLike: 28.04,
    weather: "haze",
  });
  function updateInfo(newinfo) {
    setWeatherInfo(newinfo);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>WeatherApp</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
};

export default WeatherApp;
