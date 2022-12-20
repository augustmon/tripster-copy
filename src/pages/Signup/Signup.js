import React, { Component } from "react";
import SignupForm from "./../../components/Forms/SignUpForm";
import "./Signup.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./../../App.css";
import "./../../components/Greeting/Greeting";

export default function Signup() {
  return (
    <div>
      <header>
        <div>
          <Link to="/">
            <img
              className="arrow-back"
              src={require("./../../graphics/back_arrow_idle.png")}
              alt="back arrow"
              height="40"
              width="40"
            ></img>
          </Link>
        </div>

        <div className="title">
          <div className="greeting-tag">Welcome to Tripster!</div>
        </div>

        <div className="headline">
          <div className="greeting-headline">Sign Up</div>
        </div>

        <img
          className="paper-plane-signup"
          src={require("./../../graphics/message_idle.png")}
          alt="Tripster Logo"
          height="40"
          width="40"
        ></img>
      </header>
      <body>
        <div className="centering">
          <SignupForm />
        </div>
      </body>
    </div>
  );
}
