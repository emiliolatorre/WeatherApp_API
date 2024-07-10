import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import WeatherCard from "./WeatherCard"; //conectarlo
import './WeatherList.css'
import axios from 'axios'

const APIKey = '82e1e17d4715a2ff66afc117dab644e3';

const WeatherList = () => {

  // ESTADOS / EFFECTS
  const [items, setItems] = useState([]); //por defecto fetch a Madrid
  const [value, setValue] = useState('Madrid');
  const [cityToPrint, setCityToPrint] = useState('Madrid');

  // FUNCIONES

  useEffect(() => {
    const getWeather = async () => {
      try {
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=82e1e17d4715a2ff66afc117dab644e3`);
        const json = resp.data;
        const dataMadrid = json.list
        const cityName = json.city.name
        setCityToPrint(cityName);
        setItems(dataMadrid);
      } catch (error) {
        setValue([])
      }
    }
    getWeather();
  }, [value]);

  const renderItems = () => items.map((item, i) =>
    <WeatherCard key={uuidv4()} dataItem={item} />
  );

  const handleSubmit = e => {
    e.preventDefault();
    const newCity = e.target.city.value;
    console.log(newCity);
    setValue(newCity);
    e.target.reset();
  };



  // RETURN

  return <section>

    {/* Formulario con input + boton para buscar una ciudad*/}
    <h2>Busca una ciudad</h2>
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="city" placeholder="Introduce tu Ciudad" />
      <button className="btnSearch" type="submit">Buscar</button>
    </form>


    <h2>{cityToPrint} - Clima de la semana</h2>
    {renderItems()}
  </section>;
};

export default WeatherList;