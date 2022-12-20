import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { initializeParse } from "@parse/react";

// Component imports
import Welcome from "./pages/Welcome/Welcome";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ActiveChats from "./pages/ActiveChats/ActiveChats";
import ChatRoom from "./pages/ChatRoom/ChatRoom";
import Discover from "./pages/Discover/Discover";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";

// Note the live query URL instead of the regular server url
const PARSE_LIVE_QUERY_URL = "https://tripster.b4a.io/";
const PARSE_APPLICATION_ID = "XCuriaWlKUTt14yvNJVJ77kjQyC8yKFIOFqiVFck";
const PARSE_JAVASCRIPT_KEY = "JxCHF3R5JB8VH3r8UXI9LCCEI14N3IdNIvrRhgIL";

// Initialize parse using @parse/react instead of regular parse JS SDK
initializeParse(
  PARSE_LIVE_QUERY_URL,
  PARSE_APPLICATION_ID,
  PARSE_JAVASCRIPT_KEY
);

function App() {
  const [chatUsers, setChatUsers] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/settings" element={<Settings />}></Route>

        <Route path="/resetpassword" element={<ResetPassword />}></Route>
        <Route
          path="/activechats"
          element={<ActiveChats setChatUsers={setChatUsers} />}
        ></Route>
        <Route
          path="/chatroom"
          element={<ChatRoom chatUsers={chatUsers} />}
        ></Route>
        <Route
          path="/discover"
          element={<Discover setChatUsers={setChatUsers} />}
        ></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
