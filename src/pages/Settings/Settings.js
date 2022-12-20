import React from "react";
import Parse from "parse";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// COMPONENTS
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "../../components/Button/Button";
import "./../../App.css";
import "./Settings.css";
import { clearSelectedUsers } from "../../api/chat";

export default function Settings() {
  clearSelectedUsers();

  const navigate = useNavigate();

  console.log("current user", Parse.User.current());

  async function handleLogOut() {
    await Parse.User.logOut();
    if (Parse.User.current() === null) {
      alert("You are succesfully logged out");
      navigate("/");
    }
  }

  return (
    <div>
      <header>
        <div>
          <div>
            <PageTitle title="Settings" logo={true} />
          </div>
        </div>
      </header>

      <body>
        <div className="buttons">
          <div className="settings-buttons">
            <Button text="Hide profile" colors="dead" />
          </div>
          <div className="settings-buttons">
            <Link to="/resetpassword">
            <Button text="Reset password" colors="dead" />
            </Link>
          </div>

          <div className="settings-buttons">
            <Button text="Log out" colors="signup" onClick={handleLogOut} />
          </div>
        </div>

        <div className="centering">
          <NavigationBar
            discover={"idle"}
            chat={"idle"}
            settings={"active"}
            profile={"idle"}
          />
        </div>
      </body>
    </div>
  );
}
