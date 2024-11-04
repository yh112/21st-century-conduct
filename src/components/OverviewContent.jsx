import React, { useRef } from "react";

const OverviewContent = ({ title, type, contents }) => {
  const contentRefs = useRef([]);

  // Ensure the ref array length matches the contents length
  contentRefs.current = contents.map(
    (_, index) => contentRefs.current[index] ?? React.createRef()
  );

  const handleTitleClick = (index) => {
    if (contentRefs.current[index] && contentRefs.current[index].current) {
      contentRefs.current[index].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overview-content">
      <div className="overview-title">{title}</div>
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
      <div className="overview-text-container">
        <div className="overview-text">
          {contents.map((content, index) => (
            <div className="class-container" key={index} ref={contentRefs.current[index]}>
              <div className="class-title">{content.title}</div>
              {type === "top" ? (
                <>
                  {content.src && <img src={content.src} alt="content" />}
                  <div className="class-text">{content.text}</div>
                </>
              ) : (
                <>
                  <div className="class-text">{content.text}</div>
                  {content.src && <img src={content.src} alt="content" />}
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
