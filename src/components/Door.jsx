import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import closeDoorImg from "../assets/문2_닫힘.png";
import openDoorImg from "../assets/문2_열림.png";

const Door = ({ buttonImg, link }) => {
  const [doorSrc, setDoorSrc] = useState(closeDoorImg);
  const [doorState, setDoorState] = useState(true);

  const onDoorMouseOver = () => {
    setDoorSrc(openDoorImg);
    setDoorState(false);
  };

  const onDoorMouseOut = (e) => {
    if (e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) {
      return;
    }
    setDoorSrc(closeDoorImg);
    setDoorState(true);
  };

  return (
    <div
      className="door-btn-container"
      onMouseOver={onDoorMouseOver}
      onMouseOut={onDoorMouseOut}
    >
      <img className="door-image" src={doorSrc} />
      {!doorState && (
        <NavLink to={link}>
          <img className="homeBtn" src={buttonImg} />
        </NavLink>
      )}
    </div>
  );
};

export default Door;
