import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import closeDoorImg from "../assets/home/landing_02_close.png";
// import openDoorImg from "../assets/door2_open.png";
import openDoorImg from "../assets/home/landing_02_open.png";
import door_shadow from "../assets/home/landing_02_open_gradation.png";

const Door = ({ buttonImg, link, index }) => {
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
      {doorState && <img className="door-image" style={{left: index*366}} src={closeDoorImg} />}
      {!doorState && <img className={'door-image-open-'+index}  src={openDoorImg}/>}
      {!doorState && (
        <NavLink to={link}>
          <img className={"homeBtn-"+index} src={buttonImg} />
        </NavLink>
      )}
    </div>
  );
};

export default Door;
