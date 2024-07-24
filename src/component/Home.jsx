import React from "react";
import homeImage from "../assets/홈1.png";
import "./Public.css";

function Home() {
  return (
    <div className="background">
      <img className="background-image" src={homeImage}/>
    </div>
  );
}

export default Home;
