import React from "react";
import "./../../App.css";
import "./Discover.css";

// COMPONENTS
import DisplayUsers from "../../components/DisplayUsers/DisplayUsers";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { clearSelectedUsers } from "../../api/chat";

export default function Discover(props) {
  clearSelectedUsers();

  return (
    <div className="discover-page">
      <header>
        <div>
          <div>
            <PageTitle title="Discover" logo={true} />
          </div>
        </div>
      </header>

      <div className="people">
        <div className="title">Discover people</div>
      </div>
      <div className="user-list">
        <DisplayUsers
          setChatUsers={props.setChatUsers}
          displayMode="discover"
        />
      </div>

      <div className="people">
        <div className="title">Group chats</div>
      </div>
      <div className="group-list">
      <DisplayUsers displayMode="group" setChatUsers={props.setChatUsers} />
      </div>
      <div>
        <NavigationBar
          discover={"active"}
          chat={"idle"}
          settings={"idle"}
          profile={"idle"}
        />
      </div>
    </div>
  );
}
