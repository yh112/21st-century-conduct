import React, { useState } from "react";
import Door from "../components/Door";
import landingImage from "../assets/home/bg_home.png";
import btn1 from "../assets/home/btn_bg.png";
import btn2 from "../assets/home/btn_overview.png";
import btn3 from "../assets/home/btn_haengsildo.png";
import btn4 from "../assets/home/btn_past_present.png";

const Home = () => {
  return (
    <div className="background">
      <img className="background-image" src={landingImage} />
      <div className="door-container">
        <Door buttonImg={btn1} link="/background" index="0"/>
        <Door buttonImg={btn2} link="/overview" index="1"/>
        <Door buttonImg={btn3} link="/conduct" index="2"/>
        <Door buttonImg={btn4} link="/pastandpresent" index="3"/>
      </div>
    </div>
  );
};

export default Home;
