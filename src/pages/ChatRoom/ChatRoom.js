import React from "react";

import "./../../App.css";
import "./ChatRoom.css";

// COMPONENTS
import ChatSetup from "../../components/ChatSetup/ChatSetup";
import PageTitle from "../../components/PageTitle/PageTitle";
import BackArrow from "../../components/BackArrow/BackArrow";

export default function ChatRoom(props) {
  console.log("chatUsers", props.chatUsers);
  return (
    <div>
      <header>
        <div className="arrow">
          <BackArrow to="/activechats" onClick={() => props.setChatUsers([])} />
          {/* <ChatRoomHeading Component goes here */}
        </div>

        <div>
          <div className="chat-room-title">
            <PageTitle title="Chat Room" />
          </div>
        </div>
      </header>
      <ChatSetup chatUsers={props.chatUsers} />
    </div>
  );
}
