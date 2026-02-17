import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [city, SetCity] = useState("");
  const [weather, SetWeather] = useState(null);
  const [error, SetError] = useState("");

  const fetchWeather = async () => {
    try {
      SetError("")
      SetWeather(null)

      const geoApi = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`,
      );
      const geoData = await geoApi.json();

      if (!geoData.results || geoData.results.length == 0) {
        SetError("City not found. Try something else.");
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      const weather = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&timezone=auto`,
      );

      const weatherData = await weather.json();

      SetWeather({
        city: name,
        country,
        temperature: weatherData.current.temperature_2m,
        wind: weatherData.current.wind_speed_10m,
        latitude: latitude,
        longitude: longitude,
      });
      
    } catch (error) {
      SetError("error");
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar city={city} SetCity={SetCity} fetchWeather={fetchWeather} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search"
          element={<Search error={error} weather={weather} />}
        />
      </Routes>
    </div>
  );
}

export default App;
