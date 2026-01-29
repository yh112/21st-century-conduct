import React, { useState } from "react";
import home from "../assets/conduct/home.png";
// import home_hover from "../assets/conduct/home_hover.png";

const House = ({ family, top, left, src, onClick }) => {
  const [homeState, setHomeState] = useState(false);
  const onMouseOver = () => {
    setHomeState(true);
  };
  const onMouseOut = () => {
    setHomeState(false);
  };

  return (
    <>
      <div
        className="house-container"
        style={{ top: top, left: left }}
        onClick={onClick}
      >
        {homeState && <img className="house-title" src={src} loading="lazy" alt={`${family} 타이틀`} />}
        <img
          className="house-content"
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          src={home}
          loading="lazy"
          alt="집 아이콘"
        />
        {homeState && (
          <div className="house-content-hover"
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
          />
        )}
        <p className="house-name">{family}</p>
      </div>
    </>
  );
};

export default House;
