import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  const colorFireBrick = {color :'firebrick'}
  return (<div id="home">
    <h1 style={colorFireBrick}>{name} is a Web Developer from {city}</h1>
  </div>);
}

export default Home;
