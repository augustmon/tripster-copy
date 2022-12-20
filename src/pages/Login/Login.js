import React, { Component } from "react";
import Button from "./../../components/Button/Button";
import LogInForm from "../../components/Forms/LogInForm";
import "./../../App.css";
import "./Login.css";
import "./../../components/Greeting/Greeting.css";
import { Link } from "react-router-dom";

export default function Login() {
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
          <div className="greeting-tag">We are happy to have you back!</div>
        </div>

        <div className="headline">
          <div className="greeting-headline">Log in</div>
        </div>

        <img
          className="paper-plane"
          src={require("./../../graphics/message_idle.png")}
          alt="Tripster Logo"
          height="40"
          width="40"
        ></img>
      </header>

      <body>
        <div className="resetPassword">
          <div className="centering">
            <a href="resetpassword">Reset Password</a>
          </div>
        </div>

        <div className="centering">
          <LogInForm />
        </div>
      </body>
    </div>
  );
}
