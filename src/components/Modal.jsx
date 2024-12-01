import React, { useState } from "react";
import x_btn from "../assets/button/button_x.png";

const Modal = ({ imgSrc, width, height, top, left, xTop, xLeft, setXBtn }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true); // 닫힘 상태로 변경
    setTimeout(() => {
      setXBtn(true); // 1초 후 모달 닫기
    }, 1200); // 1초(1000ms) 대기
  };

  return (
    <div className={`modal-background${isClosing ? "-close" : ""}`}>
      <div
        className={`modal-content${isClosing ? "-close" : ""}`}
        style={{ top: top, left: left }}
      >
        <img src={imgSrc} style={{ width: width, height: height }} />
      </div>
      <img
        src={x_btn}
        style={{ top: xTop, left: xLeft }}
        onClick={handleClose}
        className={`x-btn${isClosing ? "-close" : "-modal"}`}
      />
    </div>
  );
};

export default Modal;
