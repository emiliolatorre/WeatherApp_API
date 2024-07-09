import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import WeatherCard from "./WeatherCard"; //conectarlo
import './WeatherList.css'
import axios from "axios";

const APIKey = '82e1e17d4715a2ff66afc117dab644e3';
// FECTH WEATHER API - Ejercicio 1
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
// MADRID - // https://api.openweathermap.org/geo/1.0/direct?q=Madrid&limit=1&appid=82e1e17d4715a2ff66afc117dab644e3

// FETCH - EXTRA 2 (mi localizacion)
// capturamos mi localizacion - api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
// capturamos lat y lon - api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const WeatherList = () => {

  const dataMadrid = axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  // ESTADOS / EFFECTS
  const [items, setItems] = useState(data); //por defecto fetch a Madrid
  const [value, setValue] = useState({
    city: 'Madrid'
  });

  // FUNCIONES
  const renderItems = () => items.map((item, i) =>
    <WeatherCard key={uuidv4()} dataItem={item} />
  );

  const handleSubmit = (e) => {
    e.preventDefault()
    const city = e.target.city.value;

    // const newItem = { title, desc, status } FETCH
    const data = axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

    setItems([...data, newItem])

    // // Limpiar el formulario
    e.target.reset()
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.city]: e.target.value
    });
  }



  // RETURN

  return <section>

    <h1>WeatherApp</h1>

    {/* Formulario con input + boton para buscar una ciudad*/}
    <h2>Busca una ciudad</h2>
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input type="text" name="city" placeholder="Introduce tu Ciudad" onChange={handleChange} />
      </div>
    </form>


    <h2>Clima de la semana</h2>
    {renderItems()}
  </section>;
};

export default WeatherList;