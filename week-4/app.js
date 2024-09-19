let studentGrades = [78, 86, 92, 77, 50];

const answersPTag = document.getElementById("answers");

function printAnswer(answers) {
  answersPTag.innerHTML += `<br /> ${answers}`;
}

//ARRAT BASICS

//1. Arrats will print as a string separted string with commas by default
answersPTag.innerHTML += studentGrades;

//2. Access specific vlsues in array using indexes
//studentGrades [0]; indexes start at 0
//answersPTag.innerHTML += `<br /> ${studentGrades[1]}`;
printAnswer(studentGrades[1]);

//3. Assign new values to array items in the same way that you would a variable declared with let
//studentGrades[1] = 83;
studentGrades[1] = 83;

//4.
//answersPTag.innerHTML += `<br /> ${studentGrades}`;
printAnswer(studentGrades);

//5. All array have a lenth even if ir is zero
printAnswer(studentGrades.length);

//6. Arrats have a for Each methid that takes a function as the parameter
// that function has access to the values and indexes in the array
studentGrades.forEach(function (currentStudent, currentStudentIndex) {
  // Loop here
  studentGrades[currentStudentIndex] += 1;
  currentStudent += 1;
  printAnswer(studentGrades[currentStudentIndex]);
});

// 7. Same as 1
printAnswer(studentGrades);

//8. Similar to 2
const indexOfLastStudent = studentGrades.length - 1;
printAnswer(studentGrades[3]);

//9. use variable to track total grades added together.
// Looped through array and added to total
//Mathed up the average
let totalOfGrades = 0;

studentGrades.forEach(function (currentGrade) {
  totalOfGrades += currentGrade;
});

const averageGrade = totalOfGrades / studentGrades.length;
printAnswer(averageGrade);

//10
printAnswer(averageGrade > 80);

//ARRAY MORE!!!

//0. create an array
const friends = ["Elmo", "Spongebob", "CatDog", "Danny Phatom", "Timmy Turner"];

function printFriends(answer) {
  document.querySelector("#extraAnswers").innerHTML += `<br /> ${friends}`;
}

//1. Add items to an array using the push method
friends.push("Jimmy Neutron");
printFriends();

//2. Remove the last item to an array using the pop method
friends.pop();
printFriends();

//3. Remove the first item to an attay using the slice method
friends.splice(0, 1);
printFriends();

//4. Add item
friends.splice(0, 0, "Invader Zim");
printFriends();

//5. Use Splice Agau=in
friends.splice(2, 1);
printFriends();

//6. Splice
friends.splice(2, 0, "Gir");
printFriends();

//7. splice
friends.splice(3, 1, ["patrick", "squidward"]);
printFriends();
// splice method taeks three parameters
// 1. what index to start at
// 2. HOw many elements starting from that index should be deleted
// 3. What to add to the arry
// This could be just a value or an array of values to add multiple

//Objects
const person = {
  firstName: "Ty",
  lastName: "the Pumpkin Guy",
  age: 57,
  hometown: "Naptownn",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
//1. show full name
document.getElementById("fullName").innerHTML += person.getFullName();

//2. CHange value
person.age += document.getElementById("newFProp").innerHTML += person.age;

//3.printing object variable
document.getElementById("newFProp").innerHTML += `<br /> ${JSON.stringify(
  person
)}`;

//4. Remove property from person using delete keyword
delete person.hometown;
delete person.favoriteColor;
document.getElementById("newFProp").innerHTML += `<br /> ${JSON.stringify(
  person
)}`;

//5. Print a sentence using our object
console.log(`${person.getFullName()} is ${person.age} years old.`);

//6. Add a method to an existing object
person.isASenior = function () {
  return this.age >= 65;
};
console.log(person.isASenior());

let keyProp = "age";
console.log(`person[keyProp] = ${person[keyProp]}`);
console.log(`person[keyProp] = ${person.keyProp}`);
