// FadeInWrapper.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import '../App.css'; // fade-in 애니메이션 정의가 있는 CSS 파일

const FadeInWrapper = ({ children }) => {
  const location = useLocation();
  const [key, setKey] = useState(location.key);  // 페이지 변경 시 새로운 key 설정

  useEffect(() => {
    setKey(location.key);
  }, [location]);

  return (
    <div className="fade-in" key={key}>
      {children}
    </div>
  );
};

export default FadeInWrapper;
