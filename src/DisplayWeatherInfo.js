import React from "react";
import Date from "./Date";
import WeatherUnit from "./WeatherUnit";

export default function DisplayWeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-6">
        <p>{props.city}</p>
        <ul>
          <li>
            <Date date={props.date} />
          </li>
        </ul>
        <div>
          <WeatherUnit temp={props.temp} defaultValue="Unit" />
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>
            <strong>Description:</strong> {props.desc}
          </li>
          <li>
            <strong>Humidity:</strong> {props.humidity}
          </li>
          <li>
            <strong>Wind:</strong> {props.wind}
          </li>
          <li>
            <img
              alt="weather icon"
              src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
            />
          </li>
        </ul>{" "}
      </div>
    </div>
  );
}
