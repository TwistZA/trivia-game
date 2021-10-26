import React from "react";
import { Profile } from "../Profile/Profile";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="rank">Ranking</div>
      <div className="title">Trivia Royale</div>
      <div className="profile">
        <Profile />
      </div>
    </div>
  );
};

export default Header;
