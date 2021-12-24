import React, { useState } from "react";
import "./WeatherUnit.css";

export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("metric");
  const [temp, setTemp] = useState(props.temp);

  function showImperial(event) {
    event.preventDefault();
    setUnit("imperial");
    setTemp((props.temp * 9) / 5 + 32);
    console.log("celsius temp");
    console.log(temp);
  }

  function showMetric(event) {
    event.preventDefault();
    setUnit("metric");
    setTemp(props.temp);
    console.log("fahrenheit temp");
    console.log(temp);
  }

  if (unit === "metric") {
    return (
      <div>
        <h2 id="temperature-display">
          {Math.round(props.temp)}
          °C
        </h2>
        <span className="unit">
          <a href="/" onClick={showImperial}>
            °C | °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <h2 id="temperature-display">{Math.round(temp)}°F </h2>
        <span className="unit">
          <a href="/" onClick={showMetric}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
