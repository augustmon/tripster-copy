import Parse from "parse";

// Create a new User
export async function createParseUser(bookingId, name, passwordConfirm) {
  // check if bookingId exists!
  try {
    const id = await queryBookingId(bookingId);
    if (id !== null) {
      console.log(id + " Booking key exist");
    }
  } catch (error) {
    alert("BOOKING KEY ERROR: " + error.message);
  }

  const bookingObject = await queryBookingObject(bookingId);

  // Creates a new Parse "User" object, which is created by default in your Parse app
  let user = new Parse.User();
  // Set the input values to the new "User" object
  user.set("bookingId", bookingObject);
  user.set("username", name);
  user.set("password", passwordConfirm);
  try {
    // Call the save method, which returns the saved object if successful
    user = await user.save();
    if (user !== null) {
      // Notify the success by getting the attributes from the "User" object, by using the get method (the id attribute needs to be accessed directly, though)
      alert(
        `New user created with success! ObjectId: ${user.id}, 
        ${user.get("username")}, ${user.get("password")}`
      );
      await Parse.User.logIn(name, passwordConfirm);
      return user;
    }
  } catch (error) {
    alert(`User Signup Error: ${error.message}`);
  }
}

async function queryBookingId(bookingIdInput) {
  let parseQuery = new Parse.Query("Booking");
  parseQuery.equalTo("key", bookingIdInput);
  let results = await parseQuery.find();

  let returnKey = results[0].get("key");
  return returnKey;
}

async function queryBookingObject(bookingIdInput) {
  let parseQuery = new Parse.Query("Booking");
  parseQuery.equalTo("key", bookingIdInput);
  let results = await parseQuery.find();

  let returnObject = results[0];
  return returnObject;
}

// export async function doUserLogIn(username, password, bookingnumber) {
//   console.log("LOGGING IN ");

//   try {
//     const loggedInUser = await Parse.User.logIn(
//       username,
//       password,
//       bookingnumber
//     );
//     if ((bookingnumber, username, password !== null)) {
//     alert(
//       `Success! User ${loggedInUser.get("username")} has successfully signed in!`
//     )}
//     else {
//       console.log("ERROR")
//     }
//   }
// }

//     const currentUser = await Parse.User.current();
//     console.log(loggedInUser === currentUser);

//     let user = doUserLogIn();
//     user.set("bookingId", bookingnumber);
//     user.set("username", username);
//     user.set("password", password);

//     getCurrentUser();
//     return true;
//   } catch (error) {
//     alert(`Your info was not correct! ${error.message}`);
//     return false;
//   }
// }
