import React from "react";
import "./Summary.css";
import "../Button/Button.css";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

export const Summary = () => {
  const location = useLocation();
  const score = location.state.score;
  return (
    <div className="container">
      <h1>SUMMARY PAGE</h1>
      <h2>Your score: {score}</h2>
      <h2>Your ranking:</h2>
      <div>
        <Link className="Green3D" to="/">
          New Game
        </Link>
      </div>
    </div>
  );
};
