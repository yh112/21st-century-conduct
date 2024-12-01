import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import House from "../components/House";
import Modal from "../components/Modal";
import ConductModal from "../components/ConductModal";
import explanation from "../assets/conduct/hangsildo_explanation.png";
import images from "../assets/conduct/house";
import modalImages from "../assets/conduct/modal_images";
import bgImg from "../assets/conduct/bg_hangsildo.webp";
import cloud1 from "../assets/conduct/cloud1_hover.png";
import cloud2 from "../assets/conduct/cloud2_hover.png";
import cloud3 from "../assets/conduct/cloud3_hover.png";
import cloud4 from "../assets/conduct/cloud4_hover.png";

const Conduct = () => {
  const [selectedKey, setSelectedKey] = useState(3);
  const [modal, setModal] = useState(false);
  const [isDragging, setIsDragging] = useState(null);
  const [positions, setPositions] = useState({
    cloud1: { x: 32, y: 643 },
    cloud2: { x: 1362, y: 983 },
    cloud3: { x: 607, y: 396 },
    cloud4: { x: 1628, y: 438 },
  });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [xBtn, setXBtn] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    family: "",
    card_selected: null,
    gif: null,
  });

  const handleMouseDown = (e, key) => {
    e.preventDefault();
    setIsDragging(key);
    setOffset({
      x: e.clientX - positions[key].x,
      y: e.clientY - positions[key].y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(null);
  };

  const handleMouseMove = (e) => {
    if (isDragging !== null) {
      setPositions((prevPositions) => ({
        ...prevPositions,
        [isDragging]: {
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        },
      }));
    }
  };

  const handleModal = (key) => {
    setModalInfo({
      family: key[1],
      card_selected: modalImages[key[0] + ".png"],
      gif: modalImages[key[0] + ".gif"],
    });
    setModal(true);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset]);

  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModal(false);
      setIsClosing(false);
      // setClicked(false);
      // setModalImage(card);
    }, 500);
  };

  return (
    <>
      {!xBtn && (
        <Modal
          imgSrc={explanation}
          width="1108px"
          height="830px"
          top={"305px"}
          left={"726px"}
          xTop={"305px"}
          xLeft={"1844px"}
          setXBtn={setXBtn}
        />
      )}
      {modal && (
        <ConductModal
          isClosing={isClosing}
          handleClose={handleClose}
          modalInfo={modalInfo}
        />
      )}
      <div className="background">
        <Navigation selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
        <img className="background-image"
        style={{backgroundImage: `url(${bgImg})`, backgroundSize: "cover"}}
        />
        <div className="title" style={{cursor: "url(`/assets/cursor_default.png`) 64 64, auto !important"}}>
          <span>***  </span>
          구름을 치우고 집을 눌러보세요. 각 이야기 속에서 오늘날 우리가 실천할
          수 있는 유교의 가치를 만날 수 있습니다.
          <span>  ***</span>
        </div>
        <div className="cd-container">
          <img
            className="cloud1"
            style={{
              position: "absolute",
              left: `${positions.cloud1.x}px`,
              top: `${positions.cloud1.y}px`,
              cursor: isDragging === "cloud1" ? "grabbing" : "grab",
            }}
            onMouseDown={(e) => handleMouseDown(e, "cloud1")}
            src={cloud1}
          />
          <img
            className="cloud2"
            style={{
              position: "absolute",
              left: `${positions.cloud2.x}px`,
              top: `${positions.cloud2.y}px`,
              cursor: isDragging === "cloud2" ? "grabbing" : "grab",
            }}
            onMouseDown={(e) => handleMouseDown(e, "cloud2")}
            src={cloud2}
          />
          <img
            className="cloud3"
            style={{
              position: "absolute",
              left: `${positions.cloud3.x}px`,
              top: `${positions.cloud3.y}px`,
              cursor: isDragging === "cloud3" ? "grabbing" : "grab",
            }}
            onMouseDown={(e) => handleMouseDown(e, "cloud3")}
            src={cloud3}
          />
          <img
            className="cloud4"
            style={{
              position: "absolute",
              left: `${positions.cloud4.x}px`,
              top: `${positions.cloud4.y}px`,
              cursor: isDragging === "cloud4" ? "grabbing" : "grab",
            }}
            onMouseDown={(e) => handleMouseDown(e, "cloud4")}
            src={cloud4}
          />
          <House
            family="오씨네집"
            top="278px"
            left="560.2px"
            onClick={() => handleModal(["oh", "오"])}
            src={images["oh.png"]}
          />
          <House
            family="장씨네집"
            top="383.6px"
            left="427px"
            onClick={() => handleModal(["jang", "장"])}
            src={images["jang.png"]}
          />
          <House
            family="주씨네집"
            top="351.2px"
            left="725.8px"
            onClick={() => handleModal(["joo", "주"])}
            src={images["joo.png"]}
          />
          <House
            family="권씨네집"
            top="437.6px"
            left="607px"
            onClick={() => handleModal(["kwon", "권"])}
            src={images["kwon.png"]}
          />
          <House
            family="한씨네집"
            top="561.2px"
            left="526.6px"
            onClick={() => handleModal(["han", "한"])}
            src={images["han.png"]}
          />
          <House
            family="전씨네집"
            top="561.2px"
            left="797.8px"
            onClick={() => handleModal(["jeon", "전"])}
            src={images["jeon.png"]}
          />
          <House
            family="금씨네집"
            top="911.8px"
            left="458px"
            onClick={() => handleModal(["geum", "금"])}
            src={images["geum.png"]}
          />
          <House
            family="송씨네집"
            top="882.2px"
            left="712.6px"
            onClick={() => handleModal(["song", "송"])}
            src={images["song.png"]}
          />
          <House
            family="서씨네집"
            top="1047.2px"
            left="575.6px"
            onClick={() => handleModal(["seo", "서"])}
            src={images["seo.png"]}
          />
          <House
            family="신씨네집"
            top="1076.2px"
            left="737.6px"
            onClick={() => handleModal(["shin", "신"])}
            src={images["shin.png"]}
          />
          <House
            family="하씨네집"
            top="821px"
            left="881.8px"
            onClick={() => handleModal(["ha", "하"])}
            src={images["ha.png"]}
          />
          <House
            family="문씨네집"
            top="970.6px"
            left="916.4px"
            onClick={() => handleModal(["moon", "문"])}
            src={images["moon.png"]}
          />
          <House
            family="성씨네집"
            top="315px"
            left="1241px"
            onClick={() => handleModal(["sung", "성"])}
            src={images["sung.png"]}
          />
          <House
            family="홍씨네집"
            top="366.6px"
            left="1382.6px"
            onClick={() => handleModal(["hong", "홍"])}
            src={images["hong.png"]}
          />
          <House
            family="최씨네집"
            top="451.8px"
            left="1151px"
            onClick={() => handleModal(["choi", "최"])}
            src={images["choi.png"]}
          />
          <House
            family="김씨네집"
            top="495px"
            left="1327.4px"
            onClick={() => handleModal(["kim", "김"])}
            src={images["kim.png"]}
          />
          <House
            family="양씨네집"
            top="623.4px"
            left="1255.4px"
            onClick={() => handleModal(["yang", "양"])}
            src={images["yang.png"]}
          />
          <House
            family="유씨네집"
            top="623.4px"
            left="1475px"
            onClick={() => handleModal(["yu", "유"])}
            src={images["yu.png"]}
          />
          <House
            family="황씨네집"
            top="933.6px"
            left="1430.6px"
            onClick={() => handleModal(["hwang", "황"])}
            src={images["hwang.png"]}
          />
          <House
            family="손씨네집"
            top="1000.6px"
            left="1283px"
            onClick={() => handleModal(["son", "손"])}
            src={images["son.png"]}
          />
          <House
            family="조씨네집"
            top="1022.2px"
            left="1600px"
            onClick={() => handleModal(["cho", "조"])}
            src={images["cho.png"]}
          />
          <House
            family="곽씨네집"
            top="1068.6px"
            left="1844.2px"
            onClick={() => handleModal(["kwak", "곽"])}
            src={images["kwak.png"]}
          />
          <House
            family="고씨네집"
            top="889px"
            left="1772.2px"
            onClick={() => handleModal(["ko", "고"])}
            src={images["ko.png"]}
          />
          <House
            family="남씨네집"
            top="953.8px"
            left="1998px"
            onClick={() => handleModal(["nam", "남"])}
            src={images["nam.png"]}
          />
          <House
            family="정씨네집"
            top="210px"
            left="1737px"
            onClick={() => handleModal(["jung", "정"])}
            src={images["jung.png"]}
          />
          <House
            family="이씨네집"
            top="210px"
            left="1864.2px"
            onClick={() => handleModal(["lee", "이"])}
            src={images["lee.png"]}
          />
          <House
            family="박씨네집"
            top="306px"
            left="1984.2px"
            onClick={() => handleModal(["park", "박"])}
            src={images["park.png"]}
          />
          <House
            family="강씨네집"
            top="381.6px"
            left="1805.4px"
            onClick={() => handleModal(["kang", "강"])}
            src={images["kang.png"]}
          />
          <House
            family="류씨네집"
            top="436.8px"
            left="1956.5px"
            onClick={() => handleModal(["ryu", "류"])}
            src={images["ryu.png"]}
          />
          <House
            family="배씨네집"
            top="568.8px"
            left="1924.2px"
            onClick={() => handleModal(["bae", "배"])}
            src={images["bae.png"]}
          />
        </div>
      </div>
    </>
  );
};

export default Conduct;
