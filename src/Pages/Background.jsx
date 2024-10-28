import React, { useState } from "react";
import Navigation from "../components/Navigation";
import BackgroundContent from "../components/BackgroundContent";
import bgImg from "../assets/background/background_background.png";
import letter from "../assets/background/background_letter.png";
import letter_text from "../assets/background/background_letter_text.png";

const Background = () => {
  const [selectedKey, setSelectedKey] = useState(2);
  return (
    <div className="background">
      <Navigation selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <img className="background-image" src={bgImg} alt="background" />
      <div className="bg-container">
      </div>
    </div>
  );
};

export default Background;
