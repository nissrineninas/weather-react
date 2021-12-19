import React, { useState } from "react";
// import Search from "./Search";

export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("metric");
  const [temp, setTemp] = useState(props.temp);

  function showImperial(event) {
    event.preventDefault();
    setUnit("imperial");
    setTemp((props.temp * 9) / 5 + 32);
  }

  function showMetric(event) {
    event.preventDefault();
    setUnit("metric");
    setTemp(props.temp);
  }

  if (unit === "metric") {
    return (
      <div>
        <h2 id="temperature-display">{Math.round(temp)}°C </h2>
        <span className="unit">
          °C
          <a href="/" onClick={showImperial}>
            {" "}
            °F
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
