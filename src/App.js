import './App.css';
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {

  const[city, SetCity] = useState('');
  const[weather, SetWeather] = useState(null);
  const[error, SetError] = useState('');

  const fetch = () => {
    try {
      SetError('');
      SetWeather(null);

      const geoApi = fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
      const geoData = geoApi.json();

      if (!geoData.results || geoData.results.length == 0) {
        SetError('city not found');
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      const weather = fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&timezone=auto`);

      const weatherData = weather.json();

      SetWeather = ({
        city : name, country,
        temperature : weatherData.current.temperature_2m,
        elevation : elevation
      });

    } catch (err) {
      SetError('error')
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar city={city} SetCity={SetCity}/>
    </div>
  );
}

export default App;