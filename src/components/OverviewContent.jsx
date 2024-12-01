import React, { useEffect, useRef, useState } from "react";

const OverviewContent = ({ title, type, contents }) => {
  const contentRefs = useRef([]);
  const [hovered, setHovered] = useState(false);
  const [left, setLeft] = useState(0); // 초기 left 위치
  const elementRef = useRef(null); // 요소 참조

  const moveRight = () => {
    // 현재 요소의 위치를 가져옴
    const currentLeft = elementRef.current
      ? elementRef.current.getBoundingClientRect().left
      : 0;

    setLeft(currentLeft); // 현재 위치에서 10px 오른쪽으로 이동
  };

  useEffect(() => {
    moveRight();
  }, []);

  // Ensure the ref array length matches the contents length
  contentRefs.current = contents.map(
    (_, index) => contentRefs.current[index] ?? React.createRef()
  );

  const handleTitleClick = (index) => {
    const parentElement = elementRef.current;
    const childElement = contentRefs.current[index]?.current;

    if (parentElement && childElement) {
      // 자식 요소의 위치 가져오기
      const parentRect = parentElement.getBoundingClientRect();
      const childRect = childElement.getBoundingClientRect();

      // 부모 요소의 스크롤 위치 계산
      const scrollOffset =
        childRect.top - parentRect.top + parentElement.scrollTop;

      // 스크롤 이동
      parentElement.scrollTo({ top: scrollOffset, behavior: "smooth" });
    }
  };

  const handleMouseOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setHovered(true);
  };

  const handleMouseOut = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setHovered(false);
  };

  return (
    <div
      className="overview-content"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className={`overview-title${hovered ? "-hovered" : ""}`}>
        {title}
      </div>
      <div className="overview-class">
        {contents.map(
          (content, index) =>
            content.class && (
              <div
                className="class-content"
                onClick={() => handleTitleClick(index)}
                key={index}
              >
                {content.class}
              </div>
            )
        )}
      </div>
      <div
        className="overview-text-container"
        ref={elementRef}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        {hovered && (
          <div className="shadowbar" style={{ left: `${left}px` }}></div>
        )}
        <div className="overview-text">
          {contents.map((content, index) => (
            <div className="class-container" key={index}>
              <div className="class-title" ref={contentRefs.current[index]}>
                {content.title}
              </div>
              {type === "top" ? (
                <>
                  {content.src && (
                    <img
                      src={content.src}
                      style={{ width: content.width, height: content.height }}
                    />
                  )}
                  <div className="class-text">{content.text}</div>
                </>
              ) : (
                <>
                  <div className="class-text">{content.text}</div>
                  {content.src && (
                    <img
                      src={content.src}
                      style={{ width: content.width, height: content.height }}
                    />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewContent;
