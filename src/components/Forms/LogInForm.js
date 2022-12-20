import React from "react";
import { useState } from "react";
import "./../../App.css";
import Button from "../Button/Button";
import "./LogInForm.css";
import Parse from "parse";

import { useNavigate } from "react-router-dom";

export default function LogInForm() {
  const [bookingNumber, setBookingNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleBookingNumberChange(event) {
    setBookingNumber(event.target.value);
  }

  function handleInputChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    try {
      const userLoggingIn = await Parse.User.logIn(username, password);
      console.log("User:", userLoggingIn);
      if (userLoggingIn !== undefined) {
        navigate("/discover");
      } else {
        alert("Please input username and password! :P ");
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="log-in-form">
      <form onSubmit={handleFormSubmit}>
        {/*Booking number*/}
        <div className="form-item">
          <label htmlFor="bookingnumber">Booking number</label>
          <input
            type="text"
            className="form-control"
            id="bookingnumber"
            value={bookingNumber}
            onChange={handleBookingNumberChange}
          />
        </div>

        {/*Username*/}
        <div className="form-item">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={handleInputChange}
          />
        </div>

        {/*Password*/}
        <div className="form-item">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="centering">
          <div className="log-in-button">
            <Button onClick={handleFormSubmit} text="Log in" style="login" />
          </div>
        </div>
      </form>
    </div>
  );
}
