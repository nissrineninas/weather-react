import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setdescription] = useState(null);
  let [humidity, sethumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let unit = "metric";

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      let key = "ab10edc1d32f1dd18832060f89f088c3";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`;

      axios
        .get(apiUrl)
        .then(setWeatherVariables)
        .catch(function (error) {
          emptyWeather();
          alert(`${city} cannot be found, please check your entry`);
        });
    } else {
      alert("please enter a city to search for");
    }
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function setWeatherVariables(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setdescription(response.data.weather[0].description);
    sethumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }
  function emptyWeather() {
    setTemperature(null);
    setdescription(null);
    sethumidity(null);
    setWind(null);
    setIcon(null);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder={city}
          onChange={updateCity}
          autoFocus={true}
        />
        <input type="submit" value="Search" />
      </form>
      <ul className="weather-desciption">
        <li>
          <strong>City:</strong> {city}
        </li>
        <li>
          <strong>Temperature:</strong> {temperature}°C
        </li>
        <li>
          <strong>Description:</strong> {description}
        </li>
        <li>
          <strong>Humidity:</strong> {humidity}
        </li>
        <li>
          <strong>Wind:</strong> {wind}
        </li>
        <img
          alt="weather icon"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        ></img>
      </ul>{" "}
    </div>
  );
}
