import React from "react";
import WeatherList from './WeatherList'
import './Main.css';

const Main = () => {
  return <main className="main">
    <h1>WeatherApp</h1>
    <WeatherList />
  </main>;
};

export default Main;