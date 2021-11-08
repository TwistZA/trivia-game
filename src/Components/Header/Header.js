import React from "react";
import { Profile } from "../Profile/Profile";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="rank">
        <div className="rankingItems">
          <div>Personal Best</div>
          <div>88888</div>
        </div>
        <div className="rankingItems">
          <div>World Best</div>
          <div>88888</div>
        </div>
      </div>
      <div className="title">Trivia Royale</div>
      <div className="profile">
        <Profile />
      </div>
    </div>
  );
};

export default Header;
