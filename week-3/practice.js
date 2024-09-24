function simpleFunction() {
  document.getElementById("changeTxt").innerHTML =
    "This is practice to change the text using a function!";
}
simpleFunction();

function anotherSimpleFunction() {
  document.querySelector("body").innerHTML +=
    "This function does not take any parameters.";
}

anotherSimpleFunction();

function yetAnotherSimpleFunction() {
  console.log("hello, World!");
}
yetAnotherSimpleFunction();

function simpleFunctionParameter(name) {
  document.getElementById("favBand").innerHTML +=
    "my favorite artist is" + " " + name + " " + "!";
}
simpleFunctionParameter("Burna Boy");

function yetsimpleFunctionParameter(name2) {
  console.log(name2);
}
yetsimpleFunctionParameter("Tope Olusegun");

function calcPerimeter(height, width) {
  const FormPerimeter = 2 * height + 2 * width;
  document.getElementById("panswer").innerHTML += FormPerimeter;
}
calcPerimeter(2, 4);
