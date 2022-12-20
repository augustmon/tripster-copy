import React from "react";
import "./../../App.css";
import "./ChatTitle.css";
import Icon from "./../../graphics/back_arrow_idle.png";

import BackArrow from "./../../graphics/back_arrow_idle.png";

export default function ChatTitle() {

  return (
    <div>
      <header>
        <img 
               src={require('./../../graphics/back_arrow_idle.png')} 
               alt="back arrow" 
               height='40' 
               width='40'></img>
        
        <div className="chat-details">
          <div className="profil-picutre">
            <img
             src={/*${currentChat.chatDetails}* --> insert profile picture data here*/}
             alt="profile picture" 
             height='40' 
             width ='40'></img>
        
        <div className="centering">
          <div className="chat-title">
            <div className="app-headline">Satuday Dinner</div>
             
          </div>
        </div>
        </div>
        </div>
     
     </header>
 </div>
    );
}