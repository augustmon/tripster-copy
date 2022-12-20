import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./../../App.css";
import "./../../components/Greeting/Greeting";
import "./../../components/Greeting/Greeting.css";
import "./Welcome.css";

export default function Welcome() {
  return (
    <div>
      <header>
        <div>
          <div className="title">
            <div className="greeting-tag">Welcome to</div>
          </div>

          <div className="headline">
            <div className="greeting-headline">Tripster</div>
          </div>

          <div className="heading">
            <div className="greeting-description">
              Connect & chat with fellow travellers
            </div>
          </div>

          <div className="welcome-logo">
            <img
              className="centering"
              src={require("./../../graphics/app_logo_big.png")}
              alt="Tripster Logo"
              height="200"
              width="200"
            ></img>
          </div>
        </div>
      </header>

      <div>
        <div className="centering">
          <Link to="signup">
            <Button text="Sign up" colors="signup" />
          </Link>
        </div>
        <div className="centering">
          <Link to="login">
            <Button text="Log in" colors="login" />
          </Link>
        </div>
      </div>
    </div>
  );
}
