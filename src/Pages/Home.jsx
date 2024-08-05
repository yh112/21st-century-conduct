import React from "react";
import landingImage from "../assets/배경2_분리.png";
import closeDoorImage from "../assets/문2_닫힘.png";
import openDoorImage from "../assets/문2_열림.png";

function Home() {
  const doorImage = openDoorImage;
  const onClick = () => {
    doorImage = closeDoorImage;
  };
  return (
    <div className="background">
      <img className="background-image" src={landingImage} />
      <img className="door-image" src={closeDoorImage} />
      {/* <img className="door-image" src={doorImage} /> */}
    </div>
  );
}

export default Home;
