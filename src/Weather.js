import React from "react";

export default function Forecast() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <span className="clearfix weather-icon-temperature">
            <img
              src="#"
              alt="weather-forecast"
              id="weather-icon"
              className="float-left"
            />
            <span className="float-left auto">
              <strong id="temperature-display">Current Temp </strong>
              <span className="unit">
                <button href="#" id="celsius-convertor" className="active">
                  °C
                </button>
                |
                <button href="#" id="fahrenheit-convertor">
                  °F
                </button>
              </span>
            </span>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <span id="precipitation"> Precipitation</span>
              <span id="precipitation-unit"> unit</span>
            </li>
            <li>
              <span id="humidity">Humidity</span>
            </li>
            <li>
              <span id="wind">Wind</span>
              <span id="wind-unit">unit</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
