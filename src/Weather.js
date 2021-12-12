import React from "react";

export default function WeatherToday() {
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
      </div>
    </div>
  );
}
