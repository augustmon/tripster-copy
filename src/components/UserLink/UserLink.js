import React from "react";
import "./UserLink.css";
import "./../../App.css";

import { Link } from "react-router-dom";

export default function UserLink(props) {
  return (
    <div>
      <Link to={props.to} onClick={props.onClick}>
        <img
          className="user-link-add"
          src={require("./../../graphics/add_idle.png")}
          alt="Tripster Logo"
          height="40"
          width="40"
        ></img>
        <img src={props.photo} className="userlink-image" />
        <div className="user-link-username">
          <div className="body">{props.username}</div>
        </div>
        <div className="userlink-description">
          <div className="header">{props.nationality}</div>
          <div>{props.status}</div>
        </div>
      </Link>
    </div>
  );
}

/*
<Link to={props.to} onClick={props.onClick}>
<img src={props.photo} className="userlink-image" />
  <div>{props.username}</div>
  <div>{props.nationality}</div>
  <div>{props.status}</div>

  <img src="./../../graphics/add_idle.png"/>
</Link>
  <div className="welcome-logo">
            <img
              className="centering"
              src={require("./../../graphics/add_idle.png")}
              alt="Tripster Logo"
              height="40"
              width="40"
            ></img>
          </div>

*/
