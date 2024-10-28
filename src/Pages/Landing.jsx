import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import backgroundImg from "../assets/landing/landing-01.png";
import doorImg from "../assets/landing/landing-01-close.png";
import openDoorImg from "../assets/landing/landing-01-open.png";
import btn from "../assets/btn_visit.png";
import hoverBtn from "../assets/btn_visit_hover.png";

const Landing = () => {
  const [doorSrc, setDoorSrc] = useState(doorImg);
  const [doorState, setDoorState] = useState(false);
  const [btnSrc, setBtnSrc] = useState(btn);

  const onDoorContainerMouseOver = () => {
    setDoorState(false);
    setDoorSrc(openDoorImg);
  };

  const onDoorContainerMouseOut = (e) => {
    if (e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) {
      return;
    }
    setDoorState(true);
    setDoorSrc(doorImg);
  };

  return (
    <div className="background">
      <img className="background-image" src={backgroundImg} />
      <div
        className="door2-container"
        onMouseOver={onDoorContainerMouseOver}
        onMouseOut={onDoorContainerMouseOut}
      >
        <img className="door2-image" src={doorSrc} />
        {!doorState && (
          <NavLink to="/home">
            <img
              className="btn"
              onMouseOver={() => setBtnSrc(hoverBtn)}
              onMouseOut={() => setBtnSrc(btn)}
              src={btnSrc}
            />
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Landing;
