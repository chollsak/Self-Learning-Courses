//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const currentYear = new Date().getFullYear();
const myName = "Chollasak Anuwareepong";

//It should display 2 paragraph HTML elements.
ReactDOM.render(
  <div>
    <p>Created by {myName}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
