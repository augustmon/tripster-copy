import React, { useEffect, useState } from "react";
import "./../../App.css";
import Parse from "parse";
import { chatRoomSetup, checkUsersArray } from "../../api/chat";

//COMPONENTS
import LiveChat from "../LiveChat/LiveChat";

export default function ChatSetup(props) {
  const [sender, setSender] = useState(Parse.User.current());
  const [chatRoom, setChatRoom] = useState(null);

  const [usersArray, setUsersArray] = useState(props.chatUsers);
  // const usersArray = props.chatUsers;
  console.log("props.chatUsers", props.chatUsers);

  useEffect(() => {
    console.log("useEffect props.chatUsers", props.chatUsers);

    //// IMPORT THIS FROM API
    async function getSelectedUsers() {
      console.log("chatUsers", props.chatUsers);

      // Saving chatUsers to temp database

      if (props.chatUsers.length >= 2) {
        const parseQuery = new Parse.Query("ChatUsers");
        parseQuery.equalTo("owner", Parse.User.current());
        const queryResult = await parseQuery.first();
        console.log("query", queryResult);

        if (queryResult === undefined) {
          const newSelectedUsers = new Parse.Object("ChatUsers");
          newSelectedUsers.set("selectedUsers", props.chatUsers);
          newSelectedUsers.set("owner", Parse.User.current());
          await newSelectedUsers.save();
        } else {
          queryResult.set("selectedUsers", props.chatUsers);
          // queryResult.set("owner", Parse.User.current());
          await queryResult.save();
        }
      }

      // Retrieving chatUsers from temp database

      const parseQuery = new Parse.Query("ChatUsers");
      parseQuery.equalTo("owner", Parse.User.current());
      const selectedUsers = await parseQuery
        .first()
        .then((result) => result.get("selectedUsers"));
      console.log("getting this:", selectedUsers);
      // const selectedUsers = await queryResult.get("selectedUsers");

      console.log("selectedUsersQuery", selectedUsers);
      return selectedUsers;
    }

    getSelectedUsers().then((result) => setUsersArray(result));
  }, []);

  useEffect(() => {
    if (chatRoom === null || chatRoom === undefined) {
      chatRoomSetup(usersArray).then((result) => {
        console.log("chatroomSetup result", result);
        setChatRoom(result);
      });
    }
    checkUsersArray(usersArray);
  }, [usersArray]);

  console.log("usersArray", usersArray);

  return (
    <div>
      {chatRoom === null && <h1> chat setup ...</h1>}

      {chatRoom !== undefined &&
        chatRoom !== null &&
        usersArray.length >= 2 &&
        sender.id !== undefined && (
          <div>
            <h1>Messages </h1>
            <LiveChat chatRoom={chatRoom} sender={sender} />
          </div>
        )}
    </div>
  );
}
