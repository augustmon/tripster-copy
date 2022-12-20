import Parse from "parse";

export async function clearSelectedUsers() {
  // Parse.User.current().set("selectedUsers", null);
  // Parse.User.current().save();

  const parseQuery = new Parse.Query("ChatUsers");
  parseQuery.equalTo("owner", Parse.User.current());
  const queryResult = await parseQuery.findAll();
  console.log("query result", queryResult);
  queryResult.forEach((result) => result.destroy());
}

export async function checkUsersArray(usersArray) {
  // check if both UserName variables hold any values
  if (usersArray === undefined || usersArray.length < 2) {
    console.log("Trying to fetch users");
    return false;
  } else {
    console.log("Users are present");
    return true;
  }
}
// DELETE THIS ^

export async function chatRoomSetup(usersArray) {
  let chatRoomObject = null;
  try {
    const chatRoomParseQuery = new Parse.Query("ChatRoom");
    chatRoomParseQuery.containsAll("users", usersArray); // .equalTo ?
    const chatRoomParseQueryResult = await chatRoomParseQuery.first();
    if (
      chatRoomParseQueryResult !== undefined &&
      chatRoomParseQueryResult !== null
    ) {
      console.log("Entering Chat Room:", chatRoomParseQueryResult.id);
      chatRoomObject = chatRoomParseQueryResult;
      // chatRoomObject.save();
      return chatRoomObject;
      //
      //
    } else if (usersArray.length >= 2) {
      alert("CREATING NEW CHAT ROOM FOR", usersArray);
      chatRoomObject = new Parse.Object("ChatRoom");
      chatRoomObject.set("users", usersArray); // POINTER OBJECTS HERE!
      await chatRoomObject.save();
      console.log("new chatroom:", chatRoomObject.id);
      return chatRoomObject;
      //
      //
    } else {
      console.log("not two users set");
    }
  } catch (error) {
    console.log("ChatRoom Error", error);
  }
}
