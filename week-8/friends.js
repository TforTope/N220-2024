//Refernece Variables

const friendNameInput = document.getElementById("friendName");
const friendslist = document.getElementById("friendsList");

// Variable to track my friends
const myFriends = [,];

//function for adding frined
function addFriend() {
  //get name user typed in
  const nameValue = friendNameInput.value;
  //add friend to myFrineds list
  myFriends.push(nameValue);
  //add the name to the friends list
  friendslist.innerHTML += `<li>${nameValue} <button onclick="removeFriend('${nameValue}')>X</button>
  </li>`;

  //clear the name the user typed
  friendNameInput.value = "";
}

function removeFriend() {
  //Use variable to track index of friend to remove
  let friendIndex;

  //loop through current friends to find the friendName
  for (let i = 0; i < myFriends.length; i++) {
    if (myFriends[i] === friendName) {
      friendIndex = i;
    }
  }
  myFriends.splice(friendIndex, 1);
  console.log(myfriends);
}

//function to loop through myfriends abd show 'em on the page 

function showFriends() {
    // CLear pages old friends list 
    friendslist.innerHTML = ""
    
    //loop through friends 
    friendsList.forEach(function (friendName) {

    }
}