import React, { useState } from "react";
import landingImage from "../assets/배경2_분리.png";
import btn1 from "../assets/배경.png";
import btn2 from "../assets/유교개요.png";
import btn3 from "../assets/행실도.png";
import btn4 from "../assets/과거와현재.png";
import Door from "../components/Door";

const Home = () => {
  return (
    <div className="background">
      <img className="background-image" src={landingImage} />
      <div className="door-container">
        <Door buttonImg={btn1} link="/background" />
        <Door buttonImg={btn2} link="/overview" />
        <Door buttonImg={btn3} link="/haengsildo" />
        <Door buttonImg={btn4} link="/pastandpresent" />
      </div>
    </div>
  );
};

export default Home;
