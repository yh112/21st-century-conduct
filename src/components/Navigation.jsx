import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ selectedKey, setSelectedKey }) => {
  return (
    <div className="navigation">
      <div className="navigation-container">
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <div
            className="navigation-content"
            onClick={() => {
              console.log(1);
              setSelectedKey(1);
            }}
            key={1}
          >
            처음으로
          </div>
        </Link>
        <Link
          to="/background"
          style={{
            textDecoration: "none",
          }}
        >
          <div
            className={`navigation-content ${selectedKey === 2 ? "hover" : ""}`}
            onClick={() => {
              console.log(2);
              setSelectedKey(2);
            }}
            key={2}
          >
            배경
          </div>
        </Link>
        <Link
          to="/overview"
          style={{
            textDecoration: "none",
          }}
        >
          <div
            className={`navigation-content ${selectedKey === 3 ? "hover" : ""}`}
            key={3}
          >
            유교개요
          </div>
        </Link>
        <Link
          to="/conduct"
          style={{
            textDecoration: "none",
          }}
        >
          <div
            className={`navigation-content ${selectedKey === 4 ? "hover" : ""}`}
            key={4}
          >
            행실도
          </div>
        </Link>
        <Link
          to="/pastandpresent"
          style={{
            textDecoration: "none",
          }}
        >
          <div
            className={`navigation-content ${selectedKey === 5 ? "hover" : ""}`}
            key={5}
          >
            과거와현재
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
