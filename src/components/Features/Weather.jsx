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
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
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
      {/* sunny */}
      {weather.description === "clear sky" ||
      "broken clouds" ||
      "few clouds" ? (
        <div className="sunny"></div>
      ) : null}
      {/* cloudy */}
      {weather.description === "scattered clouds" ? (
        <div className="cloudy"></div>
      ) : null}
      {/* rainy */}
      {weather.description === "shower rain" ? (
        <div className="rainy"></div>
      ) : null}
      {/* rainbow */}
      {weather.description === "rain" ? <div className="rainbow"></div> : null}
      {/* stormy */}
      {weather.description === "thunderstorm" ? (
        <div className="stormy"></div>
      ) : null}
      {/* snow  */}
      {weather.description === "snow" ? <div className="snowy"></div> : null}

      <div>
        <span>
          <strong> {weather.description} </strong>
        </span>
        <span> current:{weather.temperature}°C,</span>
        <span> today max:{weather.max}°C</span>
      </div>
    </div>
  );
};

export default Weather;
