import React from "react";
import x_btn from "../assets/button/button_x.png";

const Modal = ({imgSrc, width, height, top, left, xTop, xLeft, setXBtn}) => {
  return (
    <div className="modal-background">
      <div className="modal-content" style={{top: top, left: left}}>
        <img src={imgSrc} style={{width: width, height: height}}/>
      </div>
      <img src={x_btn} style={{top: xTop, left: xLeft}} onClick={()=>setXBtn(true)} className="x-btn" />
    </div>
  );
};

export default Modal;
