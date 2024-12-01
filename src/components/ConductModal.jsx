import React, { useState, useEffect } from "react";
import x_button from "../assets/button/button_x.png";
import card from "../assets/conduct/modal_images/card_default.png";
import defaultGif from "../assets/conduct/modal_images/sung.gif";

const ConductModal = ({ isClosing, handleClose, modalInfo }) => {
  const [clicked, setClicked] = useState(false);
  const [modalImage, setModalImage] = useState(card);
  const [gif, setGif] = useState(modalInfo.gif || defaultGif);

  useEffect(() => {
    if (!clicked) {
      setModalImage(card);
      setGif(modalInfo.gif || defaultGif);
    }
  }, [clicked]);

  return (
    <div
      className="cd-modal-container"
      style={isClosing ? { animation: "fadeout 0.3s forwards" } : {}}
    >
      <div className="cd-modal-content">
        {!clicked && (
          <div className="cd-modal-text">{modalInfo.family}씨네집</div>
        )}
        {!clicked && (
          <img
            className={`cd-modal-img${clicked ? "-clicked" : ""}`}
            onClick={() => {
              setClicked(true);
              setModalImage(modalInfo.card_selected);
            }}
            src={modalImage}
          />
        )}
        {clicked && (
          <img
            className="cd-modal-img-clicked"
            src={modalImage}
            onClick={() => setClicked(false)}
          />
        )}
        {clicked && (
          <img
            className="cd-modal-gif"
            src={gif}
            onClick={() => setClicked(false)}
          />
        )}
      </div>
      <img
        src={x_button}
        className="x-btn"
        style={{ left: "1746px", top: "282px" }}
        onClick={handleClose}
      />
    </div>
  );
};

export default ConductModal;
