import React from "react";

export default function Date(props) {
  console.log(props);
  console.log(props.dt);
  //   let days = [
  //     "Sunday",
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //   ];
  //   let day = days[props.date.getDay()];
  //   let hour = props.date.getHours();
  //   let minutes = props.date.getMinutes();

  //   if (minutes < 10) {
  //     minutes = `0${minutes}`;
  //   }

  //   if (hour < 10) {
  //     hour = `0${hour}`;
  //   }

  return <p>Hi</p>;

  // <div>
  //   {day} {hour}:{minutes}
  // </div>
}