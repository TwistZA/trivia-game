import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./Profile.css";
import { useForm } from "../../Hooks/useFormHook";

export const Profile = () => {
  // logic
  // on first load, check localstroage if there is a username, then show username
  // if no username, create a user id and user name,
  // username cannot ne empty and must be at least 3 characters long

  const [editMode, setEditMode] = useState(false);

  const { values, onChange, onSubmit } = useForm(() => {
    setProfile(values.username);
    localStorage.setItem("username", values.username);
    setEditMode(false);
  });

  const createProfile = () => {
    let id = uuidv4();
    let name = "Guest-" + id.slice(0, 6);

    localStorage.setItem("id", id);
    localStorage.setItem("username", name);
  };

  const saved = localStorage.getItem("username");

  const initialValue = saved || createProfile();
  const [profile, setProfile] = useState(initialValue);

  const handleEditProfileClick = () => {
    setEditMode(true);
  };

  return (
    <div>
      <div>
        <i class="fas fa-user-circle"></i>
      </div>
      <div className="name">{profile}</div>

      <div className="editProfile">
        <button onClick={handleEditProfileClick}>Edit Name</button>

        <div
          style={{
            display: editMode ? "block" : "none",
          }}
        >
          <form onSubmit={onSubmit}>
            <input
              className="userNameInput"
              type="text"
              name="username"
              onChange={onChange}
              placeholder="enter new name"
            />
            <input className="submitButton" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
