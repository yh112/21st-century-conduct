import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import House from "../components/House";
import images from "../assets/conduct/house";
import modalImages from "../assets/conduct/modal_images";
import bgImg from "../assets/conduct/hangsildo-background.png";
import x_button from "../assets/button/btn_x.png";
import cloud1 from "../assets/conduct/cloud1.png";
import cloud1_hover from "../assets/conduct/cloud1_hover.png";
import cloud2 from "../assets/conduct/cloud2.png";
import cloud2_hover from "../assets/conduct/cloud2_hover.png";
import cloud3 from "../assets/conduct/cloud3.png";
import cloud3_hover from "../assets/conduct/cloud3_hover.png";
import cloud4 from "../assets/conduct/cloud4.png";
import cloud4_hover from "../assets/conduct/cloud4_hover.png";
import geum from "../assets/conduct/geum.gif";

const Conduct = () => {
  const [selectedKey, setSelectedKey] = useState(4);
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [isDragging, setIsDragging] = useState(null);
  const [positions, setPositions] = useState({
    cloud1: { x: 60, y: 512 },
    cloud2: { x: 1127, y: 532 },
    cloud3: { x: 533, y: 277 },
    cloud4: { x: 1416, y: 254 },
  });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

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
    setModalImage(modalImages[key]);
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
    }, 200);
  };

  return (
    <>
      {modal && (
        <div className="cd-modal-container" style={isClosing ? {animation: "fadeout 1s"} : {}}>
          <div className="cd-modal-content">
            <img className="cd-modal-img" src={modalImage} />
            <img className="cd-modal-gif" src={geum} />
          </div>
          <img src={x_button} className="x-btn" onClick={handleClose} />
        </div>
      )}
      <div className="background">
        <Navigation selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
        <img className="background-image" src={bgImg} alt="background" />
        <div className="cd-title">**구름을 치우고 집을 눌러보세요</div>
        <div className="cd-container">
          <img
            style={{
              position: "absolute",
              left: `${positions.cloud1.x}px`,
              top: `${positions.cloud1.y}px`,
              cursor: isDragging === "cloud1" ? "grabbing" : "grab",
              zIndex: 500,
            }}
            onMouseDown={(e) => handleMouseDown(e, "cloud1")}
            src={cloud1}
            alt="Cloud 1"
          />
          <img
            style={{
              position: "absolute",
              left: `${positions.cloud2.x}px`,
              top: `${positions.cloud2.y}px`,
              cursor: isDragging === "cloud2" ? "grabbing" : "grab",
              zIndex: 500,
            }}
            onMouseDown={(e) => handleMouseDown(e, "cloud2")}
            src={cloud2}
            alt="Cloud 2"
          />
          <img
            style={{
              position: "absolute",
              left: `${positions.cloud3.x}px`,
              top: `${positions.cloud3.y}px`,
              cursor: isDragging === "cloud3" ? "grabbing" : "grab",
              zIndex: 500,
            }}
            onMouseDown={(e) => handleMouseDown(e, "cloud3")}
            src={cloud3}
            alt="Cloud 3"
          />
          <img
            style={{
              position: "absolute",
              left: `${positions.cloud4.x}px`,
              top: `${positions.cloud4.y}px`,
              cursor: isDragging === "cloud4" ? "grabbing" : "grab",
              zIndex: 500,
            }}
            onMouseDown={(e) => handleMouseDown(e, "cloud4")}
            src={cloud4}
            alt="Cloud 4"
          />
          <House
            family="오씨네집"
            top="188px"
            left="397px"
            onClick={()=>handleModal("couple_oh.png")}
            src={images["oh.png"]}
          />
          <House
            family="장씨네집"
            top="276px"
            left="286px"
            onClick={()=>handleModal("couple_jang.png")}
            src={images["jang.png"]}
          />
          <House
            family="주씨네집"
            top="249px"
            left="535px"
            onClick={()=>handleModal("couple_joo.png")}
            src={images["joo.png"]}
          />
          <House
            family="권씨네집"
            top="321px"
            left="436px"
            onClick={()=>handleModal("couple_kwon.png")}
            src={images["kwon.png"]}
          />
          <House
            family="한씨네집"
            top="424px"
            left="369px"
            onClick={()=>handleModal("couple_han.png")}
            src={images["han.png"]}
          />
          <House
            family="전씨네집"
            top="424px"
            left="595px"
            onClick={()=>handleModal("couple_jeon.png")}
            src={images["cho.png"]}
          />
          <House
            family="금씨네집"
            top="682px"
            left="323px"
            onClick={()=>handleModal("friend_geum.png")}
            src={images["geum.png"]}
          />
          <House
            family="송씨네집"
            top="659px"
            left="536px"
            onClick={()=>handleModal("friend_song.png")}
            src={images["song.png"]}
          />
          <House
            family="서씨네집"
            top="794px"
            left="421px"
            onClick={()=>handleModal("friend_seo.png")}
            src={images["seo.png"]}
          />
          <House
            family="신씨네집"
            top="819px"
            left="556px"
            onClick={()=>handleModal("friend_shin.png")}
            src={images["shin.png"]}
          />
          <House
            family="하씨네집"
            top="608px"
            left="677px"
            onClick={()=>handleModal("friend_ha.png")}
            src={images["ha.png"]}
          />
          <House
            family="문씨네집"
            top="731px"
            left="705px"
            onClick={()=>handleModal("friend_moon.png")}
            src={images["moon.png"]}
          />
          <House
            family="성씨네집"
            top="211px"
            left="924px"
            onClick={()=>handleModal("parentandchild_sung.png")}
            src={images["sung.png"]}
          />
          <House
            family="홍씨네집"
            top="254px"
            left="1042px"
            onClick={()=>handleModal("parentandchild_hong.png")}
            src={images["hong.png"]}
          />
          <House
            family="최씨네집"
            top="325px"
            left="849px"
            onClick={()=>handleModal("parentandchild_choi.png")}
            src={images["choi.png"]}
          />
          <House
            family="김씨네집"
            top="361px"
            left="996px"
            onClick={()=>handleModal("parentandchild_kim.png")}
            src={images["kim.png"]}
          />
          <House
            family="양씨네집"
            top="468px"
            left="936px"
            onClick={()=>handleModal("parentandchild_yang.png")}
            src={images["yang.png"]}
          />
          <House
            family="유씨네집"
            top="468px"
            left="1119px"
            onClick={()=>handleModal("parentandchild_yu.png")}
            src={images["yu.png"]}
          />
          <House
            family="황씨네집"
            top="797px"
            left="935px"
            onClick={()=>handleModal("society_hwang.png")}
            src={images["hwang.png"]}
          />
          <House
            family="손씨네집"
            top="756px"
            left="1080px"
            onClick={()=>handleModal("society_son.png")}
            src={images["son.png"]}
          />
          <House
            family="조씨네집"
            top="690px"
            left="1210px"
            onClick={()=>handleModal("society_cho.png")}
            src={images["cho.png"]}
          />
          <House
            family="곽씨네집"
            top="802px"
            left="1290px"
            onClick={()=>handleModal("society_kwak.png")}
            src={images["kwon.png"]}
          />
          <House
            family="고씨네집"
            top="648px"
            left="1390px"
            onClick={()=>handleModal("society_ko.png")}
            src={images["ko.png"]}
          />
          <House
            family="남씨네집"
            top="755px"
            left="1480px"
            onClick={()=>handleModal("society_nam.png")}
            src={images["moon.png"]}
          />
          <House
            family="정씨네집"
            top="140px"
            left="1280px"
            onClick={()=>handleModal("siblingandrelative_jung.png")}
            src={images["jung.png"]}
          />
          <House
            family="이씨네집"
            top="140px"
            left="1386px"
            onClick={()=>handleModal("siblingandrelative_lee.png")}
            src={images["lee.png"]}
          />
          <House
            family="박씨네집"
            top="220px"
            left="1486px"
            onClick={()=>handleModal("siblingandrelative_park.png")}
            src={images["park.png"]}
          />
          <House
            family="강씨네집"
            top="283px"
            left="1337px"
            onClick={()=>handleModal("siblingandrelative_kang.png")}
            src={images["kang.png"]}
          />
          <House
            family="류씨네집"
            top="329px"
            left="1463px"
            onClick={()=>handleModal("siblingandrelative_ryu.png")}
            src={images["ryu.png"]}
          />
          <House
            family="배씨네집"
            top="439px"
            left="1436px"
            onClick={()=>handleModal("siblingandrelative_bae.png")}
            src={images["bae.png"]}
          />
        </div>
      </div>
    </>
  );
};

export default Conduct;
