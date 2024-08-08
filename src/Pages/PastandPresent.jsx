import React, { useState } from "react";
import bgImg from "../assets/bg1.png";
import Navigation from "../components/Navigation";

const PastandPresent = () => {
  const [selectedKey, setSelectedKey] = useState(5);
  return (
    <div className="background">
      <Navigation selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <img className="background-image" src={bgImg} alt="background" />
    </div>
  );
};

export default PastandPresent;
