import React, { useEffect } from "react";
import Door from "../components/Door";
import landingImage from "../assets/home/landing_02.webp";
import btn1 from "../assets/home/btn_overview.png";
import btn2 from "../assets/home/btn_conduct.png";
import btn3 from "../assets/home/btn_pp.png";
import btn4 from "../assets/home/btn_bg.png";
import { preloadNextPagesAll } from "../utils/preloadImages";

const Home = () => {
  // 모든 하위 페이지 배경 + 큰 이미지 프리로드
  useEffect(() => {
    preloadNextPagesAll(["overview", "conduct", "pastandpresent", "background"]);
  }, []);

  return (
    <div className="background">
      <img
        className="background-image"
        src={landingImage}
        fetchpriority="high"
        alt="홈 배경"
      />
      <div className="door-container">
        <Door buttonImg={btn1} link="/overview" index="0" />
        <Door buttonImg={btn2} link="/conduct" index="1" />
        <Door buttonImg={btn3} link="/pastandpresent" index="2" />
        <Door buttonImg={btn4} link="/background" index="3" />
      </div>
    </div>
  );
};

export default Home;
