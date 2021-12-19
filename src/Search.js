import React, { useState } from "react";
import DisplayWeatherInfo from "./DisplayWeatherInfo";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState("Munich");
  const [ready, setReady] = useState(false);
  let [temperature, setTemperature] = useState(null);
  let [description, setdescription] = useState(null);
  let [humidity, sethumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [date, setDate] = useState(new Date());
  let unit = props.unit;
  // const [weatherData, setWeatherData] = useState({
  //   ready: false,
  //   coordinates: null,
  //   temperature: null,
  //   humidity: null,
  //   date: null,
  //   description: null,
  //   icon: null,
  //   wind: null,
  //   city: null,
  // });

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      connectToAPI();
    }
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
    console.log(city);
  }

  function connectToAPI() {
    setReady(true);
    let key = "ab10edc1d32f1dd18832060f89f088c3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`;
    axios
      .get(apiUrl)
      .then(setWeatherVariables)
      .catch(function (error) {
        emptyWeather();
        alert(`${city} cannot be found, please check your entry`);
      });
    setReady(true);
  }

  function setWeatherVariables(response) {
    setTemperature(response.data.main.temp);
    setdescription(response.data.weather[0].description);
    sethumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
    setDate(new Date(response.data.dt * 1000));
    // console.log(date);
    console.log(new Date(response.data.dt * 1000));
    console.log(date);
    console.log(response.data);
    // setWeatherData({
    //   ready: true,
    //   coordinates: response.data.coord,
    //   temperature: Math.round(response.data.main.temp),
    //   humidity: response.data.main.humidity,
    //   date: new Date(response.data.dt * 1000),
    //   description: response.data.weather[0].description,
    //   icon: response.data.weather[0].icon,
    //   wind: response.data.wind.speed,
    //   city: response.data.name,
    // });

    // console.log(weatherData);
    // console.log(weatherData.ready);
    // console.log(weatherData.temperature);
    // console.log(weatherData.description);
    // console.log(weatherData.humidity);
    // console.log(weatherData.wind);
  }
  function emptyWeather() {
    // setWeatherData({
    //   ready: false,
    //   temperature: null,
    //   description: null,
    //   humidity: null,
    //   wind: null,
    //   icon: null,
    //   city: null,
    //   date: null,
    // });
    setReady(false);
    setTemperature(null);
    setdescription(null);
    sethumidity(null);
    setWind(null);
    setIcon(null);
    setDate(new Date());
  }

  if (ready) {
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
          city={city}
          temp={temperature}
          desc={description}
          humidity={humidity}
          wind={wind}
          icon={icon}
          date={date}
        />
      </div>
    );
  } else {
    if (city) {
      connectToAPI();
      return "Loading...";
    }
  }
}
// }
