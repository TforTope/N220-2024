function simpleFunctionOne() {
  // Code here
  document.getElementById("changeTxt").innerHTML =
    "Don't change this paragraph.";
}
simpleFunctionOne(); //this calls the function

function simpleFunctionTwo() {
  document.querySelector("body").innerHTML +=
    "This function does not take parameters.";
}
simpleFunctionTwo();

function sayHelloWorld() {
  console.log("hello, World!");
}
sayHelloWorld();

//stated using parameters
//parameters go inside the parathesis
function sayFavoriteBand(bandName) {
  document.getElementById("favBand").innerHTML += bandName + "<br/>";
}
sayFavoriteBand("Three Days Grace");
sayFavoriteBand("Maroon 5");

function sayMyName(myName) {
  console.log(myName);
}
sayMyName("Say my name");
sayMyName("Say my name");
sayMyName("if no one around you");

//Functions that do calculation

function calcRectPerimeter(height, width) {
  const perimeter = 2 * height + 2 * width;
  document.querySelector("#panswer").innerHTML += perimeter;
}
calcRectPerimeter(2, 4);

function calcArea() {
  const height = document.getElementById("height").value;
  const width = document.getElementById("width").value;
  console.log("height", height);
  console.log("width", width);

  document.querySelector("#answer").innerHTML +=
    "Area: " + height * width + "<br/>";
}

function calRectAreaAndPeri(height, width) {
  const perimeter = 2 * (height * width);
  const area = height * width;

  document.getElementById("multiAnswer").innerHTML += `
    Height: ${height} <br /> 
    Width: ${width} <br /> 
    Perimeter: ${perimeter} <br /> 
    Area: ${area} <br /> 
    `;
}
calRectAreaAndPeri(15, 2);
calRectAreaAndPeri(10, 10);

function myFunction() {
  alert("who goes there?");
}

function wizard(name, occupation) {
  // confirm("Welcome" + name + ". the " + occupation);
  confirm(`Welcome ${name}, the ${occupation}!`);
  document.getElementById(
    "future"
  ).innerHTML += `Welcome ${name}, the ${occupation}!`;
}

function addItem() {
  const newItem = prompt("Add Item");
  console.log(newItem);
}

function returnValue(color) {
  return color;
}
alert(returnValue("purple"));

function calcCircleArea(radius) {
  return 2 * Math.PI * radius;
}
document.getElementById("useOne").innerHTML += calcCircleArea(2);
document.getElementById("useTwo").innerHTML += calcCircleArea(4);
