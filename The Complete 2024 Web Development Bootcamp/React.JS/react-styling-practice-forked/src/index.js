//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";
var styles = {
  red: {
    color: "red",
  },
  green: {
    color: "green",
  },
  blue: {
    color: "blue",
  },
};

var time = getCurrentTime();
var message = "";
var style = checkTime(time);

ReactDOM.render(
  <div>
    <h1 className="heading" style={style}>
      {message}
    </h1>
  </div>,
  document.getElementById("root")
);

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  // Add leading zero if the number is less than 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return parseInt(hours + minutes, 10);
}

function checkTime(time) {
  if (time < 1200) {
    message = "Good Morning";
    return styles.red;
  } else if (time < 1800) {
    message = "Good Afternoon";
    return styles.green;
  } else {
    message = "Good Evening";
    return styles.blue;
  }
}
