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
let pizza = 4;
let slices = 8;
let piecesOfPizza = 2.5;


document.getElementById("profPizza") += 
document.getElementById("profPizza2")

//Monty's Mega Bar//
let adult = 12;
let child = 6;
let drinks = 1.5;

document.getElementById("Monty").innerHTML += adult * 2 + child + drinks * 3;

//Average Earned Tips
let weeklyTotal = 772.27;

document.getElementById("tips").innerHTML += weeklyTotal / 4;
