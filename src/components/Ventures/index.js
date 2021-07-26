import React from "react";
import "./Ventures.css";
import VenturesCarousel from "./VenturesCarousel";

const Ventures = () => {
  return (
    <div id="ventures" className="ventures">
      <h1>Ventures & Challenges</h1>
      <div className="container">
        <div className="ventures-content">
          <VenturesCarousel />
        </div>
      </div>
    </div>
  );
};

export default Ventures;
