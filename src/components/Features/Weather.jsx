import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";
const Weather = () => {
  const city = "Berlin";
  const country = "Germany";
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const [weather, setWeather] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
      );

      setWeather({
        description: response.data.weather[0].description,
        temperature: Math.floor(response.data.main.temp),
        max: Math.round(response.data.main.temp_max),
      });
    };
    fetchData();
  }, []);
  console.log(weather);
  return (
    <div className="weather-container">
      {weather.description === "clear sky" ||
      weather.description === "broken clouds" ||
      weather.description === "few clouds" ? (
        <div className="sunny"></div>
      ) : weather.description === "scattered clouds" ? (
        <div className="cloudy"></div>
      ) : weather.description === "shower rain" ? (
        <div className="rainy"></div>
      ) : weather.description === "rain" ? (
        <div className="rainbow"></div>
      ) : weather.description === "thunderstorm" ? (
        <div className="stormy"></div>
      ) : weather.description === "snow" ? (
        <div className="snowy"></div>
      ) : null}

      <div>
        <span>
          {" "}
          <small>
            in {city} today: {weather.max}°C
          </small>
        </span>
      </div>
    </div>
  );
};

export default Weather;
