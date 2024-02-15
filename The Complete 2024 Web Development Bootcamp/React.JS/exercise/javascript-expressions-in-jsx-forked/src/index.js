import React from "react";
import ReactDOM from "react-dom";

const name = "Choll";
const luckeyNumber = 7;

ReactDOM.render(
  <div>
    <h1>Hello {`${name} ${luckeyNumber}`} </h1>
    <p>Your lucky number is {Math.ceil(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
