import React from "react";

export default function Display() {
  return (
    <div className="location-description">
      <h1 id="city">City Name Shows here</h1>
      <ul>
        <li id="show-date">Date</li>
        <li>
          <span id="show-last-updated">Last updated Timestamp</span>
        </li>

        <li id="weather-description">Weather Description</li>
      </ul>
    </div>
  );
}
