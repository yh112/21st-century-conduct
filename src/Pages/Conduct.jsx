import React, { useState, useEffect } from "react";
import bgImg from "../assets/bg_haengsildo.png";
import Navigation from "../components/Navigation";
import House from "../components/House";
import images from "../assets/home";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";
import cloud3 from "../assets/cloud3.png";
import cloud4 from "../assets/cloud4.png";

const Conduct = () => {
  const [selectedKey, setSelectedKey] = useState(4);
  const [isDragging, setIsDragging] = useState(null); // 드래그 중인 요소를 식별하기 위해 null 사용
  const [positions, setPositions] = useState({
    cloud1: { x: 60, y: 512 },
    cloud2: { x: 1127, y: 532 },
    cloud3: { x: 533, y: 277 },
    cloud4: { x: 1416, y: 254 },
  }); // 각 이미지의 초기 위치
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

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset]);

  return (
    <div className="background">
      <Navigation selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <img className="background-image" src={bgImg} alt="background" />

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
          src={images["oh.png"]}
        />
        <House
          family="장씨네집"
          top="276px"
          left="286px"
          src={images["jang.png"]}
        />
        <House
          family="주씨네집"
          top="249px"
          left="535px"
          src={images["joo.png"]}
        />
        <House
          family="권씨네집"
          top="321px"
          left="436px"
          src={images["kwon.png"]}
        />
        <House
          family="한씨네집"
          top="424px"
          left="369px"
          src={images["han.png"]}
        />
        <House
          family="전씨네집"
          top="424px"
          left="595px"
          src={images["cho.png"]}
        />
        <House
          family="금씨네집"
          top="682px"
          left="323px"
          src={images["geum.png"]}
        />
        <House
          family="송씨네집"
          top="659px"
          left="536px"
          src={images["song.png"]}
        />
        <House
          family="서씨네집"
          top="794px"
          left="421px"
          src={images["seo.png"]}
        />
        <House
          family="신씨네집"
          top="819px"
          left="556px"
          src={images["shin.png"]}
        />
        <House
          family="하씨네집"
          top="608px"
          left="677px"
          src={images["ha.png"]}
        />
        <House
          family="문씨네집"
          top="731px"
          left="705px"
          src={images["moon.png"]}
        />
        <House
          family="성씨네집"
          top="211px"
          left="924px"
          src={images["seo.png"]}
        />
        <House
          family="홍씨네집"
          top="254px"
          left="1042px"
          src={images["hong.png"]}
        />
        <House
          family="최씨네집"
          top="325px"
          left="849px"
          src={images["choi.png"]}
        />
        <House
          family="김씨네집"
          top="361px"
          left="996px"
          src={images["kim.png"]}
        />
        <House
          family="양씨네집"
          top="468px"
          left="936px"
          src={images["yang.png"]}
        />
        <House
          family="유씨네집"
          top="468px"
          left="1119px"
          src={images["yu.png"]}
        />
        <House
          family="황씨네집"
          top="797px"
          left="935px"
          src={images["hwang.png"]}
        />
        <House
          family="손씨네집"
          top="756px"
          left="1080px"
          src={images["son.png"]}
        />
        <House
          family="조씨네집"
          top="690px"
          left="1210px"
          src={images["cho.png"]}
        />
        <House
          family="곽씨네집"
          top="802px"
          left="1290px"
          src={images["kwon.png"]}
        />
        <House
          family="고씨네집"
          top="648px"
          left="1390px"
          src={images["ko.png"]}
        />
        <House
          family="남씨네집"
          top="755px"
          left="1480px"
          src={images["moon.png"]}
        />
        <House
          family="정씨네집"
          top="140px"
          left="1280px"
          src={images["jung.png"]}
        />
        <House
          family="이씨네집"
          top="140px"
          left="1386px"
          src={images["lee.png"]}
        />
        <House
          family="박씨네집"
          top="220px"
          left="1486px"
          src={images["park.png"]}
        />
        <House
          family="강씨네집"
          top="283px"
          left="1337px"
          src={images["kang.png"]}
        />
        <House
          family="류씨네집"
          top="329px"
          left="1463px"
          src={images["ryu.png"]}
        />
        <House
          family="배씨네집"
          top="439px"
          left="1436px"
          src={images["bae.png"]}
        />
      </div>
    </div>
  );
};

export default Conduct;
