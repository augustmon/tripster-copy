import React from "react";
import "./SendMessage.css";

export default function SendMessage(props) {
  return (
    

<div>
    <button className="sendmessage" onClick={props.SendMessage}>
        {props.text}
    </button>
</div>

  );
}
