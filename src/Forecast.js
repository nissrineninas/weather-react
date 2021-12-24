import React from "react";
import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast(props) {
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

            <div>18 °C / 9° C</div>
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
