# tripster

A web app for meeting people at hostels

RULES:

- only pass Parse-objects between children
- ~~keep current user AND selected user in App.js~~
  -> keep **current user** in Parse (localstorage) and **selected user** in useState

TODO:

- setCurrentUser at api/user.js (in both login and signup forms)
- move ChatSetup into ChatRoom √
- initializeParse on App.js only
- HOW TO FIND A CHATROOM AGAIN?
  - Parse query.contains("senderId", [sender, receiver])
  - Parse query.contains("receiverId", [sender, receiver])
  - Parse query.equalTo("chatRoomId", chatRoom)
-
