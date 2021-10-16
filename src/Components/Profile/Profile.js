import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export const Profile = () => {
  const createProfile = () => {
    let id = uuidv4();
    localStorage.setItem("id", id);
  };

  const saved = localStorage.getItem("id");

  const initialValue = saved || createProfile();
  const [profile, setProfile] = useState(initialValue);

  return (
    <div>
      <div>Pic</div>
      <div>{profile && `Guest - ${profile.slice(0, 6)}`}</div>
    </div>
  );
};
