import React, { Component } from "react";
import DisplayUsers from "../../components/DisplayUsers/DisplayUsers";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./../../App.css";
import "./ActiveChats.css";
import { clearSelectedUsers } from "../../api/chat";

export default function ActiveChats(props) {
  clearSelectedUsers();

  return (
    <div>
      <header>
        <div>
          <div>
            <PageTitle title="Active Chats" logo={true} />
          </div>
        </div>
      </header>

      <div className="active-chat-list">
        <DisplayUsers setChatUsers={props.setChatUsers} displayMode="active" />
      </div>

      <NavigationBar
        discover={"idle"}
        chat={"active"}
        settings={"idle"}
        profile={"idle"}
      />
    </div>
  );
}
