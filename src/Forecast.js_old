import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast(props) {
  console.log(props);
  const [forecastWeatherMaxData, setForecastWeatherMaxData] = useState(null);

  // const [callForcastApi, setCallForcastApi] = useState(props.callForcastApi);

  function setForecastVariables(response) {
    // setCallForcastApi(false);
    // setForecastWeatherData(response.data.daily[1].temp.morn);
    setForecastWeatherMaxData(
      response.data.daily.map(function (forecastWeatherData, index) {
        return <li key={index}>{forecastWeatherData.temp.max};</li>;
      })
    );
    console.log(`Forcast VAR data:-------> ${forecastWeatherMaxData}`);
  }

  // return <div>should work now</div>; //delete this line just for testing
  console.log("should i call forcast api?");
  console.log(props.callForcastApi);
  if (props.callForcastApi === "pleasecall") {
    console.log("call forcast api");
    return "I WILL CONNECT";
    // let key = "8e2aa47d8f12b05a2e1ea5f309432997";
    let key = "ab10edc1d32f1dd18832060f89f088c3";
    let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&units=${props.unit}&exclude=hourly,minutely,alerts&appid=${key}`;
    axios.get(forecastUrl).then(setForecastVariables);
  } else {
    // console.log("DO NOT call forcast api");
  }

  return (
    <section className="fiveDaysFutureForcast">
      <div className="row justify-content-center">
        <h5 className="futureForecast">The next 5 days</h5>

        <div className="col-2 justify-content-around">
          <div className="card">
            <div>Tomorrow</div>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="#ADFF2F"
              size={50}
              animate={true}
            />

            <div> {forecastWeatherMaxData} °C / 9° C</div>
          </div>
        </div>
        <div className="col-2 justify-content-around">
          <div className="card">
            <div>Tmrw+1</div>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="#ADFF2F"
              size={50}
              animate={true}
            />
            <div>18 °C / 9° C</div>
          </div>
        </div>
        <div className="col-2 justify-content-around">
          <div className="card">
            <div>Tmrw+2</div>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="#ADFF2F"
              size={50}
              animate={true}
            />
            <div>18 °C / 9° C</div>
          </div>
        </div>
        <div className="col-2 justify-content-around">
          <div className="card">
            <div>Tmrw+3</div>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="#ADFF2F"
              size={50}
              animate={true}
            />
            <div>18 °C / 9° C</div>
          </div>
        </div>
        <div className="col-2 justify-content-around">
          <div className="card ">
            <div>Tmrw+4</div>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="#ADFF2F"
              size={50}
              animate={true}
            />
            <div>18 °C / 9° C</div>
          </div>
        </div>
        <small>
          open source code by{" "}
          <a
            className="github-link"
            href="https://github.com/nissrineninas/weather-react"
          >
            Nissrine Saraireh
          </a>
        </small>
      </div>
    </section>
  );
}
