import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export const Profile = () => {
  const createProfile = () => {
    let id = uuidv4();
    localStorage.setItem("id", id);
    setProfile(id);
  };

  const [profile, setProfile] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("id");
    const initialValue = saved;
    return initialValue || createProfile();
  });

  return <div>Guest-{profile.slice(0, 6)}</div>;
};
