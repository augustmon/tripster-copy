import React from "react";
import "./../../App.css";
import Button from "../Button/Button";
import "./ResetPasswordForm.css"

export default function ResetPasswordForm() {
  return (
    <div className="reset-password-form">
      <form>
        <div className="form-item">
          <label htmlFor="password">Old password</label>
          <input type="password" className="form-control" id="password" />
        </div>

        <div className="form-item">
          <label htmlFor="password">New password</label>
          <input type="password" className="form-control" id="password" />
        </div>

        <div className="form-item">
          <label htmlFor="password">Confirm password</label>
          <input type="password" className="form-control" id="password" />
        </div>
<div className="centering">
        <div className="reset-password-button">
          <Button text="Reset Password" type="signup" />
        </div>
        </div>
      </form>
    </div>
  );
}
