import React from "react";
import { useState } from "react";
import "./../../App.css";
import Button from "../Button/Button";
import { createParseUser } from "../../api/user";
import { useNavigate } from "react-router-dom";
import { queryBookingId } from "../../api/user";
import "./SignUpForm.css";
import { getStaticContextFromError } from "@remix-run/router";

export default function SignUpForm() {
  const [bookingNumber, setBookingNumber] = useState("");
  const [name, setName] = useState("");
  const [passwordCreate, setPasswordCreate] = useState(""); // Get this to work :')
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();

  function handleBookingNumberChange(event) {
    setBookingNumber(event.target.value);
  }

  function handleInputChange(event) {
    setName(event.target.value);
  }

  function handlePasswordCreateChange(event) {
    setPasswordCreate(event.target.value);
  }

  function handlePasswordConfirmChange(event) {
    setPasswordConfirm(event.target.value);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    try {
      const userSigningUp = await createParseUser(
        bookingNumber,
        name,
        passwordConfirm
      );
      console.log("User:", userSigningUp);
      if (userSigningUp !== undefined) {
        navigate("/discover");
      } else {
        alert("Please input username and password!");
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="sign-up-form">
      <form onSubmit={handleFormSubmit}>
        {/*Booking number*/}
        <div className="form-item">
          <label htmlFor="bookingnumber">Insert booking number</label>
          <input
            type="text"
            className="form-control"
            id="bookingnumber"
            onChange={handleBookingNumberChange}
          />
        </div>

        {/*Username*/}
        <div className="form-item">
          <label htmlFor="username">Username</label>
          <input
            type="username"
            className="form-control"
            id="username"
            onChange={handleInputChange}
          />
        </div>

        {/*Create password*/}
        <div className="form-item">
          <label htmlFor="password-create">Create password</label>
          <input
            type="password"
            className="form-control"
            id="password-create"
            onChange={handlePasswordCreateChange}
          />
        </div>

        {/*Confirm password*/}
        <div className="form-item">
          <label htmlFor="password-confirm">Confirm password</label>
          <input
            type="password"
            className="form-control"
            id="password-confirm"
            onChange={handlePasswordConfirmChange}
          />
        </div>
        <div className="centering">
          <div className="sign-up-button">
            <Button text="Start Exploring" style="signup" />
          </div>
        </div>
      </form>
    </div>
  );
}
