import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import { createParseUser } from "../../api/user";
import { queryBookingId } from "../../api/user";
import "../../App.css";
import "./ProfileForm.css";
import Parse, { User } from "parse";

export default function ProfileForm() {
  //get users information, save it in a (state vairable - usestate) variable and render it out
  const currentUserName = Parse.User.current().get("username");
  const currentUserNationality = Parse.User.current().get("nationality");
  const currentUserStatus = Parse.User.current().get("status");
  const currentUserId = Parse.User.current().id;
  const [nationality, setNationality] = useState("");
  const [status, setStatus] = useState("");

  function saveProfile() {
    console.log("User information saved");
    Parse.User.current().set("status", status);
    Parse.User.current().set("nationality", nationality);
    Parse.User.current().save();
  }

  return (
    <div className="profile-form">
      <div className="">
        <div className="profile-headline">
          Welcome, {currentUserName}, change your profile here.
        </div>
        <div className="profile-headline">
          Currently logged in with booking id: {currentUserId}
        </div>
      </div>
      <div className="centering">
        <img
          className="profile-picture"
          src={require(`./../../graphics/profile_active.png`)}
        ></img>
      </div>
      <form>
        {/*Current Status*/}
        <div className="form-item">
          <div className="header">
            <label htmlFor="currentstatus">My current status:</label>
          </div>

          <input
            type="text"
            className="profile-input"
            id="currentstatus"
            onChange={(event) => setStatus(event.target.value)}
            value={status}
            placeholder={currentUserStatus} //uses the value from back-end
          />
        </div>

        {/*Nationality*/}
        <div className="form-item">
          <label htmlFor="nationality">Nationality:</label>
          <input
            type="text"
            className="profile-input"
            id="nationality"
            onChange={(event) => setNationality(event.target.value)}
            value={nationality}
            placeholder={currentUserNationality}
          />
        </div>

        <div className="centering">
          <div className="profile-btn">
            <Button text="Upload Profile Photo" Colors="dead" />
          </div>
        </div>

        <div className="centering">
          <Button text="Save profile" colors="signup" onClick={saveProfile} />
        </div>
      </form>
    </div>
  );
}
