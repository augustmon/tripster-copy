import React, { Component } from "react";
import ProfileForm from "../../components/Forms/ProfileForm";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./../../App.css";
import "./Profile.css";
import { clearSelectedUsers } from "../../api/chat";

export default function Profile() {
  clearSelectedUsers();
  return (
    <div>
      <header>
        <PageTitle title="Profile" logo={true} />
        <img
          className="logo-small"
          src={require("./../../graphics/app_logo_small.png")}
          alt="Tripster Logo"
          height="56"
          width="56"
        ></img>
      </header>
      <body>
        <div className="centering">
          <ProfileForm />
        </div>

        <div className="centering">
          <NavigationBar
            discover={"idle"}
            chat={"idle"}
            settings={"idle"}
            profile={"active"}
          />
        </div>
      </body>
    </div>
  );
}
