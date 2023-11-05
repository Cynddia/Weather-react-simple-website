import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Home from './components/home';
import Solutions from './components/solutions';
import Company from './components/company';
import Connect from './components/connect';
import WeatherComponent from './components/WeatherComponent';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/company" element={<Company />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
        <WeatherComponent cityName="Chennai" />
      </div>
    </>
  );
}

export default App;



