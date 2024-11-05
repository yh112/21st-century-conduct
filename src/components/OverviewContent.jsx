import React, { useRef, useState } from "react";

const OverviewContent = ({ title, type, contents }) => {
  const contentRefs = useRef([]);
  const [hovered, setHovered] = useState(false);

  // Ensure the ref array length matches the contents length
  contentRefs.current = contents.map(
    (_, index) => contentRefs.current[index] ?? React.createRef()
  );

  const handleTitleClick = (index) => {
    if (contentRefs.current[index] && contentRefs.current[index].current) {
      contentRefs.current[index].current.scrollIntoView({ behavior: "smooth" });
    }
    // setHovered(true);
  };

  return (
    <div className="overview-content">
      <div className={`overview-title${hovered?"-hovered":""}`}>{title}</div>
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
      <div className="overview-text-container" onMouseOver={()=>setHovered(true)} onMouseOut={()=>setHovered(false)}>
        {hovered && <div className="shadowbar"></div>}
        <div className="overview-text">
          {contents.map((content, index) => (
            <div
              className="class-container"
              key={index}
              ref={contentRefs.current[index]}
            >
              <div className="class-title">{content.title}</div>
              {type === "top" ? (
                <>
                  {content.src && <img src={content.src} style={{width: content.width, height: content.height}}/>}
                  <div className="class-text">{content.text}</div>
                </>
              ) : (
                <>
                  <div className="class-text">{content.text}</div>
                  {content.src && <img src={content.src} style={{width: content.width, height: content.height}}/>}
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
