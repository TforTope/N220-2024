//Dating//
document.getElementById("ticketNum").innerHTML += "3";
document.getElementById("ticketCost").innerHTML += "14";
document.getElementById("ttCost").innerHTML += 14 * 3;

//Shopping//
let bankAccount = 235.87;

let shirt = 35;
let pants = 75;
let shoes = 60;
let jacket = 75;

document.getElementById("banktotal").innerHTML +=
  bankAccount - shirt - pants - shoes;

document.getElementById("addJacket").innerHTML +=
  bankAccount - shirt - pants - shoes > jacket;

//Pizza//
let totalPizzas = 4;
let SlicesPerPizza = 8;
let slicesThatStudentCanEat = 2.5;

const totalSlices = totalPizzas * SlicesPerPizza;
const pizzaLeftover = totalSlices % slicesThatStudentCanEat;
const studentsFedWithPizza =
  (totalSlices - pizzaLeftover) / slicesThatStudentCanEat;

document.getElementById("profPizza").innerHTML += studentsFedWithPizza;
document.getElementById("profPizza2").innerHTML += pizzaLeftover;
//Monty's Mega Bar//
let adult = 12;
let child = 6;
let drinks = 1.5;

document.getElementById("Monty").innerHTML += adult * 2 + child + drinks * 3;

//Average Earned Tips
let weeklyTotal = 772.27;

document.getElementById("tips").innerHTML += weeklyTotal / 4;
