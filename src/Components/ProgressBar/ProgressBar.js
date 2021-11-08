import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progress }) => {
  let display = 100 - progress;
  return (
    <div className="progressBarContainer">
      <div className="barBackGround">
        <div style={{ width: `${display}%` }} className="bar">
          👀
        </div>
      </div>
      {(display / 10).toFixed(1)}s
    </div>
  );
};

export default ProgressBar;
