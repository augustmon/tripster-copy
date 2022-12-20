import React from "react";
import "./Greeting.css";
import "./../../App.css";

export default function Greeting(props) {
  return (
    <div>
      <div>
        <div className="greeting-tag">{props.tag}</div>
      </div>

      <div>
        <div className="greeting-headline">{props.headline}</div>
      </div>

      <div>
        <div className="greeting-description">{props.description}</div>
      </div>
    </div>
  );
}
