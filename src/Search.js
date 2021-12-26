import React, { useState } from "react";
import DisplayWeatherInfo from "./DisplayWeatherInfo";
// import Forecast from "./Forecast";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState();
  const [callApi, setCallApi] = useState(false);
  // const [callForcastApiFlag, setCallForcastApiFlag] = useState(false);
  //let callForcastApiFlag = false;
  let unit = props.unit;
  // let callForcastApiFlag = 0;
  // let [lat, setLat] = useState(null);
  // let [lon, setLon] = useState(null);
  const [weatherData, setWeatherData] = useState({
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
    //callForcastApiFlag = true;
    // setCallForcastApiFlag(true)
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function connectToApi() {
    setCallApi(false);

    // let key = "8e2aa47d8f12b05a2e1ea5f309432997";
    let key = "ab10edc1d32f1dd18832060f89f088c3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`;
    console.log(`SEARCH apiURL --------->${apiUrl}`);
    axios
      .get(apiUrl)
      .then(setWeatherVariables)
      .catch(function (error) {
        emptyWeather();
        // setCallForcastApiFlag(false);
        // callForcastApiFlag = false;

        alert(`${city} cannot be found, please check your entry`);
      });
  }

  function setWeatherVariables(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    // setLon(response.data.coord.lon);
    // setLat(response.data.coord.lat);
    // setCallForcastApiFlag(true);
    // callForcastApiFlag = true;
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
  }

  if (callApi) {
    connectToApi();
    // callForcastApiFlag = true;
    // return callForcastApiFlag;
  }

  let forcast = null;
  // if (callForcastApiFlag) {
  //   // console.log(`if statement here --> ${callForcastApiFlag}`);
  //   console.log("pass true");
  //   forcast = (
  //     <Forecast
  //       callForcastApi={callForcastApiFlag.toString()}
  //       unit={unit}
  //       lat={lat}
  //       lon={lon}
  //     />
  //   );
  //   setCallForcastApiFlag(false);
  //   // callForcastApiFlag = false;
  // } else {
  //   forcast = (
  //     <Forecast callForcastApi={"donot"} unit={unit} lat={lat} lon={lon} />
  //   );
  // }

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
        date={weatherData.date}
      />
      {forcast}
    </div>
  );
}
