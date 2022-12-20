import React, { Component } from "react";
import Button from "../../components/Button/Button";
import ResetPasswordForm from "../../components/Forms/ResetPasswordForm";
import "./../../App.css";
import "./ResetPassword.css";
import "./../../components/Greeting/Greeting.css";
import { Link } from "react-router-dom";

export default function Reset() {
  return (
    <div>
      <header>
        <div className="back">
          <Link to="/login">
            <img
              src={require("./../../graphics/back_arrow_idle.png")}
              alt="back arrow"
              height="40"
              width="40"
            ></img>
          </Link>
        </div>

        <div className="reset-password">
          <div className="headline">
            <div className="greeting-headline">Reset Password</div>
          </div>
        </div>
      </header>

      <div>
        <div className="resetform">
          <div className="centering">
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
}
