const classChallenge = {
  courseNumber: "N220",
  courseTitle: "Intro to Media Application Development",
  totalSeats: 20,
  enrolled: 18,
  getaAvailiablity: function () {
    return this.totalSeats > this.enrolled;
  },
};

//1. Are seat avaliable
console.log(`N220 Open:${classChallenge.getaAvailiablity()}`);

//2. Two more people
classChallenge.enrolled += console.log(
  `Total Student: ${classChallenge.enrolled}`
);

//Built-in Objects!!!
var tacocat = "wednesday";
function IUPUIWebsite() {
  console.log(window.tacocat);
  console.log(`Inner Width: ${window.innerWidth}`);
  console.log(`Outer Width: ${window.outerWidth}`);
  console.log(window.location);
}

function printPage() {
  window.print();
}

//Document OBjects!!!
document.getElementById("dpDetails").innerHTML += classChallenge;
document.querySelector();
