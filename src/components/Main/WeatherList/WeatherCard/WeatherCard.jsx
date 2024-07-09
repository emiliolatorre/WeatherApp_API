import React from "react";
import './WeatherCard.css'

const WeatherCard = ({ dataItem: { dt_txt, main, weather } }) => {

  let tempMinKelvin = main.temp_min;
  let tempMinCelsius = tempMinKelvin - 273.15;
  let tempMinCelsiusRounded = tempMinCelsius.toFixed(2);

  let tempMaxKelvin = main.temp_max;
  let tempMaxCelsius = tempMaxKelvin - 273.15;
  let tempMaxCelsiusRounded = tempMaxCelsius.toFixed(2);

  let weatherObj = {...weather}
  let desc = weatherObj[0].description;

  let icon = weatherObj[0].icon
  const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`

  return <article>
    <div className="text-container">
      <h3>{dt_txt}</h3>
      <p>{desc}</p>
      <p className="status">Temperatura Min: {tempMinCelsiusRounded} °C</p>
      <p className="status">Temperatura Max: {tempMaxCelsiusRounded} °C</p>
      <img src={iconURL} alt="icon" />
    </div>
  </article>;
};

export default WeatherCard;