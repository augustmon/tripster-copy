import React from "react";
import "./UserLink.css";
import "./../../App.css";
import Parse from "parse";
import { Link } from "react-router-dom";

export default function ChatLink(props) {
  //
  const chatObject = props.chat;
  let usersInChat = [];
  let usersOtherThanCurrent = [];

  if (chatObject.get("users") === undefined) {
    usersOtherThanCurrent = ["empty"];
  } else {
    usersInChat = chatObject.get("users");
    usersInChat.forEach((user) => {
      if (user.id === Parse.User.current().id || user === "empty") {
        return;
      } else if (user.id !== undefined) {
        usersOtherThanCurrent.push(user.get("username"));
      }
    });
  }

  // console.log("fetching users", chatObject.get("users"));
  // console.log("usersOtherThanCurrent", usersOtherThanCurrent);
  const usersOtherThanCurrentToDisplay = usersOtherThanCurrent[1]
    ? `${usersOtherThanCurrent[0]} and others`
    : usersOtherThanCurrent[0];

  // console.log(usersOtherThanCurrentToDisplay);
  // console.log("other users in chat", usersOtherThanCurrent);
  // console.log("date", props.chat.get("createdAt").toLocaleString());

  return (
    <div>
      <Link to={props.to} onClick={props.onClick}>
        <img src={props.photo} className="userlink-image" />
        <div className="user-link-username">
          <div className="body">
            {props.displayMode === "active"
              ? usersOtherThanCurrentToDisplay
              : props.chat.get("chatTitle")}
          </div>
        </div>
        <div className="userlink-description">
          <div className="header">
            {props.displayMode === "active"
              ? "started " + props.chat.get("createdAt").toLocaleString()
              : usersOtherThanCurrentToDisplay}
          </div>
          <div className="last-message"> </div>
        </div>
      </Link>
    </div>
  );
}
