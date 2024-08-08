import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import backgroundImg from "../assets/bg_landing.png";
import doorImg from "../assets/door1_closed.png";
import openDoorImg from "../assets/door1_open.png";
import door_shadow from "../assets/door1_shadow.png";
import btn from "../assets/btn_visit.png";
import hoverBtn from "../assets/btn_visit_hover.png";

const Landing = () => {
  const [doorSrc, setDoorSrc] = useState(doorImg);
  const [doorState, setDoorState] = useState(true);
  const [btnSrc, setBtnSrc] = useState(btn);

  const onDoorContainerMouseOver = () => {
    setDoorSrc(openDoorImg);
    setDoorState(false);
  };

  const onDoorContainerMouseOut = (e) => {
    // 버튼 영역에 있는 경우 문을 닫지 않음
    if (e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) {
      return;
    }
    setDoorSrc(doorImg);
    setDoorState(true);
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
