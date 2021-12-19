import React, { useState } from "react";
import "./Search.css";
import Date from "./Date";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setdescription] = useState(null);
  let [humidity, sethumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let unit = "metric";
  let date = new Date();

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
    date = response.data.dt * 1000;
    console.log(response.data.dt * 1000);
    console.log(date);
  }

  function emptyWeather() {
    setTemperature(null);
    setdescription(null);
    sethumidity(null);
    setWind(null);
    setIcon(null);
  }

  return (
    <div className="container border-0">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-9">
            <input
              type="search"
              placeholder="Enter a city"
              onChange={updateCity}
              autoFocus={true}
            />
          </div>
          <div className="col-md-3">
            <input type="submit" value="Search" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-6">
          <p>{city}</p>
          <ul>
            <li>
              <Date dt={date} />
            </li>
          </ul>
          <h2>{temperature}°C</h2>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <strong>Description:</strong> {description}
            </li>
            <li>
              <strong>Humidity:</strong> {humidity}
            </li>
            <li>
              <strong>Wind:</strong> {wind}
            </li>
            <li>
              <img
                alt="weather icon"
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              />
            </li>
          </ul>{" "}
        </div>
      </div>
    </div>
  );
}
