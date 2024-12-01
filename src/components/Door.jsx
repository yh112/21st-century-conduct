import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import closeDoorImg from "../assets/home/landing_02_close.png";
// import openDoorImg from "../assets/door2_open.png";
import openDoorImg from "../assets/home/landing_02_open.png";
import door_shadow from "../assets/home/landing_02_open_gradation.png";

const Door = ({ buttonImg, link, index }) => {
  const [doorState, setDoorState] = useState(true);

  const onDoorMouseOver = () => {
    setDoorState(false);
  };

  const onDoorMouseOut = (e) => {
    if (e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) {
      return;
    }
    setDoorState(true);
  };

  return (
    <div
      className="door-btn-container"
      onMouseOver={onDoorMouseOver}
      onMouseOut={onDoorMouseOut}
      style={{left: index*577}}
    >
      {doorState && <img className="door-image" src={closeDoorImg} />}
      {!doorState && 
      <>
      <img className={'door-image-open-'+index}  src={openDoorImg}/>
      <img className={'door-shadow-'+index} src={door_shadow}/>
      </>
      }
      {!doorState && (
        <NavLink to={link}>
          <img className={"homeBtn-"+index} src={buttonImg} />
        </NavLink>
      )}
    </div>
  );
};

export default Door;
