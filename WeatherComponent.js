import React, { useState, useEffect } from 'react';

const WeatherComponent = ({ cityName }) => {
  const [weather, setWeather] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWeather(Math.floor(Math.random() * 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{cityName} Weather</h2>
      <h1 style={{ fontSize: '48px', margin: '20px' }}>{weather}</h1>
      <h3>Can you predict the weather?</h3>
    </div>
  );
};

export default WeatherComponent;