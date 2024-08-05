import React, { useState } from "react";
import backgroundImg from "../assets/배경1_분리.png";
import doorImg from "../assets/문1_닫힘.png";
import openDoorImg from "../assets/문1_열림.png";
import btn from "../assets/state=Default.png";
import hoverBtn from "../assets/state=hover.png";

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
        className="door-container" 
        onMouseOver={onDoorContainerMouseOver} 
        onMouseOut={onDoorContainerMouseOut}
      >
        <img className="door2-image" src={doorSrc} />
        {!doorState && (
          <img 
            className="btn" 
            onMouseOver={() => setBtnSrc(hoverBtn)} 
            onMouseOut={() => setBtnSrc(btn)} 
            src={btnSrc} 
          />
        )}
      </div>
    </div>
  );
};

export default Landing;