import React from "react";
import "./index.scss";
const AboutUsPage = () => {
  return (
    <div id="about-page">
      <div className="header">
        <div className="container">
          <span>Home</span> <span className="green-text"> {">"} About us</span>
        </div>
      </div>
      <div className="container">
        <div className="about"></div>
      </div>
    </div>
  );
};

export default AboutUsPage;
