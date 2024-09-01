import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import closeDoorImg from "../assets/door2_closed.png";
// import openDoorImg from "../assets/door2_open.png";
import openDoorImg from "../assets/door2_set.png";
import door_shadow from "../assets/door2_shadow.png";

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
      <img className={doorState ? "door-image" : "door-image-open"} src={doorSrc} />
      {!doorState && (
        <NavLink to={link}>
          <img className="homeBtn" src={buttonImg} />
        </NavLink>
      )}
    </div>
  );
};

export default Door;
