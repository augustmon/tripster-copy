import React from "react";
import BackArrow from "../BackArrow/BackArrow";
import "./PageTitle.css";

export default function PageTitle(props) {
  return (
    <div className="body">
      <div className="page-title-container">
        <div className="app-body">{props.title}</div>
      </div>
      <div>
        {props.logo === true && (
          <img
            className="logo-small"
            src={require("./../../graphics/app_logo_small.png")}
            alt="Tripster Logo"
            height="56"
            width="56"
          ></img>
        )}
      </div>
    </div>
  );
}

//new alternative design with the icons being next to each other
