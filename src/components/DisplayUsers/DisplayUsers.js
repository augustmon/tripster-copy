import React, { useState, useEffect } from "react";
import Parse from "parse";
import UserLink from "../UserLink/UserLink";
import ChatLink from "../UserLink/ChatLink";

export default function DisplayUsers(props) {
  const [localUsers, setLocalUsers] = useState([]);
  const [activeChats, setActiveChats] = useState([]);
  const [groupChats, setGroupChats] = useState([]);

  useEffect(() => {
    // In Discover page:
    if (props.displayMode === "discover") {
      queryAllUsers().then((result) => {
        if (localUsers.length === 0) {
          setLocalUsers(result);
        } else {
          console.log("localUsers is already set");
        }
      });
    }
    // In ActiveChats page:
    else if (props.displayMode === "active") {
      queryActiveChats().then((result) => {
        if (activeChats === undefined || activeChats.length === 0) {
          setActiveChats(result);
        } else {
          console.log("active chats already set");
        }
      });
    }

    // Group chats on Discover page
    else if (props.displayMode === "group") {
      queryGroupChats().then((result) => {
        if (groupChats === undefined || groupChats.length === 0) {
          setGroupChats(result);
        } else {
          console.log("group chats already set");
        }
      });
    }
  }, []);

  //// IMPORT THIS FROM API
  async function queryActiveChats() {
    try {
      const currentUser = Parse.User.current();
      console.log("querying chats with", currentUser.get("username"));

      const otherUserQuery = new Parse.Query("User");
      otherUserQuery.notEqualTo("objectId", currentUser.id);
      const otherUsers = await otherUserQuery.find();

      const queryChats = new Parse.Query("ChatRoom");
      queryChats.equalTo("users", currentUser);
      queryChats.containedIn("users", otherUsers);

      // queryChats.exists("users");
      const allActiveChats = await queryChats.find();
      if (allActiveChats.length === 0) {
        return false;
      }
      console.log(allActiveChats.map((chat) => chat.get("users")));

      return allActiveChats;
    } catch (error) {
      console.log(error);
    }
  }

  //// IMPORT THIS FROM API
  async function queryAllUsers() {
    try {
      // const activeChats = await queryActiveChats();
      const currentUser = Parse.User.current();
      const queryUsers = new Parse.Query("User");
      queryUsers.notEqualTo("objectId", currentUser.id); // I need to get only users that are not in any active chats from array
      // queryUsers.notContainedIn("users", activeChats);
      //
      const allUserObjects = await queryUsers.find();

      return allUserObjects;
    } catch (error) {
      console.log(error);
    }
  }
  ////

  //// IMPORT THIS FROM API
  async function queryGroupChats() {
    try {
      const groupChatQuery = new Parse.Query("ChatRoom");
      groupChatQuery.equalTo("isGroupChat", true);
      const allGroupChats = await groupChatQuery.find();

      return allGroupChats;
    } catch (error) {
      console.log(error);
    }
  }

  //// IMPORT THIS FROM API
  async function clickGroupChat(chat) {
    // chat.unset("users");
    // chat.save();
    let newUsers = [];
    const currentUser = Parse.User.current();
    const users = chat.get("users");

    if (chat.get("users") === undefined || chat.get("users") === ["empty"]) {
      newUsers = [currentUser];
      chat.set("users", newUsers);
      chat.save();
    } else if (!users.includes(currentUser)) {
      newUsers = users;
      newUsers.push(currentUser);
      chat.set("users", newUsers);
      chat.save();
    } else {
      return;
    }
    props.setChatUsers(chat.get("users"));
    // props.setChatUsers(newUsers);
  }

  return (
    <div className="display-users">
      {props.displayMode === "active" && activeChats === false && (
        <h3 className="body">
          You have no active chats. Find someone to chat with on the 'Discover'
          page.
        </h3>
      )}

      {localUsers && (
        <ul>
          {localUsers.map((user) => (
            <UserLink
              key={user.id}
              onClick={() => props.setChatUsers([user, Parse.User.current()])}
              to="/chatroom"
              username={user.get("username")}
              nationality={user.get("nationality")}
              status={user.get("status")}
              photo={user.get("photo").url()}
            />
          ))}
        </ul>
      )}

      {activeChats && (
        <ul>
          {activeChats.map((chat) => (
            <ChatLink
              onClick={() => props.setChatUsers(chat.get("users"))}
              key={chat.id}
              chat={chat}
              to="/chatroom"
              displayMode={props.displayMode}
              // username={"chat with " + chat.get("users")[1].get("username")}
            />
          ))}
        </ul>
      )}

      {groupChats && (
        <ul>
          {groupChats.map((chat) => (
            <ChatLink
              onClick={
                () => {
                  console.log("entering group chat");
                  clickGroupChat(chat);
                }
                // props.setChatUsers(chat.get("users").push(Parse.User.current()))
              }
              key={chat.id}
              chat={chat}
              to="/chatroom"
              displayMode={props.displayMode}
              photo={chat.get("chatPhoto").url()}
              // username={"chat with " + chat.get("users")[1].get("username")}
            />
          ))}
        </ul>
      )}
    </div>

    //
  );
}
