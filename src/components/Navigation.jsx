// import React from "react";
// import { Link } from "react-router-dom";

// const Navigation = ({ selectedKey, setSelectedKey }) => {
//   return (
//     <div className="navigation">
//       <div className="navigation-container">
//         <Link to="/" className="navigation-btn">
//           <div
//             role="button"
//             className="navigation-content"
//             onClick={() => {
//               setSelectedKey(1);
//             }}
//             key={1}
//           >
//             처음으로
//           </div>
//         </Link>
//         <Link to="/overview" className="navigation-btn">
//           <div
//             role="button"
//             className={`navigation-content${selectedKey === 2 ? "-hover" : ""}`}
//             onClick={() => {
//               setSelectedKey(2);
//             }}
//             key={2}
//           >
//             유교개요
//           </div>
//         </Link>
//         <Link to="/conduct" className="navigation-btn">
//           <div
//             role="button"
//             className={`navigation-content${selectedKey === 3 ? "-hover" : ""}`}
//             onClick={() => {
//               setSelectedKey(3);
//             }}
//             key={3}
//           >
//             행실도
//           </div>
//         </Link>
//         <Link to="/pastandpresent" className="navigation-btn">
//           <div
//             role="button"
//             className={`navigation-content${selectedKey === 4 ? "-hover" : ""}`}
//             onClick={() => {
//               setSelectedKey(4);
//             }}
//             key={4}
//           >
//             과거와현재
//           </div>
//         </Link>
//         <Link to="/background" className="navigation-btn">
//           <div
//             role="button"
//             className={`navigation-content${selectedKey === 5 ? "-hover" : ""}`}
//             onClick={() => {
//               setSelectedKey(5);
//             }}
//             key={5}
//           >
//             배경
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navigation;

import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅을 임포트

const Navigation = ({ selectedKey, setSelectedKey }) => {
  const navigate = useNavigate(); // navigate 함수 가져오기

  const handleNavigation = (key, path) => {
    if(selectedKey === key) return; // 이미 선택된 키라면 무시
    setSelectedKey(key); // 선택된 키 업데이트
    navigate(path); // 해당 경로로 이동
  };

  return (
    <div className="navigation">
      <div className="navigation-container">
        <div
          role="button"
          className="navigation-content"
          onClick={() => handleNavigation(1, "/")}
        >
          처음으로
        </div>
        <div
          role="button"
          className={`navigation-content${selectedKey === 2 ? "-hover" : ""}`}
          onClick={() => handleNavigation(2, "/overview")}
        >
          유교개요
        </div>
        <div
          role="button"
          className={`navigation-content${selectedKey === 3 ? "-hover" : ""}`}
          onClick={() => handleNavigation(3, "/conduct")}
        >
          행실도
        </div>
        <div
          role="button"
          className={`navigation-content${selectedKey === 4 ? "-hover" : ""}`}
          onClick={() => handleNavigation(4, "/pastandpresent")}
        >
          과거와현재
        </div>
        <div
          role="button"
          className={`navigation-content${selectedKey === 5 ? "-hover" : ""}`}
          onClick={() => handleNavigation(5, "/background")}
        >
          배경
        </div>
      </div>
    </div>
  );
};

export default Navigation;
