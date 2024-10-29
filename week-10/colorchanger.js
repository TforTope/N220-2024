/**
 * @type {{currentColor: String, lastColor: String}[]}
 * @descripiton This is a list of colors that the user added
 */

const userColors = [];

/**
 * @type {Function}
 * @description Get's the color from user input to add to the userCColors list
 */
function addNewColorItem() {
  const newColorRef = document.getElementById("newColorItem");
  const newColorValue = newColorRef.value;

  userColors.push({ currentColor: newColorValue });
  newColorRef.value = "#000000";

  showUserColors();
}

/**
 * @description Loops through userColors listand populates them on the page
 */
function showUserColors() {
  const colorSquares = document.getElementById("color-squares");
  colorSquares.innerHTML = "";
  for (let i = 0; i < userColors.length; i++) {
    const userColor = userColors[i];
    colorSquares.innerHTML += `<div style= "height:200px; width: 200px; background-color: ${userColor.currentColor}" onclick="openColorChanger(${i})">
    <input 
    
    type="color" 
    id="user-color-${i}" 
    name="user-color-${i}" 
    
    hidden 
    value="${userColor.currentColor}"
    onchange="changeUserColor(${i})"
    />

    </div>`;
  }
}

function changeUserColor(userColorIndex) {
  const userColorRef = document.getElementById(`user-color-${userColorIndex}`);

  const lastColor = userColors[userColorIndex].currentColor;
  const newUserColor = {
    currentColor: userColorRef.value,
    lastColor: lastColor,
  };

  userColors.splice(userColorIndex, 1, newUserColor);

  showUserColors();
}

function openColorChanger(userColorIndex) {
  console.log(userColorIndex);
  document.getElementById(`user-color-${userColorIndex}`).click();
}
