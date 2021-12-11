import React, { useState } from "react";

export default function Search(props) {
  let [city, setCity] = useState("Enter city here to see the weather");
  function handleSubmit(event) {
    event.preventDefault();
    if (city === "Enter city here to see the weather") {
      alert("please enter a city to search for");
    } else {
      alert(`searching for ${city}`);
    }
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value.toLowerCase());
  }

  return (
    <div className="weather-app">
      <form id="search-form" onSubmit={handleSubmit}>
        <div className="row search-form-row">
          <div className="col-md-9">
            <input
              id="city-input"
              className="form-control"
              type="search"
              placeholder="Enter city here to see the weather"
              onChange={updateCity}
            />
          </div>
          <div className="col-md-3">
            <input
              id="search-clicked"
              className="btn btn-outline-light material-icons"
              type="submit"
              value="search"
            />
            <input
              id="current-location"
              className="btn btn-outline-light material-icons"
              type="button"
              value="my_location"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
