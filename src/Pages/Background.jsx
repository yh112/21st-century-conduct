import React, { useState } from "react";
import Navigation from "../components/Navigation";
import bgImg from "../assets/background/background_background.png";
import letter from "../assets/background/background_letter.png";
import letter_text from "../assets/background/background_letter_text.png";

const Background = () => {
  const [selectedKey, setSelectedKey] = useState(2);
  const [open, setOpen] = useState(false);
  const [btnText, setBtnText] = useState("+");
  const sidebarText = [
    "21세기 행실도 : 유교의 부활",
    "① 배경",
    "조선 초기부터 전해져온 유교 윤리는 수천 년간 시대의 행동 규범으로 자리했다. 그러나 현대 사회에서는 ‘꼰대'라는 용어와 함께 유교적 가치에 대한 부정적 인식이 높아지고 있으며, 이로 인해 예의와 도덕에 대한 관심과 중요성이 퇴색되고 있다. 비록, 현대 사회의 가치와는 다른 유교의 개념이 있지만, 이러한 변화 속에서도 유교에서 얻을 수 있는 공동체에 대한 행동 규범과 인간으로서의 윤리적 가치를 개선하고 발전시켜 나가야 한다.",
    "② 연구 질문 설정",
    "과거의 유교 사상이 현대 사회에서 변화하고 있는 양상은 뚜렷하다. 현대 사회에서는 유교의 윤리 체계가 새로운 현실에 부합하도록 수정이 필요하며, 이를 위해 현대 사회의 가치와 유교의 가치를 조화시키는 새로운 대체와 수정이 필요하다. 시각언어를 활용해 현대인들이 이해하고 공감할 수 있는 현실적인 사례와 함께 유교의 가치를 현대적으로 표현할 수 있을까?",
    "③ 목적 및 가능성",
    "유교의 덕목을 현실에 접목하여 문제를 해결하고자 하는 연구는 한국 사회의 가치관에 대해 깊이 탐구하며 전통 가치와 현대 가치의 연결고리를 찾고 이를 실제 상황에 적용하는 방법을 모색한다는 의의가 있다. 또한 전통적 유교와 현대 사회의 모습을 결합하는 과정에서 새로운 시각을 발견하고 흥미로운 그래픽 요소와 매체를 활용하는 경험을 얻을 수 있다.",
  ];

  const handleOpen = () => {
    setOpen((prevOpen) => {
      const newOpen = !prevOpen; // 이전 상태를 반전시킴
      setBtnText(newOpen ? "-" : "+"); // 새로운 상태에 따라 버튼 텍스트 설정
      return newOpen; // 새로운 상태 반환
    });
  };

  return (
    <div className="background">
      <Navigation selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <img className="background-image" src={bgImg} alt="Background" />
      <div className={`sidebar${open ? "-open" : ""}`}>
        <div className="open-btn" onClick={handleOpen}>
          {" "}
          {/* 여기 수정 */}
          {btnText}
        </div>
        {open && (
          <>
            <div className="sidebar-title">프로젝트 소개</div>
            <div className="sidebar-content"></div>
          </>
        )}
      </div>
      <div className="title">
        <span>***</span>
        2024년에 새롭게 펼쳐질 유교의 부활에 많은 관심과 성원을 부탁드립니다.
        <span>***</span>
      </div>
      <div className="bg-container">
        <img className="letter" src={letter} alt="Letter" />
        <div className="letter-box">
          <img className="letter-text" src={letter_text} alt="Letter Text" />
        </div>
      </div>
    </div>
  );
};

export default Background;
