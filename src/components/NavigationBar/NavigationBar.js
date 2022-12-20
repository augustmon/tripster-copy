import React from "react";
import "./NavigationBar.css";
import "./../../App.css";
import { Link } from "react-router-dom";

export default function NavigationBar(props) {
  return (
    <div className="Navigation--bar">
      <div>
        <Link to="/discover">
          <img
            className="navbar-logo-small"
            src={require(`./../../graphics/house_${props.discover}.png`)}
          ></img>
        </Link>
      </div>

      <div>
        <Link to="/activechats">
          <img
            className="navbar-logo"
            src={require(`./../../graphics/message_${props.chat}.png`)}
          ></img>
        </Link>
      </div>

      <div>
        <Link to="/profile">
          <img
            className="navbar-logo"
            src={require(`./../../graphics/profile_${props.profile}.png`)}
          ></img>
        </Link>
      </div>

      <div>
        <Link to="/settings">
          <img
            className="navbar-logo"
            src={require(`./../../graphics/settings_${props.settings}.png`)}
          ></img>
        </Link>
      </div>
    </div>
  );
}
