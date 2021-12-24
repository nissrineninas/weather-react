import React, { useState } from "react";
import DisplayWeatherInfo from "./DisplayWeatherInfo";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState();
  const [callAPI, setCallApi] = useState(false);
  let [date, setDate] = useState(new Date());
  let unit = props.unit;
  let [weatherData,setweatherDataTwo]= useState(null);
  const [weatherData, setWeatherData] = useState({
    coordinates: null,
    temperature: null,
    humidity: null,
    date: null,
    description: null,
    icon: null,
    wind: null,
    city: null,
  });

  function handleSubmit(event) {
    event.preventDefault();
    setCallApi(true);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function connectToAPI() {
    setCallApi(false);
    let key = "ab10edc1d32f1dd18832060f89f088c3";
    let count = 5;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=${count}&units=${unit}&appid=${key}`;
    axios
      .get(apiUrl)
      .then(setWeatherVariables)
      .catch(function (error) {
        emptyWeather();
        alert(`${city} cannot be found, please check your entry`);
      });
  }

  function setWeatherVariables(response) {
    console.log(response.data.list[0]);
    setDate(new Date(response.data.list[0].dt * 1000));
    setWeatherData({
      coordinates: response.data.coord,
      temperature: response.data.list[0].main.temp,
      temperatureDayOneMax: response.data.list[1].main.temp_max,
      temperatureDayOneMin: response.data.list[1].main.temp_min,
      humidity: response.data.list[0].main.humidity,
      date: new Date(response.data.list[0].dt * 1000),
      description: response.data.list[0].weather[0].description,
      icon: response.data.list[0].weather[0].icon,
      wind: response.data.list[0].wind.speed,
      city: response.data.city.name,
    });
    setweatherDataTwo(response.data);
  }
  function emptyWeather() {
    setWeatherData({
      temperature: null,
      description: null,
      humidity: null,
      wind: null,
      icon: null,
      city: null,
      date: null,
    });
    setDate(new Date());
  }

  if (callAPI) {
    connectToAPI();
    return "Loading...";
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
      <DisplayWeatherInfo
        city={weatherData.city}
        temp={weatherData.temperature}
        desc={weatherData.description}
        humidity={weatherData.humidity}
        wind={weatherData.wind}
        icon={weatherData.icon}
        date={date}
      />
      <forecast data={weatherData}; />
    </div>
  );
}
