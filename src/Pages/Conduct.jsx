import React, { useState } from "react";
import bgImg from "../assets/bg_haengsildo.png";
import Navigation from "../components/Navigation";

const Conduct = () => {
  const [selectedKey, setSelectedKey] = useState(4);
  return (
    <div className="background">
      <Navigation selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <img className="background-image" src={bgImg} alt="background" />
    </div>
  );
};

export default Conduct;
