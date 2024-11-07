// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import backgroundImg from "../assets/landing/bg_landing.png";
// import backgroundText from "../assets/landing/bg_landing_text.png";
// import doorImg from "../assets/landing/landing_01_close.png";
// import openDoorImg from "../assets/landing/landing_01_open.png";
// import btn from "../assets/landing/btn_visit.png";
// import hoverBtn from "../assets/landing/btn_visit_hover.png";

// const Landing = () => {
//   const [doorSrc, setDoorSrc] = useState(doorImg);
//   const [doorState, setDoorState] = useState(false);
//   const [btnSrc, setBtnSrc] = useState(btn);
//   const [hoverClass, setHoverClass] = useState("");

//   const onDoorContainerMouseOver = () => {
//     setDoorState(false);
//     setDoorSrc(openDoorImg);
//     setHoverClass("hovered");
//   };

//   const onDoorContainerMouseOut = (e) => {
//     if (e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) {
//       return;
//     }
//     setDoorState(true);
//     setDoorSrc(doorImg);
//     setHoverClass("");
//   };

//   return (
//     <div className="background">
//       <img className="background-image" src={backgroundImg} />
//       <img className="background-text" src={backgroundText} /> 
//       <div
//         className="door2-container"
//         onMouseOver={onDoorContainerMouseOver}
//         onMouseOut={onDoorContainerMouseOut}
//       >
//         <img className={`door2-image ${hoverClass}`} src={doorSrc} />
//         {!doorState && (
//           <NavLink to="/home">
//             <img
//               className="btn"
//               onMouseOver={() => setBtnSrc(hoverBtn)}
//               onMouseOut={() => setBtnSrc(btn)}
//               src={btnSrc}
//             />
//           </NavLink>
//         )}
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import backgroundImg from "../assets/landing/bg_landing.png";
import backgroundText from "../assets/landing/bg_landing_text.png";
import doorImg from "../assets/landing/landing_01_close.png";
import openDoorImg from "../assets/landing/landing_01_open.png";
import btn from "../assets/landing/btn_landing.png";
import hoverBtn from "../assets/landing/btn_landing_hover.png";

const Landing = () => {
  const [doorSrc, setDoorSrc] = useState(doorImg);
  const [isHovered, setIsHovered] = useState(false);
  const [btnSrc, setBtnSrc] = useState(btn);
  

  const onDoorContainerMouseOver = () => {
    setIsHovered(true);
    setDoorSrc(openDoorImg); // 문이 열리는 이미지로 전환
  };

  const onDoorContainerMouseOut = (e) => {
    if (e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) {
      return;
    }
    setIsHovered(false);
    setDoorSrc(doorImg); // 문이 닫히는 이미지로 전환
  };

  return (
    <div className="background">
      <img className="background-image" src={backgroundImg} />
      <img className="background-text" src={backgroundText} />
      <div
        className="door2-container"
        onMouseOver={onDoorContainerMouseOver}
        onMouseOut={onDoorContainerMouseOut}
      >
        <img
          className={`door2-image ${isHovered ? "transition" : ""}`} // 호버 상태에서만 트랜지션 추가
          src={doorSrc}
        />
        {isHovered && (
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
