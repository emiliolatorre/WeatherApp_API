import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import WeatherCard from "./WeatherCard"; //conectarlo
import './WeatherList.css'
import axios from 'axios'

const APIKey = '82e1e17d4715a2ff66afc117dab644e3';
// FECTH WEATHER API - Ejercicio 1
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
// MADRID - // https://api.openweathermap.org/geo/1.0/direct?q=Madrid&limit=1&appid=82e1e17d4715a2ff66afc117dab644e3

// FETCH - EXTRA 2 (mi localizacion)
// capturamos mi localizacion - api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
// capturamos lat y lon - api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const WeatherList = () => {

  // ESTADOS / EFFECTS
  const [items, setItems] = useState([]); //por defecto fetch a Madrid
  const [value, setValue] = useState('Madrid');
  const [cityToPrint, setCityToPrint] = useState('Madrid');

  // FUNCIONES

  useEffect(() => {
    const getWeather = async () => {
      const resp = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=82e1e17d4715a2ff66afc117dab644e3`);
      const json = resp.data;
      const dataMadrid = json.list
      const cityName = json.city.name
      setCityToPrint(cityName);
      setItems(dataMadrid);
    }
    getWeather();
  }, [value]);

  const renderItems = () => items.map((item, i) =>
    <WeatherCard key={uuidv4()} dataItem={item} />
  );

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       // Petición HTTP
  //       const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=82e1e17d4715a2ff66afc117dab644e3`);
  //       const json = res.data;
  //       const dataCity = json.list

  //       // Guarda en el array de posts el resultado. Procesa los datos
  //       setValue(dataCity);
  //     } catch (e) {
  //       setValue([]) // No pintes nada 
  //     }
  //   }

  //   fetchData();
  // }, [value]);

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