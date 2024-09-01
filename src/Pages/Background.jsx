import React, { useState } from "react";
import bgImg from "../assets/bg_bgimg.png";
import Navigation from "../components/Navigation";
import BackgroundContent from "../components/BackgroundContent";
import introduction from "../assets/introduction.png";
import howtouse from "../assets/howtouse.png";

const Background = () => {
  const [selectedKey, setSelectedKey] = useState(2);
  return (
    <div className="background">
      <Navigation selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <img className="background-image" src={bgImg} alt="background" />
      <div className="bg-container">
       <BackgroundContent name={"들어가면서"} content={introduction} />
       <BackgroundContent name={"이용방법"} content={howtouse} />
      </div>
    </div>
  );
};

export default Background;
