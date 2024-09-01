import React from "react";

const BackgroundContent = ({ name, content }) => {
  return (
    <div className="bg-content">
      <div className="bg-title">
        <p className="title-name">{name}</p>
        <div className="line"></div>
      </div>
      <div className="bg-text">
        <img src={content} />
      </div>
    </div>
  );
};

export default BackgroundContent;
